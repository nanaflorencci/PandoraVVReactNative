import React from "react";
import { Text, View } from "react-native";
import LoginScreenCliente from "./src/login/LoginScreenCliente";
import LoginScreenADM from "./src/login/LoginScreenADM";
import LoginScreenProfissional from "./src/login/LoginSreenProfissional";
import CadastroScreenADM from "./src/Cadastro/CadastroScreenADM";
import CadastroScreenProfissional from "./src/Cadastro/CadastroScreenProfissional";
import CadastroScreenCliente from "./src/Cadastro/CadastroScreenCliente";
import CadastroScreenServico from "./src/Cadastro/CadastroScreenServico";
import CadastroScreenPagamento from "./src/Cadastro/CadastroScreenPagamento";



function App(): JSX.Element {
  return (
    <LoginScreenADM/>
    //<LoginScreenCliente/>
    //<LoginScreenProfissional/>

    //cadastros

    //<CadastroScreenADM />
    //<CadastroScreenProfissional />
    //<CadastroScreenCliente />
    //<CadastroScreenServico />
    //<CadastroScreenPagamento />

  );
}

export default App;