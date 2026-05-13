// import "./index.css";
// import { render } from "react-dom";
// import { App } from "./App";

// render(<App />, document.getElementById("root"));

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { App } from './App'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
