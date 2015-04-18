Feature: Pricing page

  Background:
    Given I am on the pricing page

  Scenario: Click purchase one day button
    When I click the purchase one day button
    Then I should see the stream wizard

  Scenario: Click purchase one week button
    When I click the purchase one week button
    Then I should see the stream wizard

  Scenario: Click purchase one month button
    When I click the purchase one month button
    Then I should see the stream wizard
