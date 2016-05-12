Feature: Home page test
    As a user
    I want to see the home page

    Background:
        Given I open the site "/"

    Scenario: as a user I want to view the homepage
      Then I expect that the title is "Developer Docs - BookingBug"
