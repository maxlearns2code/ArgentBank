export async function redirection() {
  const response = await fetch("http://localhost:3001/api/v1/user/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      email: document.getElementById("username").value,
      password: document.getElementById("password").value,
    }),
  });
  return response;
}

export const fetchProfile = async () => {
  const response = await fetch("http://localhost:3001/api/v1/user/profile", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${sessionStorage.getItem("authToken")}`,
    },
  })
    .then((response) => response.json())
    .then((data) => {
      return data;
    })
    .catch((error) => {
      console.error(error);
      window.location = "/error";
    });
  if (!sessionStorage.getItem("authToken")) {
    window.location = "/signin";
  }
  return response;
};

export const fetchUsername = async () => {
  const response = await fetch("http://localhost:3001/api/v1/user/profile", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${sessionStorage.getItem("authToken")}`,
    },
    body: JSON.stringify({
      userName: document.getElementById("username").value,
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data.body);
      return data;
    })
    .catch((error) => {
      console.error(error);
      window.location = "/error";
    });
  return response;
};
