'use strict';

var xhrhandler = (function(){


  function xhrRequest(method, urlr, data, type, cb) {
    var xhr = new XMLHttpRequest();
    xhr.open(method, urlr, true);
    xhr.setRequestHeader(type, 'application/json');
    xhr.send(data);
    xhr.onload = function() {
      if (xhr.readyState === xhr.DONE) {
        cb(JSON.parse(xhr.response));
        console.log(JSON.parse(xhr.response));
      }
    };
  }

  return {
    xhrRequest: xhrRequest,
  };
})();
