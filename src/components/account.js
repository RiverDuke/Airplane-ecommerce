import { Test } from "../utils/api";

export default function Account() {
  async function Testing() {
    const res = await Test();
    const body = await res.json();
    console.log(body);
  }
  Testing();
  return <h1>Account</h1>;
}
