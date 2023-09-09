import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";

import AboutPage from "./pages/AboutPage";
import ServicesPage from "./pages/ServicesPage";
import BookPage from "./pages/BookPage";
import ContactPage from "./pages/ContactPage";
import NoPage from "./pages/NoPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/about",
    element: <AboutPage />
  },
  {
    path: "/services",
    element: <ServicesPage />
  },
  {
    path: "/book",
    element: <BookPage />
  },
  {
    path: "/contact",
    element: <ContactPage />
  },
  {
    path: "/*",
    element: <NoPage />
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
