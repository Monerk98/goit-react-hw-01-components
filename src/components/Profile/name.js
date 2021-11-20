import React from "react";
import User from "./Static/userMain";
import userData from "./user.json";

let nameElements = userData.map((d) => {
  return (
    <User
      key={d.id}
      name={d.name}
      tag={d.tag}
      location={d.location}
      avatar={d.avatar}
      stats={d.stats}
    />
  );
});

export default nameElements;
