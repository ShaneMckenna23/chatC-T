import { Suspense } from "react";
import { Routes ,Route } from 'react-router-dom';

import "./App.css";
import HomePage from "./screens/HomePage";
import TerminalPage from "./screens/TerminalPage";
import TerminalLayout from "./layouts/Terminal";
import { AnimatePresence } from "framer-motion";


function App() {
  return (
    <div className="App">
      <Suspense fallback={<div>Loading...</div>}>
        <AnimatePresence initial={false}>
          <Routes >
            <Route path="/" element={<TerminalLayout />}>
              <Route index element={<HomePage />} />
              <Route path="/term" element={<TerminalPage />} />
            </Route>
          </Routes> 
        </AnimatePresence>
      </Suspense>
    </div>
  );
}

export default App;