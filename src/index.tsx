import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "../src/components/app/app";

const container = document.getElementById('root');
const rootElement = createRoot(container!);
rootElement.render(
  <StrictMode>
    <App />
  </StrictMode>
);