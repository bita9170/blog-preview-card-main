import React from "react";
import "./main.scss";
import cardHeader from "./assets/images/illustration-article.svg";
import imageAvatar from "./assets/images/image-avatar.webp"


function App() {
  return (
    <main>
      <div>
        <img src={cardHeader} alt="blog card" />
        <button>Learning</button>
        <p>published 21 Dec 2023</p>
        <h1>HTML & CSS foundations</h1>
        <p>
          These languages are the backbone of every website, defining structure,
          content, and presentation.{" "}
        </p>
        
        <footer>
        <img src={imageAvatar} alt="blog card" />
        <p>Greg Hooper</p>
        </footer>
      </div>
    </main>
  );
}
export default App;
