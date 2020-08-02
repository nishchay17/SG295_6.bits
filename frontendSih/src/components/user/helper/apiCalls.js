const API = "https://sihbackend2020.herokuapp.com";

export const GetAllSchemesForApply = (token) => {
  return fetch(`${API}/apply`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

export const ApplyIt = (token, SchemeId) => {
  return fetch(`${API}/apply/${SchemeId}`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

export const Applications = (token, id) => {
  return fetch(`${API}/apply/application/${id}`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
    .then((res) => {
      return res.json();
    })
    .catch((err) => console.log(err));
};
