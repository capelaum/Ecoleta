import React, { useEffect, useState, ChangeEvent, FormEvent } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi'
import { Map, TileLayer, Marker } from 'react-leaflet';
import axios from 'axios';
import { LeafletMouseEvent } from 'leaflet';
import api from '../../services/api';

import MyDropzone from '../../components/Dropzone';

import './styles.css';

import logo from '../../assets/logo.svg'

// State de array ou objeto -> informar tipos da var
interface Item {
  id: number;
  name: string;
  image_url: string;
}

interface IBGE_UF {
  sigla: string;
}

interface IBGE_City {
  nome: string;
}

const CreatePoint = () => {

  //*** UseStates

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    whatsapp: ''
  });

  const [items, setItems] = useState<Item[]> ([]);
  const [ufs, setUfs] = useState<string[]>([]);
  const [cities, setCities] = useState<string[]>([]);
  
  const [selectedUf, setSelectedUf] = useState('0');
  const [selectedCity, setSelectedCity] = useState('0');
  const [selectedItems, setSelectedItems] = useState<number[]>([]);
  const [selectedPosition, setSelectedPosition] = useState<[number, number]>([0, 0]);
  const [selectedFile, setSelectedFile] = useState<File>();

  const [initialPosition, setInitialPosition] = useState<[number, number]>([0, 0]);

  const history = useHistory();

  //*** UseEffects

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(position => {
      const { latitude, longitude } = position.coords;
      setInitialPosition([latitude, longitude]);
    })
  }, []);

  // Pegar os itens de nossa API do backend
  useEffect(() => {
    api.get('items').then(response => {
      setItems(response.data);
    })
  }, []);

  // Pega as UFs da API do IBGE
  useEffect(() => {
    axios
      .get<IBGE_UF[]>('https://servicodados.ibge.gov.br/api/v1/localidades/estados/')
      .then(response => {
        const ufInitials = response.data.map(uf => uf.sigla);
        setUfs(ufInitials);
      })
  }, []);

  // Carregar as cidades conforme a UF atualizar
  useEffect(() => {
    if(selectedUf === '0') {
      return;
    }

    axios
    .get<IBGE_City[]>(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${selectedUf}/municipios`)
    .then(response => {
      const cityNames = response.data.map(city => city.nome);
      setCities(cityNames);
    });
  }, [selectedUf]);

  //*** Functions

  // Identificar qual UF foi selecionada
  function handleSelectUf(event: ChangeEvent<HTMLSelectElement>) {
    const uf = event.target.value
    setSelectedUf(uf);
  }

  // Identifica qual cidade foi selecionada
  function handleSelectCity(event: ChangeEvent<HTMLSelectElement>) {
    const city = event.target.value
    setSelectedCity(city);
  }

  function handleMapClick(event: LeafletMouseEvent) {
    setSelectedPosition([
      event.latlng.lat,
      event.latlng.lng
    ])
  }

  // mantem todos dados do formData e atualiza apenas se modificado
  function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
    const {name, value} = event.target;

    setFormData({...formData, [name]: value}); // modifica o valor apenas do input de propriedade 'name'
  }

  // identificar qual o item selecionado
  function handleSelectItem(id: number) {
    const alreadySelected = selectedItems.findIndex(item => item === id);

    // Se tiver um Index -> já esta selecionado -> remover selected
    if(alreadySelected >= 0) {
      const filteredItems = selectedItems.filter(item => item !== id);
      
      setSelectedItems(filteredItems);  // passa o array com o array de itens filtrado
    } else {
      setSelectedItems([...selectedItems, id]);
    }

  }

  // Submete todos dados do formulario
  async function handleSubmit(event: FormEvent) {
    event.preventDefault();

    console.log(selectedFile); 

    const { name, email, whatsapp } = formData;
    const uf = selectedUf;
    const city = selectedCity;
    const [latitude, longitude] = selectedPosition;
    const items = selectedItems;

    const data = new FormData();

    data.append('name', name);
    data.append('email', email);
    data.append('whatsapp', whatsapp);
    data.append('uf', uf);
    data.append('city', city);
    data.append('latitude', String(latitude));
    data.append('longitude', String(longitude));
    data.append('items', items.join(','));

    if(selectedFile)
      data.append('image', selectedFile);
    else
      alert('Selecione uma imagem.');

    //console.log(data);
    try{
      await api.post('points', data);
      alert('Ponto de Coleta criado!');
    }catch {
      alert('Revise e complete os campos corretamente.');
    }

    history.push('/');
  }

  //* Pagina de Criar Ponto de Coleta
  return (
    <div id="page-create-point">
      <header>
        <img src={logo} alt="Ecoleta"/>

        <Link to="/">
          <FiArrowLeft/>Voltar para home
        </Link>
      </header>

      <form onSubmit={handleSubmit}>
        <h1>Cadastro <br/> do ponto de coleta</h1>

        <MyDropzone onFileUpload={setSelectedFile} />

        <fieldset>
          <legend>
            <h2>Dados</h2>
          </legend>

          <div className="field">
            <label htmlFor="email">Nome da Entidade</label>
            <input 
              type="text" 
              name="name" 
              id="name" 
              onChange={handleInputChange}
            />
          </div>

          <div className="field-group">
            <div className="field">
              <label htmlFor="email">E-mail</label>
              <input 
                type="email" 
                name="email" 
                id="email" 
                onChange={handleInputChange}
              />
            </div>

            <div className="field">
              <label htmlFor="whatsapp">Whatsapp</label>
              <input 
                type="text" 
                name="whatsapp" 
                id="whatsapp" 
                onChange={handleInputChange}
              />
            </div>
          </div>
        </fieldset>

        <fieldset>
          <legend>
            <h2>Endereço</h2>
            <span>Selecione o endereço do mapa</span>
          </legend>

          <Map center={initialPosition} zoom={14} onClick={handleMapClick}>
            <TileLayer
              attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={selectedPosition} />
          </Map>

          <div className="field-group">
            <div className="field">
              <label htmlFor="uf">Estado (UF)</label>
              <select 
                name="uf" 
                id="uf" 
                value={selectedUf} 
                onChange={handleSelectUf}
              >
                <option value="0">Selecione uma UF</option>
                {ufs.map(uf => (
                  <option key={uf} value={uf}>{uf}</option>
                ))}
              </select>
            </div>

            <div className="field">
              <label htmlFor="city">Cidade</label>
              <select 
                name="city" 
                id="city"
                value={selectedCity}
                onChange={handleSelectCity}
              >
                <option value="0">Selecione uma Cidade</option>
                {cities.map(city => (
                  <option key={city} value={city}>{city}</option>
                ))}
              </select>
            </div>
          </div>

        </fieldset>

        <fieldset>
          <legend>
            <h2>Itens de Coleta</h2>
            <span>Selecione um ou mais itens de coleta abaixo</span>
          </legend>

          <ul className="items-grid" >
            {items.map(item => (
              <li 
                key={item.id} 
                onClick={() => handleSelectItem(item.id)}
                className={selectedItems.includes(item.id) ? 'selected' : ''}
              >
                <img src={item.image_url} alt={item.name}/>
                <span>{item.name}</span>
              </li>
            ))}
          </ul>
        </fieldset>

        <button type="submit">Cadastrar ponto de coleta</button>
      </form>
    </div>
  );
}

export default CreatePoint;