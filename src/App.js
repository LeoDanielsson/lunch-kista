import React, { useEffect, useState } from 'react';
const Parser = require('rss-parser');
const parser = new Parser();

function App() {
  const [data, setData] = useState({});
  useEffect(() => {
    const fetchMenu = async () => {
      const feed = await parser.parseURL(
        'https://cors-anywhere.herokuapp.com/https://www.fazerfoodco.se/modules/MenuRss/MenuRss/CurrentDay?costNumber=6410&language=sv'
      );
      const day = feed.items[0];
      setData(day);
    };
    fetchMenu();
  }, []);

  return (
    <div className='App'>
      <h1>Dagens Lunch</h1>
      {data.content && (
        <div dangerouslySetInnerHTML={{ __html: data.content }} />
      )}
    </div>
  );
}

export default App;
