import React from 'react';
import './matriz.css'; // Crie um arquivo CSS para os estilos
import bolinha from './bolinha'; // Importe o componente bolinha

function MatrizBolinhas({ expectativaVida }) {
  const idade = 23;
  const bolinhasPorLinha = 36;
  const totalBolinhas = 80 * 12;
  const numeroLinhas = Math.ceil(totalBolinhas / bolinhasPorLinha);
  const tempoVivido = idade * 12;

  const cores = ['red', 'blue', 'green', 'yellow', 'purple', 'orange', 'pink', 'brown', 'gray', 'black'];

  //Tempo em dias gasto com cada atividade
  var atividades = [
    {
        AssitindoTV:{nome: 'Assistindo TV', cor: 'red', tempo: 2, unidade: 'horas'}
    },
    {
    Trabalhando: {nome: 'Trabalhando', cor: 'blue', tempo: 8, unidade: 'horas'},
    },
    {
     Estudando: {nome: 'Estudando', cor: 'green', tempo: 4, unidade: 'horas'},
    },
    {
        Dormindo: {nome: 'Dormindo', cor: 'yellow', tempo: 8, unidade: 'horas'},
    },
    {
        Comendo: {nome: 'Comendo', cor: 'orange', tempo: 1, unidade: 'hora'},
    },
    {
        Exercitando: {nome: 'Exercitando', cor: 'pink', tempo: 1, unidade: 'hora'},
    }

  ]
  

  const renderizarLinhas = () => {
    const linhas = [];
    
    for (let i = 0; i < numeroLinhas; i++) {
      const bolinhas = [];
      
      for (let j = 0; j < bolinhasPorLinha && i * bolinhasPorLinha + j < totalBolinhas; j++) {
        
        if (i * bolinhasPorLinha + j < tempoVivido) {
          bolinhas.push( <div key={`${i}-${j}`} className="bolinha" style={{backgroundColor: 'green'}}></div>);
          continue;
        } 

            
        bolinhas.push( <div key={`${i}-${j}`} className="bolinha" style={{backgroundColor: 'white'}}></div>);

      }
      linhas.push(<div key={i} className="linha">{bolinhas}</div>);
    }

    return linhas;
  
    };

  return (
    <div className="matriz">
      {renderizarLinhas()}
    </div>
  );
}

export default MatrizBolinhas;
