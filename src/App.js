import React from "react";
import "./App.css";
import FriendsList from "./components/Friends/FriendsList";
import Profile from "./components/Profile/Profile";
import Static from "./components/Statistics/Static";
import History from "./components/Transaction/Transact";

import data from "./components/Statistics/data.json";
import fr from "./components/Friends/fr.json";
import hist from "./components/Transaction/transHistory.json";

function App() {
  return (
    <div className="App">
      <Profile />
      <FriendsList items={fr} />
      <Static title="Upload stats" stats={data} />
      <History items={hist} />
    </div>
  );
}

export default App;
