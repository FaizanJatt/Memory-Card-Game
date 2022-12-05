import { useEffect, useState } from "react";
import data from "./data";

function Cards() {
  const [update, setUpdate] = useState(data);
  const [clicked, setClicked] = useState({
    Aki: false,
    Denji: false,
    Makima: false,
    Pochita: false,
    Power: false,
  });
  const [score, setScore] = useState(0);
  const [notification, setNotification] = useState({
    message: "",
  });
  const Arrayy = [];

  const reset = () => {
    setClicked((prev) => {
      return {
        ...prev,
        Aki: false,
        Denji: false,
        Makima: false,
        Pochita: false,
        Power: false,
      };
    });
    setScore(0);
    setNotification({});
  };

  function randomize(e) {
    if (score === 5) {
      return;
    }
    const current = e.currentTarget.getAttribute("data-name");
    if (score === 4 && !clicked[current]) {
      setScore((prev) => prev + 1);

      console.log("score max");
      setNotification((prev) => {
        return {
          ...prev,
          message: "You have won",
        };
      });
      console.log(notification);
      return;
    }

    if (!clicked[current]) {
      setClicked((prev) => {
        return {
          ...prev,
          [current]: true,
        };
      });

      setNotification({});
      setScore((prev) => prev + 1);
    } else {
      reset();

      setNotification((prev) => {
        return {
          ...prev,
          message: "Mission failed, Please try again",
        };
      });
    }

    setUpdate((prev) =>
      [...prev].sort(() => {
        return 0.5 - Math.floor(Math.random() * prev.length);
      })
    );

    console.log(update);
  }

  return (
    <div className="play-area">
      <div className="msg-area">
        <p>Score: {score}</p>
        <p>{notification.message}</p>
      </div>
      <div className="play--area">
        <div className="cards--container">
          {update &&
            update.map((card, index) => {
              return (
                <div
                  onClick={randomize}
                  key={`${index}-${card.name}`}
                  className="card--container"
                  data-name={card.name}
                >
                  <img className="card--image" src={card.image} />
                  <p className="card--name">{card.name}</p>
                </div>
              );
            })}
        </div>
        <div className="reset-btn-container">
          <button className="reset-btn" onClick={reset}>
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cards;
