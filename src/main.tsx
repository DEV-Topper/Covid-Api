import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx"; // Assuming App is a TypeScript component
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./global/store.tsx";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
	<React.StrictMode>
		<Provider store={store}>
			<App />
		</Provider>
	</React.StrictMode>
);
