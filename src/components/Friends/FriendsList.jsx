import Friend from "./Friend/Friend";
import PropTypes from "prop-types";
import c from "./FriendsList.module.css";

const FriendsList = ({ items }) => {
  return (
    <ul className={c.container}>
      {items.map(({ id, avatar, isOnline, name }) => (
        <li key={id} className={c.item}>
          <Friend avatar={avatar} isOnline={isOnline} name={name} />
        </li>
      ))}
    </ul>
  );
};

FriendsList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ),
};

export default FriendsList;
