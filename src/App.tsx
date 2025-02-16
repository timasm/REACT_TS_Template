// React

// Assets
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

// State Management
import { useAppSelector, useAppDispatch } from "./state/hooks";
import { increment } from "./state/reducer/initialReducer";

import { Link } from "react-router-dom";

const App = () => {
  const value = useAppSelector((state) => state.initialReducer.value);
  const dispatch = useAppDispatch();

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => dispatch(increment())}>
          count is {value}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
        <Link to="/test">
          Hello Link
        </Link>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
};

export default App;
