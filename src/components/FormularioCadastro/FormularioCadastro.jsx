import React from "react";
import DadosEntrega from "./DadosEntrega";
import DadosPessoais from "./DadosPessoais";
import DadosUsuario from "./DadosUsuario";

function FormularioCadastro({onSubmit, validaCPF}) {
  return(
    <>
      <DadosPessoais onSubmit={onSubmit} validaCPF={validaCPF}/>
      <DadosUsuario/>
      <DadosEntrega/>
    </>
  )
}

export default FormularioCadastro;
