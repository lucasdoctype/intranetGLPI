import React, { Component } from 'react';
import { Container ,Col ,Row } from 'react-bootstrap';

import { Doughnut } from 'react-chartjs-2';

const data = {
  labels: ['Sustentação', 'TOTVS', 'Orquestra'],
  datasets: [
    {
      label: '# of Votes',
      data: [12, 19, 3],
      backgroundColor: [
        'rgba(252,120,12,0.7)',
        'rgba(30,63,96,0.9)',
        'rgba(252,12,156,0.9)',
      ],
      borderColor: [
        'rgba(252,120,12)',
        'rgba(30,63,96)',
        'rgba(252,12,156)',

      ],
      borderWidth: 1,
    },
  ],
};



const Chart = () => {
  return (
    <>
      <Container>
        
          <Col>
            <h6>Chamados Abertos por Equipe</h6>
            <Doughnut data={data}></Doughnut >
          </Col>

      </Container>
    </>
  );
}

export default Chart;
