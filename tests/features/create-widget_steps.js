// Recommended filename: Given_I_am_on_the_site.js
module.exports = function() {
  this.Given(/^I am on the site$/, function () {
    browser.url('http://localhost:3000');
  });

  this.When(/^click on a link to "([^"]*)"$/, function (arg1) {
    let _el = 'a[href="'+arg1+'"]';
    browser.waitForExist(_el);
    browser.click(_el);
  });

  this.Then(/^I should see "([^"]*)"$/, function (arg1) {
    // <h1 className="display-3">Some Page!</h1>
    let _el = 'h1.display-3';
    browser.waitForExist(_el);
    expect(browser.getText(_el)).toEqual(arg1);
    // Write the automation code here
  });
};
