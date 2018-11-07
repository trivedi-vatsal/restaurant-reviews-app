document.addEventListener("DOMContentLoaded", event => {
    /**
     *     Service Worker registration
     */
    if (navigator.serviceWorker) {
        navigator.serviceWorker
            .register("service-worker.js")
            .then(registration => console.log("SW registered", registration))
            .catch(e => console.log("Registration failed :(", e));
    }
});