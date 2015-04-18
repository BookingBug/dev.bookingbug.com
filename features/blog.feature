Feature: Blog page

  Background:
    Given I am on the blog page

  Scenario: Fill out subscribe form
    When I fill in the Subscribe form
    And I click the "subscribe" button
    Then I should see the subscription notification
