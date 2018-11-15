function httpTohttps() {
    var host = "localhost:4000";
    if ((host == window.location.host) && (window.location.protocol != "https:")){
      window.location.protocol = "https";
    }

}

$(document).ready(function() {
  httpTohttps();
});
