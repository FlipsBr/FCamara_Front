import React, { useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Alert } from "@mui/material";
import { Snackbar } from "@mui/material";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Container } from "@mui/material";
import { getOneFornecedor, deleteFornecedor } from "../routes/fornecedor";

const defaultValues = {
  nome: "",
};

export default function PesquisarFornecedor() {
  const [pesquisa, setPesquisa] = useState(defaultValues);
  const [fornecedor, setFornecedor] = useState([]);
  const [snackBar, setSnackBar] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPesquisa({
      ...pesquisa,
      [name]: value,
    });
  };

  async function handleSubmit(event) {
    event.preventDefault();
    getOneFornecedor(pesquisa).then((res) => {
      console.log(res.data);
      setFornecedor([res.data]);
    });
  }

  async function handleDelete(event) {
    event.preventDefault();
    deleteFornecedor(pesquisa).then((res) => {
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
    <Container>
      <Snackbar
        variant="filled"
        open={snackBar}
        autoHideDuration={6000}
        onClose={handleSnackBar}
      >
        <Alert severity="warning" sx={{ width: "100%" }}>
          Fornecedor deletado com sucesso!
        </Alert>
      </Snackbar>
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >
        <Link to="/">Cadastrar</Link> | <Link to="/fornecedores">Listar</Link> |{" "}
        <Link to="/pesquisa">Pesquisar</Link> |{" "}
      </nav>
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <div>
          <TextField
            id="outlined-search"
            label="Pesquise aqui uma empresa."
            type="search"
            name="nome"
            onChange={handleInputChange}
          />
          <Button
            variant="contained"
            color="primary"
            type="submit"
            size="large"
            sx={{ marginTop: 2 }}
          >
            Pesquisar
          </Button>
        </div>
      </Box>
      {fornecedor && (
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table" size="small">
            <TableHead>
              <TableRow>
                <TableCell align="center" colSpan={5} sx={{ fontSize: 18 }}>
                  Dados do Fornecedor
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {fornecedor.map((row) => (
                <>
                  <TableRow
                    key={row.nome}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell align="center">Nome</TableCell>
                    <TableCell align="center">{row.nome}</TableCell>
                  </TableRow>
                  <TableRow
                    key={row.razao_social}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell align="center">Razão Social</TableCell>
                    <TableCell align="center">{row.razao_social}</TableCell>
                  </TableRow>
                  <TableRow
                    key={row.segmento}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell align="center">Segmento</TableCell>
                    <TableCell align="center">{row.segmento}</TableCell>
                  </TableRow>
                  <TableRow
                    key={row.email_contato}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell align="center">Email de Contato</TableCell>
                    <TableCell align="center">{row.email_contato}</TableCell>
                  </TableRow>
                  <TableRow
                    key={row.telefone_contato}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell align="center">Telefone</TableCell>
                    <TableCell align="center">{row.telefone_contato}</TableCell>
                  </TableRow>

                  <TableRow
                    key={row.rua}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell align="center">Rua</TableCell>
                    <TableCell align="center">{row.rua}</TableCell>
                  </TableRow>
                  <TableRow
                    key={row.numero}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell align="center">Número</TableCell>
                    <TableCell align="center">{row.numero}</TableCell>
                  </TableRow>
                  <TableRow
                    key={row.cep}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell align="center">CEP</TableCell>
                    <TableCell align="center">{row.cep}</TableCell>
                  </TableRow>
                  <TableRow
                    key={row.complemento}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell align="center">Complemento</TableCell>
                    <TableCell align="center">{row.complemento}</TableCell>
                  </TableRow>
                </>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
      <Button
        variant="contained"
        color="secondary"
        type="submit"
        size="large"
        sx={{ marginTop: 2 }}
        onClick={handleDelete}
      >
        Deletar
      </Button>
    </Container>
  );
}
