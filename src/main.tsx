import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import {HashRouter, Route, Routes} from "react-router-dom";
import {ThankYouComponent} from "./components/ThankYouComponent.tsx";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <HashRouter>
          <Routes>
              <Route path="/interactive-rating" element={<App />} />
              <Route path="/thanks" element={<ThankYouComponent maxRate={5} />} />
          </Routes>
      </HashRouter>
  </StrictMode>,
)
