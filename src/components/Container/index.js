import React from 'react';
import './Container.scss';
import Table from '../Table';

const Container = () => {
  return (
    <div className="container">
      <header>Курсы криптовалют</header>
      <Table />
    </div>
  );
};

export default Container;
