import React from 'react';
import style from './paginado.module.css'

const Paginado = ({ currentPage, totalPages, onPageChange }) => {

  const renderPageNumbers = () => {

    const pageNumbers = [];

    for (let i = 1; i <= totalPages; i++) {

      pageNumbers.push(

        <button key={i} className={i === currentPage ? 'active' : ''}>
          <span className={style.buttonPage} onClick={() => onPageChange(i)}>{i}</span>
        </button>

      );
    }

    return pageNumbers;
  };

  return (
    <div className={style.containButPage} >

      <ul className="pagination">
        {renderPageNumbers()}
      </ul>

    </div>

  );
};

export default Paginado;