import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Provider } from "react-redux";
import Person from "./person/component/Person";

function App() {
    return (
        <Provider store={store}>
            <div>
                <Person birthday="2015-04-15" />
                <Product />
            </div>
        </Provider>
    );
}

export default App;
