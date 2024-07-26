import "./app.css";
import App from "./App.svelte";
import { registerSW } from "virtual:pwa-register";

if ("serviceWorker" in navigator) {
    registerSW();
}

const app = new App({
    target: document.body,
});

export default app;
