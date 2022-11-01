import React, { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);
  return (
    <>
      <div className="text-center">
        <h1 className="">Title</h1>
        <div className="App">
          <header className="App-header">
            <p>{!data ? "Loading... " : data}</p>
          </header>
        </div>
      </div>
    </>
  );
}

export default App;
