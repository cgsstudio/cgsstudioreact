import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import Chatbox from "./chatbox.jsx";

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
import "./assets/css/app.css";
import "./assets/css/main.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Suspense fallback={<div className="text-center mt-5">Loading...</div>}>
      <RouterProvider router={router} />
      <Chatbox />
    </Suspense>
  </React.StrictMode>
);
