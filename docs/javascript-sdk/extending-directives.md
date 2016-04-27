# Extending Directives
You may find that you need some sort of custom functionaility that the SDK does not provide. In this case you can extend the SDK directives.

Futher documentaion on this can be found below.
- https://docs.angularjs.org/api/ng/function/angular.extend
- http://thaiat.github.io/blog/2014/03/10/extending-an-existing-directive-in-angularjs/
- http://dfsq.info/site/read/reusable-angular-controller-methods

Lets say we're building an admin panel that works with the BookingBug Admin API. We have the ability to view the companies calendar. However it only shows us the events/bookings by day. In this case we can extend the directive. Allowing us to switch between next available day, day or multi_day.

Note below that we are extending the `calendarAdminCtrl` and then extending the scope of `$scope.calednar_view`

```
angular.module('BB.Controllers').controller 'calendarAdminCtrl', ($scope, $element, $controller, $attrs, $modal, BBModel, $rootScope) ->

  angular.extend(this, $controller('TimeList', {
    $scope: $scope,
    $attrs: $attrs,
    $element: $element
  }))

  $scope.calendar_view = {
    next_available: false,
    day: false,
    multi_day: false
  }

  $rootScope.connection_started.then ->

    # set default view
    if $scope.bb.item_defaults.pick_first_time
      $scope.switchView('next_available')
    else if $scope.bb.current_item.defaults.time
      $scope.switchView('day')
    else
      $scope.switchView('multi_day')

    $scope.person_name   = $scope.bb.current_item.person.name if $scope.bb.current_item.person
    $scope.resource_name = $scope.bb.current_item.resource.name if $scope.bb.current_item.resource


  $scope.switchView = (view) ->
    for key, value of $scope.calendar_view
      $scope.calendar_view[key] = false
    $scope.calendar_view[view] = true


  $scope.overBook = () ->

    new_timeslot = new BBModel.TimeSlot({time: $scope.bb.current_item.defaults.time, avail: 1})

    if $scope.selected_day
      $scope.setLastSelectedDate($scope.selected_day.date)
      $scope.bb.current_item.setDate($scope.selected_day)

    $scope.bb.current_item.setTime(new_timeslot)

    $scope.decideNextPage()
```
