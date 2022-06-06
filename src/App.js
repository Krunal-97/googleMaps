import "./App.css";
import SideNav from "./components/sideNav";
import { connect } from "react-redux";


function App() {
  return <SideNav />;
}

export default connect()(App);
