import React, { useState } from "react";
import FacebookLogin from "react-facebook-login";

const Facebook = () => {
  const [isLogin, setisLogin] = useState(false);
  const [email, setEmail] = useState("");
  const [userID, setUserID] = useState("");
  const [name, setName] = useState("");
  const [picture, setPicture] = useState("");
  let fbContent;

  const responseFacebook = (responce) => {
    setisLogin(true);
    setEmail(responce.email);
    setUserID(responce.userID);
    setName(responce.name);
    setPicture(responce.picture.data.url);
  };

  const componentClicked = () => {
    console.log("clicked");
  };

  if (isLogin) {
    fbContent = (
      <div>
        <img src={picture} alt={name} />
        <h2>Welcome {name}</h2>
        <h2> Id:{userID}</h2>
        Email: {email}
      </div>
    );
  } else {
    fbContent = (
      <FacebookLogin
        appId="217674813319177"
        autoLoad={true}
        fields="name,email,picture"
        onClick={componentClicked}
        callback={responseFacebook}
      />
    );
  }

  return <div>{fbContent}</div>;
};

export default Facebook;
