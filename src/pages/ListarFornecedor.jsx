import React, { useState, useEffect } from "react";
import { Box, Container } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Link } from "react-router-dom";
import { getFornecedor } from "../routes/fornecedor";

/*async function getData() {
  const fornecedoresList = await getFornecedor();
  return fornecedoresList;
}*/

export default function BasicTable() {
  const [fornecedores, setFornecedores] = useState([]);
  useEffect(() => {
    async function getData() {
      const fornecedoresList = await getFornecedor();
      return fornecedoresList;
    }
    getData().then((res) => {
      console.log(res.data);
      setFornecedores(res.data);
    });
  }, []);

  return (
    <Container>
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >
        <Link to="/">Cadastrar</Link> | <Link to="/fornecedores">Listar</Link> |{" "}
        <Link to="/pesquisa">Pesquisar</Link> |{" "}
      </nav>

      <Box>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="center">Nome</TableCell>
                <TableCell align="center">Razão Social</TableCell>
                <TableCell align="center">Segmento</TableCell>
                <TableCell align="center">Email de Contato</TableCell>
                <TableCell align="center">Telefone</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {fornecedores.map((row) => (
                <TableRow
                  key={row.nome}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell align="center">{row.nome}</TableCell>
                  <TableCell align="center">{row.razao_social}</TableCell>
                  <TableCell align="center">{row.segmento}</TableCell>
                  <TableCell align="center">{row.email_contato}</TableCell>
                  <TableCell align="center">{row.telefone_contato}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Container>
  );
}
