let backEndUrl;

if (process.env.NODE_ENV === "development") {
  backEndUrl = "http://localhost:3001";
} else {
  backEndUrl = process.env.REACT_APP_BACKEND_URL;
}

export async function login(data) {
  console.log(data);
  const url = new URL(`${backEndUrl}/login`);
  const options = {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  };
  return await fetch(url, options);
}

export async function register(data) {
  console.log(data);
  const url = new URL(`${backEndUrl}/register`);
  const options = {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  };
  return await fetch(url, options);
}

export async function Test() {
  const url = new URL(`${backEndUrl}/login/test`);
  const options = {
    method: "GET",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
  };
  return await fetch(url, options);
}

export async function logout() {
  const url = new URL(`${backEndUrl}/login/logout`);
  const options = {
    credentials: "include",
  };
  return await fetch(url, options);
}
