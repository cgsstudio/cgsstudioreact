import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import Chatbox from "./chatbox.jsx";
import CookieConsent from "./components/common/CookieConsent.jsx";
import { HelmetProvider } from "react-helmet-async";

// Bootstrap & Styles
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "react-modal-video/css/modal-video.css";
import "react-lazy-load-image-component/src/effects/blur.css";
import "./assets/css/fontawesome.css";
import "./assets/css/icomoon.css";
import "./font.js";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/mousewheel";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import './assets/css/app.css';
import './assets/css/main.css';

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HelmetProvider>
      <Suspense fallback={
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100vh',
          backgroundColor: '#000',
          color: '#fdfde1',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          zIndex: 9999
        }}>
          Loading...
        </div>
      }>
        <RouterProvider router={router} />
        <Chatbox />
        <CookieConsent />
      </Suspense>
    </HelmetProvider>
  </React.StrictMode>
);
