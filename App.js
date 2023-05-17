import React,{useState} from "react";
import './App.css';

function Jujuba () {
  const [senha, setSenha]= useState('');
  const [email, setEmail]= useState('');
  const [cpf, setCpf]= useState('');
  const [opcoes, setOpcoes]= useState ('');
  const guardarEmail = (event) => {
    setEmail(event.target.value);
  }
  const guardarSenha = (event) => {
    setSenha(event.target.value);
  }
  
  
  const guardarCpf = (event) => {
    setCpf(event.target.value);
  }

  const guardarSexo = (event) => {
    setOpcoes(event.target.value);
  }
  
    
  const a = () => {
    if(senha.length <8) {
     alert ("Tente novamente!");

    // if(email === "") {
    //alert ("Tente outra vez!");
  //}

  
 
  }
alert (`Seu email é ${email}`)
};
  return (
    <div className="home">
      <div>
      <h1 className="title">Cadastre-se aqui!</h1>
        <p>LOGIN:</p>
        <div>
          <p className="page">Digite o seu CPF:</p>
          <input id="cpf" value={cpf} onChange={guardarCpf}>
          
          </input>
        </div>
        <p>Digite seu email:</p>
        <input id="email" value={email} onChange={guardarEmail} />
        <div>
          <p>Sexo</p>
          <select value={opcoes} onChange={guardarSexo}>
            <option value="feminino">feminino
            </option>
            <option value="masculino">masculino
            </option>
            <option value="outros">outros
            </option>
          </select>
        </div>
        
        <div>
          <p>Digite sua senha:</p>
          <input type="password"   id="senha" value={senha} onChange={guardarSenha} /> 
        </div>
        <button onClick={a}>Login

        </button>
        
       
      </div>
    </div>

  );

}

export default Jujuba;
