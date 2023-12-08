"use client";
import React, { useState } from 'react';
import './gamedetail.css';
import { FaPen } from 'react-icons/fa';
import Modal from './modal/Modal';
import { validations } from './util';
import { valuesIn } from 'lodash';

const GameDetail = ({ game }) => {
  const [gameEdited, setGameEdited] = useState(game);
  const [selectedImagePreview, setSelectedImagePreview] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [inputErrors, setInputErrors] = useState(
    {
      title: false,
      description: false,
      price: false
    }
  )
  const [inputTitle, setInputTitle] = useState("titleInputClass");
  const [inputDescription, setInputDescription] = useState("descriptionInputClass");
  const [inputPrice, setInputPrice] = useState("priceInputClass");

  const handleEdit = (event) => {

    if (event.target.name === "price" && isNaN(event.target.value)) return;
    if (event.target.name === "price") {
      if (parseInt(event.target.value) > 150) return;
    }
    const inputEvaluated = validations(event.target.name, event.target.value);

    if (inputEvaluated[1]) setInputErrors({
      ...inputErrors,
      [inputEvaluated[0]]: inputEvaluated[1]
    });

    if (inputEvaluated[1] && inputEvaluated[0] == "title") {
      setInputTitle("titleInputClassError");
      setInputPrice('');
      setInputDescription('');
    }

    else if (inputEvaluated[1] && inputEvaluated[0] == "description") {
      setInputDescription("descriptionInputClassError");
      setInputPrice('');
      setInputTitle("");
    }

    else if (inputEvaluated[1] && inputEvaluated[0] == "price") {
      setInputPrice("priceInputClassError");
      setInputDescription('');
      setInputTitle("");
    }

    if (!inputEvaluated[1] && inputEvaluated[0] == 'title') {
      setInputErrors({
        title: false,
        description: false,
        price: false
      })
      setInputTitle('');
    }

    if (!inputEvaluated[1] && inputEvaluated[0] == 'description') {
      setInputErrors({
        title: false,
        description: false,
        price: false
      })
      setInputDescription('');
    }

    if (!inputEvaluated[1] && inputEvaluated[0] == 'price') {
      setInputErrors({
        title: false,
        description: false,
        price: false
      })
      setInputPrice('');
    }

    setGameEdited({
      ...gameEdited,
      [event.target.name]: event.target.value,
    });

    //MANEJO DE OFERTAS
    /*     else {
    
        } */

  };

  const handleImagePreview = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
    setIsModalOpen(false);
  };


  const verifyErrors = () => {
    const valuesInputErrors = Object.values(inputErrors);

    for (const value of valuesInputErrors) {
      if (value) {
        return true; // Si encuentra al menos un error, retorna true
      }
    }

    return false;
  };

  const cleanInputs = () => {
    setGameEdited(game)
  }


  return (
    <div className='gameDetailContainer'>
      <div className='gridDetail'>
        <div className='imgAndPen'>
          {selectedImagePreview ? (
            <img
              src={selectedImagePreview}
              alt='Selected'
              className='imgToEdit'
              style={{ width: '100%', height: '100%' }}
            />
          ) : (
            <img
              src={gameEdited.image}
              alt='Original'
              className='imgToEdit'
              style={{ width: '100%', height: '100%' }}
            />
          )}
          <span onClick={() => setIsModalOpen(!isModalOpen)} className='spanPen' ><FaPen /></span>
          <div className='penAndModal' >
            <Modal
              isOpen={isModalOpen}
              setIsModalOpen={setIsModalOpen}
              setGameEdited={setGameEdited}
              gameEdited={gameEdited}
              handleImagePreview={handleImagePreview}
              selectedImagePreview={selectedImagePreview}
              setSelectedImagePreview={setSelectedImagePreview}
            />
          </div>
        </div>

        <div className='propsToEdit'>
          <input className={inputTitle} type='text' onChange={handleEdit} value={gameEdited.title} name='title' placeholder={gameEdited.title} />
          <input className={inputDescription} type='text' onChange={handleEdit} value={gameEdited.description} name='description' placeholder={gameEdited.description} />
          <input className={inputPrice} type='text' onChange={handleEdit} value={gameEdited.price} name='price' placeholder={`${gameEdited.price} $`} />
          <input /* className={inputOffert} */ type='text' onChange={handleEdit} value={gameEdited.offert} name='offert' placeholder={!gameEdited.offert && 'this game has no offers'} disabled={!gameEdited.offert} />

          <button className='cleanButton' disabled={verifyErrors() || gameEdited === game} onClick={cleanInputs}>CLEAN</button>
          <button className='deleteButton' disabled={verifyErrors() || gameEdited === game} >DELETE GAME</button>
        </div>
      </div>

      <div className='confirmAndCancel'>
        <button className='confirm' disabled={verifyErrors() || gameEdited === game} >Confirm</button>
        <button className='cancel' disabled={verifyErrors() || gameEdited === game} >Cancel</button>
      </div>
    </div>
  );
};

export default GameDetail;
