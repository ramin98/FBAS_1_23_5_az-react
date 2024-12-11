import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [users, setUsers] = useState([]);
  const [value1, setValue1] = useState("");
  const [isActive, setIsActive] = useState(false);
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);

  useEffect(() => {
    fetch(`http://localhost:5000/search-goods/${value1}`)
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
        console.log(users);
      });
  }, [value1]);

  useEffect(() => {
    function showKey(ev) {
      console.log(ev.key);
    }

    document.addEventListener("keydown", showKey);

    return () => {
      document.removeEventListener("keydown", showKey);
    };
  }, [value1]);

  useEffect(() => {
    let timer;
    if (isActive) {
      timer = setInterval(() => {
        setCount((value) => value + 1);
      }, 1000);
    }

    return () => {
      clearInterval(timer);
    };
  }, [isActive]);

  useEffect(() => {
    if (!localStorage.getItem("bag")) {
      localStorage.setItem(
        "bag",
        JSON.stringify([
          {
            product_name: "Kişi köynəyi",
            product_description: "Mavi rəngdə, 100% pamuk",
            product_price: 50,
            store_name: "Moda Dünyası",
            store_address: "Bakı şəhəri, Nizami kuçəsi 5",
            id: "q5nsC5vZri7d",
          },
          {
            product_name: "Qadın bluzası",
            product_description: "Dəri detallı, qara rəngdə",
            product_price: 60,
            store_name: "Moda Dünyası",
            store_address: "Bakı şəhəri, Nizami kuçəsi 5",
            id: "Lm7CewLM3VVn",
          },
          {
            product_name: "Kişi pantolonu",
            product_description: "Qəhvəyi rəng, kənar cebi",
            product_price: 75,
            store_name: "Moda Dünyası",
            store_address: "Bakı şəhəri, Nizami kuçəsi 5",
            id: "mjYH1ynC1iCv",
          },
        ])
      );
    }
    setUsers(JSON.parse(localStorage.getItem("bag")));
  }, []);

  function time() {
    let timer;
    setIsActive(!isActive);
    if (isActive) {
      timer = setInterval(() => {
        setCount((value) => value + 1);
      }, 1000);
    } else {
      clearInterval(timer);
    }
  }

  return (
    <>
      <input type="text" onInput={(ev) => setValue1(ev.target.value)} />
      <button onClick={() => setIsActive(!isActive)}>
        {isActive ? "STOP" : "START"}
      </button>
      <p>{count}</p>
      <button onClick={time}>PLUS</button>
      <p>{count2}</p>
      <ul>
        {users.map((item) => {
          return (
            <li>
              <p>{item.product_name}</p>
              <p>{item.product_description}</p>
              <p>{item.product_price}</p>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default App;
