const KEEP_ALIVE_TYPE = 'keep_alive';

// send a message every 20 sec to service worker
setInterval(() => {
    chrome.runtime.sendMessage({ type: KEEP_ALIVE_TYPE });
  }, 20000);