import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Snackbar } from "@mui/material";
import { Container } from "@mui/material";
import { enviarFornecedor } from "../routes/fornecedor";
import { Alert } from "@mui/material";
import { Link } from "react-router-dom";

const defaultValues = {
  nome: "",
  razao_social: "",
  cnpj: "",
  segmento: "",
  telefone_contato: "",
  email_contato: "",
  rua: "",
  numero: "",
  cep: "",
  complemento: "",
};

const CriarFornecedor = () => {
  const [formValues, setFormValues] = useState(defaultValues);
  const [snackBar, setSnackBar] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  async function handleSubmit(event) {
    event.preventDefault();

    await enviarFornecedor(formValues).then((res) => {
      console.log(res);
      if (res.status === 200) {
        handleSnackBar();
      }
    });
  }

  function handleSnackBar() {
    snackBar === true ? setSnackBar(false) : setSnackBar(true);
  }

  return (
    <>
      <Container>
        <Snackbar
          variant="filled"
          open={snackBar}
          autoHideDuration={6000}
          onClose={handleSnackBar}
        >
          <Alert severity="info" sx={{ width: "100%" }}>
            Fornecedor Criado com Sucesso!
          </Alert>
        </Snackbar>
        <nav
          style={{
            borderBottom: "solid 1px",
            paddingBottom: "1rem",
          }}
        >
          <Link to="/">Cadastrar</Link> | <Link to="/fornecedores">Listar</Link>{" "}
          | <Link to="pesquisa">Pesquisar</Link> |{" "}
        </nav>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={3}>
            <Grid item sx={{ marginTop: 2 }} sm={6}>
              <TextField
                style={{ width: "100%" }}
                id="name-input"
                name="nome"
                label="Nome"
                type="text"
                value={formValues.nome}
                required
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item sx={{ marginTop: 2 }} sm={6}>
              <TextField
                style={{ width: "100%" }}
                id="razao_social-input"
                name="razao_social"
                label="Razão Social"
                type="text"
                required
                value={formValues.razao_social}
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item sm={6}>
              <TextField
                style={{ width: "100%" }}
                id="cnpj"
                name="cnpj"
                label="CNPJ"
                type="text"
                required
                value={formValues.cnpj}
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item sm={6}>
              <TextField
                style={{ width: "100%" }}
                id="segmento"
                name="segmento"
                label="Segmento"
                type="text"
                required
                value={formValues.segmento}
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item sm={6}>
              <TextField
                style={{ width: "100%" }}
                id="telefone_contato"
                name="telefone_contato"
                label="Telefone de Contato"
                type="text"
                required
                value={formValues.telefone_contato}
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item sm={6}>
              <TextField
                style={{ width: "100%" }}
                id="email_contato"
                name="email_contato"
                label="Email de Contato"
                type="email"
                required
                value={formValues.email_contato}
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item sx={{ marginBottom: 2 }} sm={6}>
              <TextField
                fullWidth
                id="rua"
                name="rua"
                label="Rua"
                type="text"
                required
                value={formValues.rua}
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item sx={{ marginBottom: 2 }} sm={2}>
              <TextField
                style={{ width: "100%" }}
                id="numero"
                name="numero"
                label="Número"
                type="text"
                required
                value={formValues.numero}
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item sx={{ marginBottom: 2 }} sm={4}>
              <TextField
                style={{ width: "100%" }}
                id="cep"
                name="cep"
                label="Cep"
                type="text"
                required
                value={formValues.cep}
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item sx={{ marginBottom: 2 }} sm={6}>
              <TextField
                fullWidth
                id="complemento"
                name="complemento"
                label="Complemento"
                type="text"
                required
                value={formValues.complemento}
                onChange={handleInputChange}
              />
            </Grid>

            <Grid item sx={{ marginBottom: 2, marginTop: 1 }}>
              <Button
                variant="contained"
                color="primary"
                type="submit"
                size="large"
              >
                Cadastrar
              </Button>
            </Grid>
          </Grid>
        </form>
      </Container>
    </>
  );
};
export default CriarFornecedor;
