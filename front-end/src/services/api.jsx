import axios from 'axios';

const request = async (resource, method, body) => {
  try {
    if (method === 'post') {
      const res = await axios[method](`http://localhost:3001${resource}`, body);
      return res.data;
    } if (method === 'get') {
      const res = await axios[method](`http://localhost:3001${resource}`, {
        headers: {
          authorization: body,
        },
      });
      return res.data;
    }
  } catch (err) { return (err.response.data); }
};

const requestPostToken = async (resource, method, body, token) => {
  try {
    const res = await axios[method](
      `http://localhost:3001${resource}`,
      body,
      { headers: {
        authorization: token,
      } },
    );
    return res.data;
  } catch (err) { return (err.response.data); }
};

const salesId = '/sales/:id';

export const apiRequestLogin = async (user) => (
  request('/login', 'post', user));

export const apiRequestCadaster = async (user) => (
  request('/user', 'post', user));

export const apiRequestProductsGetAll = async (token) => (
  request('/products', 'get', token));

export const apiRequestSalesGetAll = async (body, token) => (
  requestPostToken('/sales', 'get', body, token));

export const apiRequestSalesGetById = async (token) => (
  request(salesId, 'get', token));

export const apiRequestSalesPost = async (token) => (
  request('/sales', 'post', token));

export const apiRequestSalesUpdate = async (token) => (
  request(salesId, 'put', token));

export const apiRequestSalesDelete = async (token) => (
  request(salesId, 'delete', token));

export const apiRequestSellers = async (token) => (
  request('/user/seller', 'post', token));
