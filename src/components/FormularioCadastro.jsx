import React, { useState } from "react";
import { Button, TextField, Switch, FormControlLabel } from "@material-ui/core";

function FormularioCadastro({ onSubmit, validaCPF}) {
  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [cpf, setCpf] = useState("");
  const [promocoes, setPromocoes] = useState(true);
  const [novidades, setNovidades] = useState(true);
  const [erros, setErros] = useState({ cpf: { valido: true, texto: "" } });

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        onSubmit({ nome, sobrenome, cpf, promocoes, novidades });
      }}
    >
      <TextField
        id="nome"
        label="Nome"
        variant="outlined"
        fullWidth
        margin="normal"
        value={nome}
        onChange={(event) => setNome(event.target.value)}
      />
      <TextField
        id="sobrenome"
        label="Sobrenome"
        variant="outlined"
        fullWidth
        margin="normal"
        value={sobrenome}
        onChange={(event) => setSobrenome(event.target.value)}
      />
      <TextField
        id="cpf"
        label="CPF"
        variant="outlined"
        fullWidth
        margin="normal"
        value={cpf}
        error={!erros.cpf.valido}
        helperText={erros.cpf.texto}
        onChange={(event) => setCpf(event.target.value)}
        onBlur={() => setErros({cpf:validaCPF(cpf)})}
      />

      <FormControlLabel
        label="Promocoes"
        control={
          <Switch
            name="promocoes"
            color="primary"
            onChange={(event) => setPromocoes(event.target.checked)}
            checked={promocoes}
          />
        }
      />
      <FormControlLabel
        label="Novidades"
        control={
          <Switch
            name="novidades"
            color="primary"
            onChange={(event) => setNovidades(event.target.checked)}
            checked={novidades}
          />
        }
      />

      <Button id="cadastrar" variant="contained" color="primary" type="submit">
        Cadastrar
      </Button>
    </form>
  );
}

export default FormularioCadastro;
