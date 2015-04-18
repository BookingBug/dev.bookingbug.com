Feature: Billing account page

  Background:
    Given I am logged in
    And I am on the billing page

  Scenario: Fill in the contact form
    When I fill out the billing contact form
    Then I should see a success message
