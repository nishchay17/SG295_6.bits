const API = "https://sihbackend2020.herokuapp.com";

export const GetAllSchemes = () => {
  return fetch(`${API}/schemes`, {
    method: "GET",
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

export const GetScheme = (id) => {
  return fetch(`${API}/schemes/${id}`, {
    method: "GET",
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};
