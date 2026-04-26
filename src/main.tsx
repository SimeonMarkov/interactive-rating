import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import {BrowserRouter, Route, Routes} from "react-router";
import {ThankYouComponent} from "./components/ThankYouComponent.tsx";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<App />} />
              <Route path="/thanks" element={<ThankYouComponent maxRate={5} />} />
          </Routes>
      </BrowserRouter>
  </StrictMode>,
)
