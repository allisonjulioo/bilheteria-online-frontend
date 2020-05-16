import React, { useState } from "react";
import "./styles.scss";
import Button from "@/components/Button";

export default () => {
  const [cpf, setCPF] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");
  const [birth, setBirth] = useState("");
  const [sex, setSex] = useState("");

  async function register(event) {
    event.preventDefault();
    await fetch("http://localhost:4567/addUsuario", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ cpf, name, address, password, birth, sex }),
    })
      .then(() => alert("Cadastro realizado com sucesso"))
      .catch((err) => alert("Erro ao cadastrar"));
  }

  return (
    <div id="auth-register">
      <div className="header">
        <h1>Bem Vindo ao Cadastro</h1>
        <p>
          Com o cadastro, você tem mais comodidade para realizar suas escolhas !
        </p>
        <p>Para isso, precisamos que você informe as informações abaixo:</p>
      </div>
      <form onSubmit={register}>
        <label>
          <p>Nome Completo</p>
          <input
            placeholder="Insira seu Nome Completo"
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
            name=""
            id=""
          />
        </label>
        <label>
          <p>CPF</p>
          <input
            placeholder="Insira seu CPF"
            type="text"
            value={cpf}
            onChange={(event) => setCPF(event.target.value)}
            name=""
            id=""
          />
        </label>
        <label>
          <p>Senha</p>
          <input
            placeholder="Insira sua senha"
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            name=""
            id=""
          />
        </label>
        <label>
          <p>Endereço</p>
          <input
            placeholder="Insira seu endereço"
            type="text"
            value={address}
            onChange={(event) => setAddress(event.target.value)}
            name=""
            id=""
          />
        </label>
        <label>
          <p>Data Nascimento</p>
          <input
            placeholder="Insira sua Data de Nascimento"
            type="text"
            value={birth}
            onChange={(event) => setBirth(event.target.value)}
            name=""
            id=""
          />
        </label>
        <label>
          <p>Sexo</p>
          <select
            name=""
            id=""
            onChange={(event) => setSex(event.target.value)}
          >
            <option> -- Selecione o sexo -- </option>
            <option value="M">Masculino</option>
            <option value="F">Feminino</option>
          </select>
        </label>
        <br></br>
        <br></br>
        <br></br>
        <Button type="primary">Realizar Cadastro</Button>
      </form>
    </div>
  );
};