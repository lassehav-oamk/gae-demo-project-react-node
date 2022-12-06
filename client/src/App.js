import React, { useState, useEffect } from "react";

function App() {
  const [data, setData] = useState();
  useEffect(() => {
    async function getApiData() {
      const response = await fetch("http://localhost:3000/db-demo");
      const responseData = await response.json();
      setData(responseData);
    }
    getApiData();
  }, []);

  return (
    <div>
      <h1>Google App Engine Demo Application</h1>
      <div>Below some hello world data will appear from your API:</div>
      <div>{data != undefined && data.map((d) => <div>{d.content}</div>)}</div>
    </div>
  );
}

export default App;
