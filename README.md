# Larp Battle — web frontend

Static frontend for [Larp Battle](https://github.com/Harkor421/larp-battle-server):
random 1:1 video flex duels judged by GPT-4.1-mini.

Deployed on Vercel. It talks to the Node backend (WebSocket signaling + frame
API) whose URL is set in [`config.js`](config.js):

```js
window.LARP_CONFIG = {
  backendOrigin: "https://larp-battle-server-production.up.railway.app",
};
```

The video itself is peer-to-peer WebRTC between the two players — it never
touches Vercel or the backend. Only per-second camera frames are POSTed to the
backend for judging and moderation.

To point at a different backend, edit `config.js` and redeploy.
