import {BrowserRouter, Route} from "react-router-dom";
import Header from "./Header";
import {Component} from "react";
import * as actions from "../actions";
import {connect} from "react-redux";
import Landing from "./Landing";

const Dashboard = () => <h2>Dashboard</h2>;
const SurveyNew = () => <h2>SurveyNew</h2>;

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    return (
      <div className="container">
        <BrowserRouter>
          <div>
            <Header/>
            <Route path="/" component={Landing} exact/>
            <Route path="/surveys" component={Dashboard} exact/>
            <Route path="/surveys/new" component={SurveyNew}/>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default connect(null, actions)(App);