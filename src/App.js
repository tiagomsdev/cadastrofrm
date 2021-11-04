import './App.css';
import FormularioCadastro from './components/FormularioCadastro';
import { Container, Typography} from "@material-ui/core";
import '@fontsource/roboto';

function App() {
  return (
    <Container maxWidth="sm" component="article">
      <Typography variant="h3" component="h1" align="center">Formulario de Cadastro </Typography>
      <FormularioCadastro onSubmit={onSubmit}/>
    </Container>  
  );
}

function onSubmit(data){
  console.log(data);
}

export default App;
