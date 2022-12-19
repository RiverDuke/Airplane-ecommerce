import { logout, Test } from "../utils/api";

export default function Account() {
  return (
    <>
      <button
        onClick={async () => {
          const res = await Test();
          const body = await res.json();
          console.log(body);
        }}
      >
        Test Auth Route
      </button>
      <button
        onClick={async () => {
          await logout();
        }}
      >
        Log Out
      </button>
    </>
  );
}
