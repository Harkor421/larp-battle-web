// Backend origin for the API + WebSocket (the Railway deployment).
// Empty string would mean same-origin; here it points at the Node backend.
window.LARP_CONFIG = {
  backendOrigin: "https://larp-battle-server-production.up.railway.app",
};
