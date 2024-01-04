import React from "react";
import "./main.scss";
import imageAvatar from "./assets/images/image-avatar.webp";
import cardHeader from "./assets/images/illustration-article.svg";

function App() {
  return (
    <main>
      <div>
        <img src={cardHeader} alt="blog card" />
        <br />
        <button>Learning</button> <br />
        <br />
        <p>published 21 Dec 2023</p> <br />
        <h2>HTML & CSS foundations</h2>
        <p>
          These languages are the backbone of every website, defining structure,
          content, and presentation.{" "}
        </p>
        <img src={imageAvatar} alt="blog card" />
        <p>Greg Hooper</p>
      </div>
    </main>
  );
}
export default App;
