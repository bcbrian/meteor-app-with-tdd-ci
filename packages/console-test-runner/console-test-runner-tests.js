// Import Tinytest from the tinytest Meteor package.
import { Tinytest } from "meteor/tinytest";

// Import and rename a variable exported by console-test-runner.js.
import { name as packageName } from "meteor/console-test-runner";

// Write your tests here!
// Here is an example.
Tinytest.add('console-test-runner - example', function (test) {
  test.equal(packageName, "console-test-runner");
});
