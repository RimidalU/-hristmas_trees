import "./global.css";
import App from "./application/App";

const app = new App();
window.location.hash = "#welcome-page";
app.run();