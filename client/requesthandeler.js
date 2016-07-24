'use strict';

var xhrhandler = (function(){


  // function xhrRequest(method, urlr, data, type, cb) {
  //   var xhr = new XMLHttpRequest();
  //   xhr.open(method, urlr, true);
  //   xhr.setRequestHeader(type, 'application/json');
  //   xhr.send(data);
  //   xhr.onload = function() {
  //     if (xhr.readyState === xhr.DONE) {
  //       cb(JSON.parse(xhr.response));
  //       console.log(JSON.parse(xhr.response));
  //     }
  //   };
  // }

  function xhrRequest(method, urlr, data, type, cb) {
    var xhr = new XMLHttpRequest();
    xhr.open(method, urlr, true);
    xhr.setRequestHeader(type, 'application/json');
    xhr.onload = function() {
      if (xhr.readyState === xhr.DONE) {
        if ( xhr.status !== 200) {
         cb(xhr.status, null);
         return;
       }
        cb(JSON.parse(xhr.response));
        console.log(JSON.parse(xhr.response));
      }
    };
    xhr.send(data);
  }

  return {
    xhrRequest: xhrRequest,
  };
})();
