# encoding: UTF-8
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

ActiveRecord::Schema.define(version: 20150515184710) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "channels", force: :cascade do |t|
    t.integer  "team_site_id", null: false
    t.string   "title",        null: false
    t.datetime "created_at",   null: false
    t.datetime "updated_at",   null: false
  end

  add_index "channels", ["team_site_id"], name: "index_channels_on_team_site_id", using: :btree

  create_table "messages", force: :cascade do |t|
    t.integer  "sender_id",  null: false
    t.integer  "channel_id", null: false
    t.string   "text",       null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_index "messages", ["channel_id"], name: "index_messages_on_channel_id", using: :btree
  add_index "messages", ["sender_id"], name: "index_messages_on_sender_id", using: :btree

  create_table "private_messages", force: :cascade do |t|
    t.integer  "sender_id",    null: false
    t.integer  "receiver_id",  null: false
    t.integer  "team_site_id", null: false
    t.string   "text",         null: false
    t.datetime "created_at",   null: false
    t.datetime "updated_at",   null: false
  end

  add_index "private_messages", ["receiver_id"], name: "index_private_messages_on_receiver_id", using: :btree
  add_index "private_messages", ["sender_id"], name: "index_private_messages_on_sender_id", using: :btree
  add_index "private_messages", ["team_site_id"], name: "index_private_messages_on_team_site_id", using: :btree

  create_table "team_site_memberships", force: :cascade do |t|
    t.integer  "team_site_id", null: false
    t.integer  "user_id",      null: false
    t.datetime "created_at",   null: false
    t.datetime "updated_at",   null: false
  end

  add_index "team_site_memberships", ["team_site_id"], name: "index_team_site_memberships_on_team_site_id", using: :btree
  add_index "team_site_memberships", ["user_id"], name: "index_team_site_memberships_on_user_id", using: :btree

  create_table "team_sites", force: :cascade do |t|
    t.integer  "owner_id",   null: false
    t.string   "name",       null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_index "team_sites", ["name"], name: "index_team_sites_on_name", unique: true, using: :btree
  add_index "team_sites", ["owner_id"], name: "index_team_sites_on_owner_id", using: :btree

  create_table "users", force: :cascade do |t|
    t.string   "username",            null: false
    t.string   "password_digest",     null: false
    t.string   "session_token",       null: false
    t.datetime "created_at",          null: false
    t.datetime "updated_at",          null: false
    t.string   "email",               null: false
    t.string   "avatar_file_name"
    t.string   "avatar_content_type"
    t.integer  "avatar_file_size"
    t.datetime "avatar_updated_at"
  end

  add_index "users", ["email"], name: "index_users_on_email", unique: true, using: :btree
  add_index "users", ["password_digest"], name: "index_users_on_password_digest", unique: true, using: :btree
  add_index "users", ["session_token"], name: "index_users_on_session_token", unique: true, using: :btree
  add_index "users", ["username"], name: "index_users_on_username", unique: true, using: :btree

end
