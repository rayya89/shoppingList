import React from "react";
import { useNavigate } from "react-router-dom";

function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="home-Page">
      <img src="/images/welcome.png" height={200} alt="You're Welcome" />
      <h1>Shopping List</h1>
      {/* CSS don't use " " to add space on the text, use the css indent property or margin to control the visual design -1 */}
      {/* If those " " where aded by your code editor by mistake, then ignore the message */}
      <p>
        {" "}
        Welcome to EIKA shopping list app! In this app you can add a shoppimg
        item by its name and its price. You can mark an item as completed and
        you have the option to show the completed / uncompleted items. Start
        Shopping now!{" "}
      </p>
      <button className="home-Button" onClick={() => navigate("/Shop")}>
        Start Shopping!
      </button>
    </div>
  );
}

export default HomePage;
