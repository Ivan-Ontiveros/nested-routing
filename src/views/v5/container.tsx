import * as React from "react";
// import { Switch, Route, Link } from "react-router-dom";
import { Landing } from "./landing";
import { History } from "./history";
type ContainerProps = {};

export const Container: React.FunctionComponent<ContainerProps> = (props) => {
  return (
    <div>
      {/* <nav>
        <Link to="/v5">Landing</Link>
        <Link to="/v5/history">History</Link>
      </nav>
      <div>
        <Switch>
          <Route path="/v5/history" component={History} />
          <Route path="/v5" component={Landing} />
        </Switch>
      </div> */}
    </div>
  );
};
