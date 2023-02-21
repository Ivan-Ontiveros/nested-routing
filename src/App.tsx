import { Link, Route, Routes } from "react-router-dom";
import { HomePage } from "./views/home";
import { Container } from "./views/v6_SpikeSolution/RewardsContainer";
import "./App.scss";

export const App = () => (
  <div className="app">
    <header>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/v6">Rewards</Link>
      </nav>
    </header>
    <main>
      <Routes>
        {/* NOTE: Use an asterisk (*) on the 'container' route in order to render child routes properly. */}
        <Route path="v6/*" element={<Container />} />
        <Route path="/" element={<HomePage />} />
      </Routes>
    </main>
  </div>
);

//********************************************************** */
// React Router v5 Example:

//       <div className="app">
//         <header>
//            <nav>
//              <Link to="/">Home</Link>
//              <Link to="/v5">Blah</Link>
//            </nav>
//        </header>
//        <main>
//            <Switch>
//               <Route path="/v5" component={Container} />
//              <Route path="/" exact component={HomePage} />
//            </Switch>
//         </main>
//       </div>
