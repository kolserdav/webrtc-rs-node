// @ts-check
const wrtc = require('../');

(async () => {
  console.log(wrtc);
  const start = await wrtc.peer_connection_1();
})();