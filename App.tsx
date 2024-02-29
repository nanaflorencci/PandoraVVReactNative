import React from "react";
import { Text, View } from "react-native";
import LoginScreenCliente from "./src/login/LoginScreenClientes";
import LoginScreenProfissional from "./src/login/LoginScreeenProfissional";
import LoginScreenAdministrador from "./src/login/LoginScreenAdministrador";
import CadastroScreenCliente from "./src/cadastros/CadastroScreenPagamento";
import CadastroScreenProfissional from "./src/cadastros/CadastroScreenProfissional";
import CadastroScreenAdmnistrador from "./src/cadastros/CadastroScreenAdministrador";
import CadastroScreenServico from "./src/cadastros/CadastroScreenServico";
import CadastroScreenPagamento from "./src/cadastros/CadastroScreenPagamento";
function App(): JSX.Element{
  return (
  <LoginScreenCliente/>
  );
  return (
  <LoginScreenProfissional/>
  );
  return (
  <LoginScreenAdministrador/>
  );
  return (
  <CadastroScreenCliente/>
  );
  return (
  <CadastroScreenProfissional/>
  );
  return (
  <CadastroScreenAdmnistrador/>
  );
  return (
  <CadastroScreenServico/>
  );
  return (
  <CadastroScreenPagamento/>
  );
}

export default App;