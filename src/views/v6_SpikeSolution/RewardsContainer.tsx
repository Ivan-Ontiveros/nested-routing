import * as React from "react";
import { Routes, Route, Link, Outlet } from "react-router-dom";
import { Landing } from "./RewardsLanding";
import { History } from "./RewardsHistory";
type ContainerProps = {};

export const Container: React.FunctionComponent<ContainerProps> = (props) => {
  return (
    <div className="container">
      <div>
        <h1>Dave's Rewards Center</h1>
        <p>Your hub to earn, track and redeem rewards as you complete healthy activities.</p>
      </div>
      <nav>
        <Link to="/v6">Rewards</Link>
        <Link to="/v6/history">History</Link>
      </nav>
      <Routes>
        <Route path="history" element={<History />} />
        <Route path="" element={<Landing />} />
      </Routes>
      <div>
        <Outlet />
      </div>
    </div>
  );
};
