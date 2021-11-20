import React from "react";
import PropTypes from "prop-types";
import c from "./userMain.module.css";

const Dialog = ({ avatar, name, tag, location, stats }) => {
  return (
    <div className={c.profile}>
      <div className={c.description}>
        <img src={avatar} alt="User avatar" className={c.avatar} />
        <p className={c.name}>{name}</p>
        <p className={c.tag}>{tag}</p>
        <p className={c.location}>{location}</p>
      </div>

      <ul className={`${c.stats} ${c.list}`}>
        <li className={c.wrap}>
          <span className={c.label}>Followers</span>
          <span className={c.quantity}>{stats.followers}</span>
        </li>
        <li className={c.wrap}>
          <span className={c.label}>Views</span>
          <span className={c.quantity}>{stats.views}</span>
        </li>
        <li className={c.wrap}>
          <span className={c.label}>Likes</span>
          <span className={c.quantity}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

Dialog.propTypes = {
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};
export default Dialog;
