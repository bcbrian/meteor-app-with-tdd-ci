Feature: Visit Some Page

 As a visitor to the site,
 so that I can visit other pages,
 I want to see a header on the home page.

 Background:
    Given I am on the site

 Scenario: Visitor is on home page
    When click on a link to "/some-page"
    Then I should see "Some Page!"

# /tests/features/create-widget.feature
