import {connect} from "react-redux";
import Controls from "./Controls";

function App(props) {
  return (
    <div>

      <h1>Redux App</h1>
        <div>
            AppVersion: {props.appVersion}
            <hr/>
            Count: {props.myCount}
        </div>
        <Controls/>
    </div>
  );
}

const mapStateToProps = state => ({
    myCount: state.count,
    appVersion: state.appVersion
})
export default connect(mapStateToProps)(App);
