Feature: Support page

  Background:
    Given I am logged in
    And I am on the support page

  Scenario: Create support request
    When I fill in the support form
    Then I should see a support message confirmation
