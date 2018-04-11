# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20180411180752) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "comments", force: :cascade do |t|
    t.string "body", null: false
    t.integer "user_id", null: false
    t.integer "run_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["run_id"], name: "index_comments_on_run_id"
  end

  create_table "routes", force: :cascade do |t|
    t.integer "user_id", null: false
    t.string "name", null: false
    t.text "description", null: false
    t.text "img_url", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "request"
    t.float "lat"
    t.float "log"
    t.float "elevation"
    t.float "distance"
    t.string "origin"
    t.index ["img_url"], name: "index_routes_on_img_url"
    t.index ["user_id"], name: "index_routes_on_user_id"
  end

  create_table "runs", force: :cascade do |t|
    t.integer "user_id", null: false
    t.integer "route_id", null: false
    t.integer "duration", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.date "date", null: false
    t.string "name"
  end

  create_table "users", force: :cascade do |t|
    t.string "email", null: false
    t.string "first_name", null: false
    t.string "last_name", null: false
    t.string "photo_url"
    t.string "password_digest", null: false
    t.string "session_token", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["session_token"], name: "index_users_on_session_token", unique: true
  end

end
