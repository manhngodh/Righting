// On Chrome Install
// chrome.runtime.onInstalled.addListener(function (details) {
//     if (details.reason === "install") {
//         chrome.tabs.create({ url: "https://chat.openai.com/auth/login" });
//     }
// });

function reddenPage() {
    document.body.style.backgroundColor = 'red';
    // console.log("tab.id " + sender.tab.id);
    document.getElementsByClassName('icon-item-right')[0].innerHTML += '<div>Hello, world!</div>';
}

chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        if (request.message === "getPrivilegedInfo") {
        // chrome.tabs.executeScript(sender.tab.id, { code: "document.documentElement.innerHTML" }, function(result) {
        //     sendResponse(result);
        // });
            console.log("abc", sender);
            chrome.scripting.executeScript({
                target: { tabId: sender.tab.id , allFrames : true},
                function: reddenPage
                // function: function() {
                //     console.log("tab.id " + sender.tab.id);
                //     document.getElementsByClassName('icon-item-right')[0].innerHTML += '<div>Hello, world!</div>';
                // }
            });
            return true;
        }
    }
);

// if ('serviceWorker' in navigator) {
//     window.addEventListener('load', function() {
//       navigator.serviceWorker.register('service-worker.js').then(function(registration) {
//         console.log('ServiceWorker registration successful with scope: ', registration.scope);
//       }, function(err) {
//         console.log('ServiceWorker registration failed: ', err);
//       });
//     });
// }
// chrome.browserAction.onClicked.addListener(function(tab) {
//     console.log("manh ngo open")
//     chrome.tabs.sendMessage(tab.id, { message: "openEditor" }, function(response) {
//       console.log(response.message);
//     });
//   });
  
// chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
//     if (request.message === "connect") {
//       // Connect to ChatGPT here
//       // Send response back to background.js
//       sendResponse({ message: "connected" });
//     }
// });