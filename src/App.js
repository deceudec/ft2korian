import {  useState } from "react";
import "./App.css";
import Sidebar from "./components/sidebar/Sidebar.js";
import Navbar from "./components/navbar/Navbar.js"
import Main from "./Routes/main/Main";

const App = () => {
  const [sidebarOpen, setsidebarOpen] = useState(false);
  const openSidebar = () => {
    setsidebarOpen(true);
  };
  const closeSidebar = () => {
    setsidebarOpen(false);
  };
  return (
      <div className="container">
        <Main/>
      </div>
  );
};

export default App;

/*<Navbar sidebarOpen={sidebarOpen} openSidebar={openSidebar}/>*/
/*<Composant/>*/
/*<Sidebar sidebarOpen={sidebarOpen} closeSidebar={closeSidebar} />*/

