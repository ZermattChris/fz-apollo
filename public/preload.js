self.onmessage = function (event) {
  if (event.data === "Hello") {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "https://fz-backend.simpleitsolutions.ch/onlinebooking/api/init", false);  // synchronous request
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send(null);
    self.postMessage(xhr.responseText);
  }
};