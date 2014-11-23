var lessCommonWords = require("less-common-words");
var uniques = require("uniques");

module.exports = read;

function read (customWindow) {
  var all = Array.prototype.slice.call((customWindow || window).document.getElementsByTagName('meta'));

  if (!all.length) return [];

  var content = [];
  var name;
  var i = -1;
  var len = all.length;
  var text = '';

  while (++i < len) {
    name = all[i].getAttribute('name');

    if (name == 'keywords') {
      content.push.apply(content, all[i].getAttribute('content').split(/,\s?/));
    }

    if (name == 'og:title' || name == 'og:description' || name == 'description') {
      content.push.apply(content, lessCommonWords(all[i].getAttribute('content')));
    }
  }

  return uniques(content);
}
