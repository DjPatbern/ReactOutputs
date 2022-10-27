import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import State from "./Hooks/State";
import Reducer from "./Hooks/Reducer";
import Effect from "./Hooks/Effect";
import Ref from "./Hooks/Ref";
import LayoutEffect from "./Hooks/LayoutEffect";
import ImperativeHandle from "./Hooks/ImperativeHandle";
import Context from "./Hooks/Context";
import Memo from "./Hooks/Memo";
import Callback from "./Hooks/Callback";
import Custom from "./Hooks/Custom";
import Query from "./Hooks/Query";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Pagination from "./Hooks/Pagination";

function App() {
  const client = new QueryClient();
  return (
    <div className="App">
      <header className="App-header">
        <section>
          <QueryClientProvider client={client}>
            <Router>
              <Routes>
                <Route path="/State" element={<State />} />
                <Route path="/Reducer" element={<Reducer />} />
                <Route path="/Effect" element={<Effect />} />
                <Route path="/Ref" element={<Ref />} />
                <Route path="/LayoutEffect" element={<LayoutEffect />} />
                <Route
                  path="/ImperativeHandle"
                  element={<ImperativeHandle />}
                />
                <Route path="/Context" element={<Context />} />
                <Route path="/Memo" element={<Memo />} />
                <Route path="/Callback" element={<Callback />} />
                <Route path="/Custom" element={<Custom />} />
                <Route path="/Query" element={<Query />} />
                <Route path="/Pagination" element={<Pagination />} />
              </Routes>
              <nav>
                <Link className="btn" to="/State">
                  useState
                </Link>
                <Link className="btn" to="/Reducer">
                  useReducer
                </Link>
                <Link className="btn" to="/Effect">
                  useEffect
                </Link>
                <Link className="btn" to="/Ref">
                  useRef
                </Link>
                <Link className="btn" to="/LayoutEffect">
                  useLayoutEffect
                </Link>
                <Link className="btn" to="/ImperativeHandle">
                  useImperativeHandle
                </Link>
                <Link className="btn" to="/Context">
                  useContext
                </Link>
                <Link className="btn" to="/Memo">
                  useMemo
                </Link>
                <Link className="btn" to="/Callback">
                  useCallback
                </Link>
                <Link className="btn" to="/Custom">
                  Custom Hook
                </Link>
                <Link className="btn" to="/Query">
                  Query
                </Link>
                <Link className="btn" to="/Pagination">
                  Pagination
                </Link>
              </nav>
            </Router>
          </QueryClientProvider>
        </section>
      </header>
    </div>
  );
}

export default App;
