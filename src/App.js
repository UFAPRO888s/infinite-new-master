import React, {useEffect} from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import Home from "./pages/Home/Home";
import CookiesPolicy from "./pages/CookiesPolicy/CookiesPolicy";
import Navigation from "./components/Navigation/Navigation";
import About from "./pages/About/About";
import Work from "./pages/Work/Work";
import Contact from "./pages/Contact/Contact";
import SocialMedia from "./pages/SubService/SocialMedia/SocialMedia";
import Seo from "./pages/SubService/Seo/Seo";
import ProGramming from "./pages/SubService/ProGramming/ProGramming";
import WebDesign from "./pages/SubService/WebDesign/WebDesign";
import CookieBar from "./components/CookieBar/CookieBar";
import TagManager from 'react-gtm-module';

function App() {
  useEffect(() => {
    TagManager.initialize({ gtmId: 'GTM-NXJBGB5' });
    }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="work" element={<Work />} />
          <Route path="contact" element={<Contact />} />
          <Route path="cookies-policy" element={<CookiesPolicy />} />
          <Route path="services/">
            <Route path="digital" element={<SocialMedia />} />
            <Route path="seo" element={<Seo />} />
            <Route path="code" element={<ProGramming />} />
            <Route path="design" element={<WebDesign />} />
          </Route>
        </Route>
      </Routes>
      <CookieBar />
    </BrowserRouter>
  );
}

export default App;
