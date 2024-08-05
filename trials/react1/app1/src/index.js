// importing the React and ReactDOM libraries
import React from "react";
import ReactDOM from "react-dom";
import profileImage from './images/profile2.JPG';
import reactCode from './images/reactCode.png';

const root = document.getElementById("root");
var skills = ["HTML", "CSS", "JS", "React", "Node", "Python", "Java", "MYSQL", "Data Analyst", "Database Designer", "C", "C++","Grammatical Framework","Haskell","Git", "JQuery", "Bootstrap Css" ];

const header = (
  <header className="top-header">
    <div className="profile">
      <div className="top">
        <div>
          <img src={profileImage} alt="astrav profile" />
        </div>
          
        
        <div className="profile-name">
          <span>Sempala Astrav Daniel</span><br/>
          <span>Senior Developer</span>
        </div>
      </div>
      <div className="middle">
        <p>SKILLS</p>
        <hr/>
        <br/>
        <ul className="skills">
          {skills.map((item) => <li>{item}</li>)}
        </ul>
      </div>
      <div className="bottom">
        <p>
          &copy; Edited on Aug 4, 2024
        </p>
      </div>
    </div>
  </header>
);


const des = (<div>
  <h2>Description</h2>
  <hr />
  <p>This is my first react app</p>
  <footer>&copy;2024</footer>
</div>);
var li = ["HTML", "Javascript", "Css"];
var req = li.map((item) => <li>{item}</li>)
const des2 = (<div>
  <h2>Requirements</h2>
  <hr />
  <p>These are the requirements required before venturing into react</p>
  <ul>
    {req}
  </ul>
  <footer>&copy;2024</footer>
</div>);
const des3=(<div className="how">
<h2>How it was built</h2>
<hr/>
<p>This is how the app was built</p>


<img src={reactCode} alt="how it was built"/>
</div>);

const main = (<main className="main">
  {des}
  {des2}
  {des3}
  
</main>);

const app = (
  <div>
    {header}
    {main}
  </div>
);
ReactDOM.render(app, root)

