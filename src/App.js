import "./App.css";
import FormularioCadastro from "./components/FormularioCadastro";
import { Container, Typography } from "@material-ui/core";
import "@fontsource/roboto";

function App() {
  return (
    <Container maxWidth="sm" component="article">
      <Typography variant="h3" component="h1" align="center">
        Formulario de Cadastro{" "}
      </Typography>
      <FormularioCadastro onSubmit={onSubmit} validaCPF={validaCPF}/>
    </Container>
  );
}

function onSubmit(data) {
  console.log(data);
}

function validaCPF(cpf) {
  return cpf.length < 11
    ? { valido: false, texto: "Cpf precisa ter 11 digitos" }
    : { valido: true, texto: "" };
}

export default App;
