import { BASE_PATH, apiVersion } from "./config";

export function signUpApi(data) {
  const url = `${BASE_PATH}/${apiVersion}/sign-up`;
  const params = {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json"
    }
  };
  return fetch(url, params)
    .then(response => {
      return response.json();
    })
    .then(result => {
      if (result.user) {
        return {
          ok: true,
          message: "Usuario creado satisfactoriamente,"
        };
      }
      return {
        ok: false,
        message: "Un usuario con este correo ya existe."
      };
    })
    .catch(err => {
      return {
        ok: false,
        message: "Error en el servidor, intentelo de nuevo en otro momento."
      };
    });
}

export function signInApi(data) {
  const url = `${BASE_PATH}/${apiVersion}/sign-in`;
  const params = {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json"
    }
  };
  return fetch(url, params)
    .then(response => {
      return response.json();
    })
    .then(result => {
      return result;
    })
    .catch(err => {
      return err.message;
    });
}

export function getUsersApi(token) {
  const url = `${BASE_PATH}/${apiVersion}/users`;
  const params = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: token
    }
  };

  return fetch(url, params)
    .then(response => {
      return response.json();
    })
    .then(result => {
      return result;
    })
    .catch(err => {
      return err.message;
    });
}

export function getUsersActiveApi(token, status) {
  const url = `${BASE_PATH}/${apiVersion}/users-active?active=${status}`;
  const params = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: token
    }
  };

  return fetch(url, params)
    .then(response => {
      return response.json();
    })
    .then(result => {
      return result;
    })
    .catch(err => {
      return err.message;
    });
}