// import dependencies
import React from "react";
// import stylesheet
import "./App.css";
// import custom components
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Feed from "./components/Feed";
import Widgets from "./components/Widgets";
import Login from "./components/Login";
import { useStateValue } from "./contextApi/StateProvider";

function App() {
  const [{ user }, dispatch] = useStateValue();

  return (
    <div className="app">
      {!user ? (
        <Login />
      ) : (
        <>
          {/* Header */}
          <Header />
          <div className="app__body">
            <Sidebar />
            <Feed />
            {/* widgets */}
            <Widgets />
          </div>
        </>
      )}
    </div>
  );
}

export default App;
