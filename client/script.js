document.addEventListener('DOMContentLoaded', loaded);

function loaded() {
  var arr = [].slice.call(document.querySelectorAll('a[track-action]'));
  arr.forEach(function(a) {
    a.onclick = function(e) {
      e.preventDefault();
      var category = document.querySelector('body').getAttribute('track-category');
      var action = e.target.getAttribute('track-action');
      var label = e.target.getAttribute('track-label');
      var href = e.target.getAttribute('href');
      if (category && action) {
        var obj = {
          'hitType': 'event',
          'eventCategory': category,
          'eventAction': action,
          'hitCallback':
          function () {
            document.location = href;
          }
        }
        if (label) obj.eventLabel = label;
        ga('send', obj);
      }
      // console.log(category, action, href, label)
    }
  });
}
