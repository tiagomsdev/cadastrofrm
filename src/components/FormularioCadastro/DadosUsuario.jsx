import React from "react";
import { TextField, Button } from "@material-ui/core";

function DadosUsuario() {
  return (
    <form>
      <TextField
        id="email"
        label="email"
        type="email"
        variant="outlined"
        fullWidth
        margin="normal"
      />
      <TextField
        id="password"
        label="password"
        type="password"
        variant="outlined"
        fullWidth
        margin="normal"
      />
      <Button variant="contained" color="primary" type="submit">
          Cadastrar
      </Button>
    </form>
  );
}

export default DadosUsuario;
