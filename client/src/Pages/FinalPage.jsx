import React from "react";
import Footer from "./Footer";

export default function FinalPage() {
  return (
    <>
      <div className="finalpage">
        <h1>Thank you for the game!</h1>
        <div className="scorePict">
          <h2>Your score:</h2>
          {/* //score */}
          <h4>You got % right. Well done! </h4>
        </div>
      </div>

      <Footer />
    </>
  );
}
