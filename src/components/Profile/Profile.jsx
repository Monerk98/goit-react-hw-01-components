import React from "react";
import c from "./Profile.module.css";
import nameElements from "./name";

const Profile = (props) => {
  return <div className={c.wrapper}>{nameElements}</div>;
};

export default Profile;
