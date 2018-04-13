# Mercury  
[Live Site](https://mercury-jh.herokuapp.com/)\
[Design Documents](https://github.com/JonHalloran/Mercury/wiki)

Mercury is an app to plan running routes as well as storing information about runs you have completed based on MapMyRun.

## Features
---
* Routes
  * Create new routes using embedded Google map
  * Save created routes to be seen later
  * Search for routes created by all users
  * See all routes that you have completed
* Workouts
  * Log a instance of running a route as a workout
  * See a list of all runs you have completed
  * Comment on the runs of yourself and others
* User Dashboard
  * See a list of all runs completed and routes created in starting with most recent
  * See a summary of the total distance and time that you have run.

### Ability to Create Routes 
  ![create route](https://res.cloudinary.com/dtw7iteso/image/upload/v1523658004/create_route_2.gif "Create Routes")

  Modified general initMap function provided by Google to be able to be used on several pages.  The required passing in a hash to specify whether markers can be added moved.

``` javascript
export const initMap = ({ draggable, clickable }) => {
  directionsService = new google.maps.DirectionsService();
  directionsDisplay = new google.maps.DirectionsRenderer({
    draggable: draggable
  });

  ...

    if (clickable) {
    clickListener = map.addListener("click", e => {
      addWaypoint(e.latLng);
      if (locations.length > 1) {
        clearFirstMarker();
        calcRoute();
      } else placeMarker(e.latLng, map);
    });
  }
```


### Ability to Create Runs
  ![create route](https://res.cloudinary.com/dtw7iteso/image/upload/v1523658547/create_run_2.gif "Create Routes")

  Used a modal to log new workouts.  Calculated total duration to be run in seconds to limit necessary storage in teh database.

``` javascript
  handleSubmit(e) {
    e.preventDefault();
    let runForm = {
      route_id: this.props.match.params.routeId,
      duration: this.state.hours * 3600 + this.state.minutes * 60 + this.state.seconds,
      date: this.state.date,
      name: this.state.name
    };

    this
      .props
      .createRun(runForm)
      .then(response => this.props.history.push(`/runs/${response.payload.run.id}`));
  }
```

## Technologies used
---
This application was disigned both to familiarize myself with the Google maps API as well as to be a possible portoflio project.  For this reason using a Rails backend was chosen due to its ease of use.  The project is hosted on Heroku as this seemed sufficient for projected usage.

Google maps API was used in many pages with some being embedded maps and some being static images.  Embedded map gave additonal functionalities such as adding markers and moving focused location; while, static maps allowed for quicker load times in loactions where many images are present.

Redux states were set up to be a flat as possible to prevent any issues with data not being properly updated.  

Cloudinary was used for image hosting but the functionality of being able to upload profile images is not yet implemented.


## Future Directions
---
* Add ability to add friends and view their activity on the dashboard
* Ability to upload images to use as profile photos
* Edit profiles
* Ability to edit routes
* Mobile app using React Native


<!-- ## License
***
MIT -->