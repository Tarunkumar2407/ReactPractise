import React from "react";

const Date_Time = () => {
  const name = "Tarun";
  const date = new Date().toLocaleDateString();
  const time = new Date().toLocaleTimeString();
  const img2 = "https://picsum.photos/400";
  const img3 = "https://picsum.photos/400/500";
  const link = "https://picsum.photos/";
  return (
    <div>
      <h2 className="heading">Hello, My name is {name}</h2>
      <div className="date-time">
      <h3>Todays date is: {date}</h3>
      <h3>Current time is: {time}</h3>
      </div>
      <div className="images">
        <img src="https://picsum.photos/300/400" alt="image" />
        <img src={img2} alt="random-image" />
        <a href={link} target="_blank">
          <img src={img3} alt="linked-image" />
        </a>
      </div>
    </div>
  );
};

export default Date_Time;
