import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/home/Home";
import Contact from "./pages/contact/Contact";
import Company from "./pages/company/Company";
import NewsandEvent from "./pages/newsandevent/NewsandEvents";
import Client from "./pages/client/Client";
import Products from "./pages/products/Products";
import ApplicationAreas from "./pages/applicationareas/ApplicationAreas";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Layout from "./layouts/Layout";
function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/company" element={<Company />} />
        <Route path="Contact" element={<Contact />} />
        <Route path="/newsandevent" element={<NewsandEvent />} />
        <Route path="/client" element={<Client />} />
        <Route path="/products" element={<Products />} />
        <Route path="/Applicationareas" element={<ApplicationAreas />} />
      </Route>,
    ),
  );
  return <RouterProvider router={router} />;
}

export default App;
