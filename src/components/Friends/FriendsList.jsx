import Friend from "./Friend/Friend";
import PropTypes from "prop-types";
import c from "./FriendsList.module.css";

const FriendsList = ({ items }) => {
  return (
    <ul className={c.container}>
      {items.map((item) => (
        <Friend
          key={item.id}
          avatar={item.avatar}
          isOnline={item.isOnline}
          name={item.name}
        />
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
