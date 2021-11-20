import React from "react";
import PropTypes from "prop-types";
import s from "./Friend.module.css";

const Friend = ({ avatar, isOnline, name }) => {
  return (
    <li className={s.item}>
      <span className={isOnline ? s.online : s.offline}></span>
      <img className={s.avatar} src={avatar} alt="User avatar" width="48" />
      <p className={s.name}>{name}</p>
    </li>
  );
};
Friend.propTypes = {
  avatar: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
};
export default Friend;
