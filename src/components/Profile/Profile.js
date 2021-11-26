import PropTypes from "prop-types";
import c from "./profile.module.css";
export default function Profile({ username, tag, location, avatar, stats }) {
  return (
    <div className={c.wrapper}>
      <div className={c.description}>
        <img src={avatar} alt={username} className={c.avatar} />
        <p className={c.name}>{username}</p>
        <p className={c.tag}>@{tag}</p>
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
}

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.object.isRequired,
};
