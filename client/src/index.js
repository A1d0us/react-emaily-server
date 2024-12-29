import ReactDOM from "react-dom/client";
import App from './components/App';
import {applyMiddleware, createStore} from "redux";
import {Provider} from "react-redux";
import reducers from "./reducers";
import "materialize-css/dist/css/materialize.min.css";
import reduxThunk from "redux-thunk";

const el = document.getElementById("root");
const root = ReactDOM.createRoot(el);

const store = createStore(reducers, {}, applyMiddleware(reduxThunk));

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);