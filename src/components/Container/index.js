import React from 'react';
import './Container.scss';
import Table from '../Table';

const Container = () => {
  return (
    <div className="background">
      <div className="background__top" />
      <div className="container">
        <header>Курсы криптовалют</header>
        <Table />
      </div>
    </div>
  );
};

export default Container;
