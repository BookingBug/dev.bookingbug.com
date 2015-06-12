Given(/^I am on the homepage$/) do
  visit '/'
end

Then(/^I should see the text "([^"]*)"$/) do |arg1|
  expect(page).to have_content(arg1)
end