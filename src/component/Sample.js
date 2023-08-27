
import React, { useEffect, useState } from 'react'

const Api_Url= 'https://dummyjson.com/quotes';

function Fetching() {
  const [info, setInfo] = useState([]);

  const getapi = async () => {
    const fetchapi = await fetch(Api_Url)
      .then((res) => res.json())
      .then((dat) => dat.quotes);

    const dataresp = fetchapi.filter((data) => data.id <= 10);
    setInfo(dataresp);
  };

  useEffect(() => {
    getapi();
  }, []);

  return (
    <div>
      {info.map((a) => (
        <div key={a.id}>
          <h3>
            {a.id}-{a.quote}
          </h3>
        </div>
      ))}
    </div>
  );
}

export default Fetching;