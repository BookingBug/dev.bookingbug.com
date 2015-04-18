Feature: Home page functionality

  Background:
    Given I am on the homepage

  Scenario: Click the "Try for Free" button in header
    When I click the Try for Free button in the header
    Then I should see the stream wizard

  Scenario: Click the "Try for Free" button in body
    When I click the Try for Free button in the body
    Then I should see the stream wizard

  Scenario: Click Sign In button in the header
    Given I am logged out
    When I click the Sign In button in the header
    Then I should be directed to the "/auth" page

  Scenario: Click Sign In button in the body
    Given I am logged out
    When I click the Sign In button in the body
    Then I should be directed to the "/auth" page

  Scenario: Fill out subscribe form
    When I fill in the Subscribe form
    And I click the "subscribe" button
    Then I should see the subscription notification
