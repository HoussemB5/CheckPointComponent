import "./App.css";
import React from "react";
import Profilphoto from "./Component/Profile/ProfilPhoto";
import Nom from "./Component/Profile/FullName";
import Address from "./Component/Profile/Address";

const App = () => {
    return (
        <div className="App">
            <Profilphoto />
            <Nom />
            <Address />
        </div>
    );
};
export default App;
