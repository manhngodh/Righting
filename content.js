chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.message === "connect") {
      // Connect to ChatGPT here
      // Send response back to background.js
      sendResponse({ message: "connected" });
    }
  });

const editorUrl = chrome.runtime.getURL("editor.html");

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.message === "openEditor") {
    chrome.tabs.executeScript(
      sender.tab.id,
      { code: `window.open("${editorUrl}")` },
      function() {
        sendResponse({ message: "editorOpened" });
      }
    );
  }
});

chrome.runtime.sendMessage({ message: "getPrivilegedInfo" }, function(response) {
    console.log(response);
});
  