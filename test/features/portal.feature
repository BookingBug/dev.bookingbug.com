Feature: Developer Portal
  As a user
  I want to access a developer portal

  Scenario: As a user I want to login
    Given I open the site "/login"
    When I set "max@lemondigits.com" to the inputfield "#identification" 
    When I set "joe" to the inputfield "#password"
    When I submit the form ".login"
    Then I expect that the path is "/account"

  Scenario: As a user I expect there to be an application key in my dashboard
    Given I open the site "/account"
    Then I expect that element ".appkey" is visible

  Scenario: As a user I expect to see a list of the most resent forum questions
    Given I open the site "/account"
    Then I expect that element ".account__forum-posts > ul" is visible

  Scenario: As a user i want a header button back to the docs
    Given I open the site "/account"
    When I click on the button ".dev-docs"
    Then I expect that the path is "/"

  Scenario: As a user i want a header button to the API ref
    Given I open the site "/account"
    When I click on the button ".api-ref"
    Then I expect the url "http://apidocs.bookingbug.com/" is opened in a new tab

  Scenario: As a user i want a header button to the SDK ref
    Given I open the site "/account"
    When I click on the button ".sdk-ref"
    Then I expect the url "http://platform.bookingbug.com/sdkdocs/#/api" is opened in a new tab

  Scenario: As a user i want a header button to the forum
    Given I open the site "/account"
    When I click on the button ".forum"
    Then I expect the url "https://forum.bookingbug.com/" is opened in a new tab

  Scenario: As a user I want a header button to logout
    Given I open the site "/account"
    When I click on the button ".logout"
    Then I expect that the path is "/"
