import axios from "axios";
import { BaseURL } from "../consts/consts";

let axiosConfig = {
  headers: {
    "Content-Type": "application/json;charset=UTF-8",
    "Access-Control-Allow-Origin": "*",
  },
};

async function enviarFornecedor(data) {
  const response = await axios.post(
    `${BaseURL}/fornecedores`,
    data,
    axiosConfig
  );
  return response;
}

async function getFornecedor(data) {
  const response = await axios.get(`${BaseURL}/fornecedores`, axiosConfig);
  return response;
}

async function getOneFornecedor(data) {
  console.log(data);
  const response = await axios.post(`${BaseURL}/fornecedor`, data, axiosConfig);
  return response;
}

async function deleteFornecedor(data) {
  console.log(data);
  const response = await axios.post(
    `${BaseURL}/fornecedor/delete`,
    data,
    axiosConfig
  );
  return response;
}

export { enviarFornecedor, getFornecedor, getOneFornecedor, deleteFornecedor };
