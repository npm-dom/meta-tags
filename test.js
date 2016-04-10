var test = require("tape");
var tags = require("./");

test('reading tags', function (t) {
  t.plan(1);
  t.deepEqual(tags(), ['gezi', 'web', 'browser', 'break', 'internet', 'browsers', 'free software', 'open source', 'hack']);
});
