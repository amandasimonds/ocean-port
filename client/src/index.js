import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

// A function that routes the user to the right place
// after login

ReactDOM.render(<App />, document.getElementById('root')
);

serviceWorker.unregister();