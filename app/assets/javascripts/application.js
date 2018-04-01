// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require rails-ujs
//= require_tree .

{
  entities: {
    courses: {
      1: {
        id: 1,
        name: "name"
        user_id: 1,
        description: "description"
        img_url: "1.url"
      }
      2: {
        name: "name2"
        user_id: 2,
        description: "description2"
        img_url: "2.url"
      }
    }

    users: {
      1: {
        id: 1
        username: "name"
        photo_url: "3.url"
      }
      2: {
        id: 2
        username: "name2"
        photo_url: "4.url"
      }
    }

    workouts: {
      1: {
        id: 1
        user_id: 1
        course_id: 1
        comment_ids: [1, 2]
      }

      2: {
        id: 2
        user_id: 2
        course_id: 2
        comment_ids: [0]
      }
    }

    comments: {
      0: {
        id: 0
        user_id: 2
        workout_id: 2
        body: "words!"
      }
      1: {
        id: 1
        user_id: 1
        workout_id: 2
        body: "more words!"
      }
      2: {
        id: 2
        user_id: 1
        workout_id: 2
        body: "even more words!"
      }
    }

  ui: {
    loading: true/false
  },
  errors: {
    login: ["Incorrect username/password combination"],
    chirpForm: ["Chirp body cannot be blank", "I coppied this becuase we havn't covered Redux user auth yet"],
  },
  session: {
    id: 57,
    username: "blue_hawk_copied_from_bluebird",
    img_url: "I genuinely don't understand what need "
  }
}
