let backEndUrl;

if (process.env.NODE_ENV === "development") {
  backEndUrl = "http://localhost:3001";
} else {
  backEndUrl = process.env.REACT_APP_BACKEND_URL;
}

export async function login(data) {
  const url = new URL(`${backEndUrl}/login`);
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ data: data }),
  };
  return await fetch(url, options);
}
