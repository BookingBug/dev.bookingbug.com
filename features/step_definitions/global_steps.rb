When(/^I click the "(.*?)" button$/) do |button_text|
  click_button(button_text)
end

Then(/^I should be directed to the "(.*?)" page$/) do |target_url|
  expect(page.current_url).to eq(Capybara.app_host + target_url)
end

When(/^I click the "([^"]+)" link$/) do |link_text|
  click_link(link_text)
end

Then(/^I should see the subscription notification$/) do
  sleep(3)
  expect(page).to have_css('.subscription-message')
end

When(/^I fill in the Subscribe form$/) do
  fill_in('fname', with: 'Automated')
  fill_in('lname', with: 'Test')
  fill_in('email', with: '' + Time.now.to_i.to_s)
  click_button('subscribe')
end

Given(/^I am logged in$/) do
  visit '/auth'
  fill_in('email', with: '')
  fill_in('password', with: '')
  click_button('Sign In')
end

Given(/^I am logged out$/) do
  visit '/auth/logout' + current_url
end-
