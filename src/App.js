import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Tweet from "./components/Tweet";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://coursera-twitter-api.herokuapp.com/tweets"
      );
      setData(response.data);
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  });

  return (
    <div className="App" style={{ background: "#111111", padding: "30px" }}>
      {data.map((item) => (
        <Tweet
          id={item.id}
          author={item.author}
          date={item.date}
          text={item.text}
        />
      ))}
    </div>
  );
}

export default App;
