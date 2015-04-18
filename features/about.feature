Feature: About page

  Scenario: Fill out the contact form
    Given I am on the About page
    When I fill out the contact form
    Then I should see a contact success message

