Package.describe({
  name: 'console-test-runner',
  version: '0.1.3',
  summary: 'A mocha console reporter for running your package tests from the command line with spacejam.',
  git: 'https://github.com/practicalmeteor/meteor-mocha-console-reporter.git',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md',
  testOnly: true
});

Package.onUse(function(api) {
  api.versionsFrom('1.3-rc.10');
  api.use(['coffeescript', "avital:mocha", 'practicalmeteor:loglevel', 'ecmascript']);
  api.imply("avital:mocha");
  api.mainModule('ConsoleReporter.coffee', 'client');
});
