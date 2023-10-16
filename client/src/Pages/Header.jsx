import React from "react";

export default function Header() {
  return (
    <>
      <div className="head">
        <h1>CityQuiz</h1>

        <div className="picture1">
          <img src="./img/city.jpeg" width="40%" />
          {/* <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXD72aU0DywR4w0MQDkN_w_XbFqSAsM0PD2g&usqp=CAU"
            width="50%"
          /> */}
        </div>

        <p>What city is it?</p>
      </div>
    </>
  );
}
