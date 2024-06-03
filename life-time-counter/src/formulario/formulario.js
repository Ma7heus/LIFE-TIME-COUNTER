import React, { useState } from 'react';
import './formulario.css';
import MatrizBolinhas from '../matrizBolinhas.js/matriz';

function FormularioDados() {
  const [formData, setFormData] = useState({
    hoje: '',
    nascimento: '',
    idade: '',
    mediaExpectativaVida: '',
    expectativaVida: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Aqui você pode adicionar a lógica para lidar com os dados do formulário
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="form">

     <legend>Calculadora de Expectativa de Vida</legend> 
     
      <div>
        <label htmlFor="idade">Idade:</label>
        <input type="number" id="idade" name="idade" value={formData.idade} onChange={handleChange} />
      </div>
      <div>
        <label htmlFor="mediaExpectativaVida">Média Expectativa Vida:</label>
        <input type="number" id="mediaExpectativaVida" name="mediaExpectativaVida" value={formData.mediaExpectativaVida} onChange={handleChange} />
      </div>
      <div>
        <label htmlFor="expectativaVida">Expectativa Vida:</label>
        <input type="number" id="expectativaVida" name="expectativaVida" value={formData.expectativaVida} onChange={handleChange} />
      </div>     
     
      <MatrizBolinhas expectativaVida={formData.expectativaVida} />
    
    
    </form>


  );
}

export default FormularioDados;
