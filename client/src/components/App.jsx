import {BrowserRouter, Route} from "react-router-dom";
import Header from "./Header";
import {Component} from "react";
import * as actions from "../actions";
import {connect} from "react-redux";
import Landing from "./Landing";
import Dashboard from "./Dashboard";
import SurveyNew from "./surveys/SurveyNew";

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <Header/>
          <Route path="/" component={Landing} exact/>
          <Route path="/surveys" component={Dashboard} exact/>
          <Route path="/surveys/new" component={SurveyNew}/>
        </div>
      </BrowserRouter>
    );
  }
}

export default connect(null, actions)(App);