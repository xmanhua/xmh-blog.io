function httpTohttps() {
    var host = "localhost:4000";
    if ((host == window.location.host) && (window.location.protocol != "https:")){
      window.location.protocol = "https";
    }

}
function shareDemo() {
	$('.share-demo').click(function(){ alert();
		$('.share-demo-load').load('/xmh-demo/share/index.html')
	});
}

$(document).ready(function() {
  httpTohttps();
  shareDemo();
});
