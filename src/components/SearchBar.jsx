import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

export default function SearchBar() {
  const [name, setName] = useState("");

  const handleInputChange = (e) => {
    setName(name + e.target.value);
  };

  async function handleSubmit(event) {
    event.preventDefault();
    console.log(name);

    //   await enviarFornecedor(formValues).then((res) => {
    //     console.log(res);
    //     if (res.status === 200) {
    //       handleSnackBar();
    //     }
    //   });
  }

  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <form onSubmit={handleSubmit}>
          <TextField
            id="outlined-search"
            label="Pesquise aqui uma empresa."
            type="search"
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
        </form>
      </div>
    </Box>
  );
}
