import { Pagination, ConfigProvider } from 'antd';
import theme from './theme/themeConfig';

import React from 'react';
import style from './paginado.module.css';

const AntdPaginado = ({ current, total, onChange }) => (
  <ConfigProvider theme={theme} >

      <Pagination showQuickJumper current={current} total={total} onChange={onChange}

      />

  </ConfigProvider>
  
);

const Paginado = ({ currentPage, totalPages, onPageChange }) => {
  const renderPageNumbers = () => {
    const pageNumbers = [];

    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(
        <button
          key={i}
          className={`${style.buttonPage} ${i === currentPage ? style.active : ''}`}
          onClick={() => onPageChange(i)}
        >
          {i}
        </button>
      );
    }

    return pageNumbers;
  };

  return (
    <div className={style.containButPage}>
      <ul className="pagination">
        <AntdPaginado current={currentPage} total={totalPages * 10} onChange={onPageChange}  />
      </ul>
    </div>
  );
};

export default Paginado;
