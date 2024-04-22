import { useState } from 'react';
import './App.css';

function App() {

  const [Salario,setSalario] = useState('');
  const [QuantidadeFuncionario,setQuantidadeFuncionario] = useState('');
  const [resultado,setResultado] = useState('');

  function calcularResultado(){
    console.log('Salario: '/Salario)
    
    setResultado(parseFloat(Salario)*parseFloat(QuantidadeFuncionario));
  }

  function ReiniciarCalculo(){
    setResultado('');
    setSalario('');
    setQuantidadeFuncionario('');
    }

  return (
    <div className="App">
    <h2>Folha de Pagamento</h2>

      <div class="container text-center">
      <div class="row">
      <div class="col-6">

     <div className='text-start mt-3'>
      <label>Salario</label>
      <Input onChange={(e)=>setSalario(e.target.value)} value={Salario}/>
     </div>
      
      
     <div className='text-start mt-3'>
      <label>Quantidade Funcionario</label>
      <Input onChange={(e)=>setQuantidadeFuncionario(e.target.value)} value={QuantidadeFuncionario}/>
     </div>


     </div>
     <div class="col-6 mt-5">
     <label>Resultado</label>
     <Input onChange={(e)=>setResultado(e.target.value)} value={resultado}/>
     </div>
    
     <div className='col-12 d-flex justify-content-center flex-column mt-5'>

    <Button onClick={calcularResultado} label="Calcular" cor="verde" /> 
    <Button onClick={ReiniciarCalculo}label="Reiniciar" cor="vermelho" /> 


    </div>
    </div>
    </div>

   </div>


  );
}

export default App;
