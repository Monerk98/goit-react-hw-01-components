import React from "react";
import user from "./components/Profile/user.json";
import FriendsList from "./components/Friends/FriendsList";

import Static from "./components/Statistics/Static";
import History from "./components/Transaction/Transact";

import data from "./components/Statistics/data.json";
import fr from "./components/Friends/fr.json";
import hist from "./components/Transaction/transHistory.json";
import Profile from "./components/Profile/Profile";
import "./App.css";
function App() {
  return (
    <div className="App">
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <FriendsList items={fr} />
      <Static title="Upload stats" stats={data} />
      <History items={hist} />
    </div>
  );
}

export default App;
