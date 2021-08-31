import React from "react";
import github from "@images/github.png";
import twitter from "@images/twitter.png";
import instagram from "@images/instagram.png";

function Template(props) {
  return (
    <>
      <div className="About">
        <div className="card">
          <div className="card_details">
            <div className="card_photo center circle">
              <img
                src={props.character.picture.large}
                alt={props.character.name.first}
              />
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="40" />
              </svg>
            </div>
            <div>
              <p className="card_title">Hi, My name is</p>
              <p className="card_value">
                {props.character.name.first} {props.character.name.last}
              </p>
            </div>
            <div className="card_userdata">
              <ul>
                <li>{props.character.email}</li>
                <li>{props.character.location.country}</li>
              </ul>
            </div>
            <div className="card_social">
              <a href="https://twitter.com/gndx">
                <img src={twitter} />
              </a>
              <a href="https://github.com/gndx">
                <img src={github} />
              </a>
              <a href="https://instagram.com/gndx">
                <img src={instagram} />
              </a>{" "}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Template;
