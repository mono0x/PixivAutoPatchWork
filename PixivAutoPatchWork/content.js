window.addEventListener('AutoPatchWork.DOMNodeInserted', function() {
  var e = document.createEvent('MutationEvent');
  e.initMutationEvent('AutoPagerize_DOMNodeInserted');
  document.body.dispatchEvent(e);
}, false);

