import React , {Component}from 'react';
import { Line } from 'react-chartjs-2';

const data = {
  labels: ['Jan','Fev','Mar','Abr','Maio','Jun','Jul','Ago','Set','Out','Nov','Dez'],


  datasets: [
    {
      label: 'Abertos',
      data: [12, 19, 3, 5,],
      fill: true,
      backgroundColor: 'rgba(30,63,96,0.1)',
      borderColor: 'rgba(30,63,96 )',
    },
    {
      label: 'Fechados',
      data: [2,3,3,3,2,4,2,10],
      fill: true,
      backgroundColor: 'rgb(252,120, 12,0.1)',
      borderColor: 'rgba(252,120, 12)',
    },
  ],
  

  
};


const options = {
  scales: {
    y: {
      beginAtZero: true
    }
  }
};  


const Chart = () => {
    return ( 
        <>
            <h6>Chamados Abertos x Fechados</h6>
            <Line data={data} options={options}></Line>
        </>
     );
}
 
export default Chart;
