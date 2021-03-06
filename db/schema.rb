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

ActiveRecord::Schema.define(version: 20150531141546) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "channels", force: :cascade do |t|
    t.integer  "team_site_id", null: false
    t.string   "title",        null: false
    t.datetime "created_at",   null: false
    t.datetime "updated_at",   null: false
  end

  add_index "channels", ["team_site_id"], name: "index_channels_on_team_site_id", using: :btree

  create_table "credentials", force: :cascade do |t|
    t.integer  "user_id",    null: false
    t.string   "uid",        null: false
    t.string   "provider",   null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_index "credentials", ["uid", "provider"], name: "index_credentials_on_uid_and_provider", unique: true, using: :btree
  add_index "credentials", ["user_id"], name: "index_credentials_on_user_id", using: :btree

  create_table "invites", force: :cascade do |t|
    t.string   "invite_code",  null: false
    t.integer  "team_site_id", null: false
    t.string   "email",        null: false
    t.integer  "inviter_id",   null: false
    t.datetime "created_at",   null: false
    t.datetime "updated_at",   null: false
  end

  add_index "invites", ["inviter_id"], name: "index_invites_on_inviter_id", using: :btree
  add_index "invites", ["team_site_id"], name: "index_invites_on_team_site_id", using: :btree

  create_table "messages", force: :cascade do |t|
    t.integer  "sender_id",         null: false
    t.integer  "channel_id",        null: false
    t.string   "text",              null: false
    t.datetime "created_at",        null: false
    t.datetime "updated_at",        null: false
    t.string   "file_file_name"
    t.string   "file_content_type"
    t.integer  "file_file_size"
    t.datetime "file_updated_at"
  end

  add_index "messages", ["channel_id"], name: "index_messages_on_channel_id", using: :btree
  add_index "messages", ["sender_id"], name: "index_messages_on_sender_id", using: :btree

  create_table "pg_search_documents", force: :cascade do |t|
    t.text     "content"
    t.integer  "searchable_id"
    t.string   "searchable_type"
    t.datetime "created_at",      null: false
    t.datetime "updated_at",      null: false
  end

  add_index "pg_search_documents", ["searchable_type", "searchable_id"], name: "index_pg_search_documents_on_searchable_type_and_searchable_id", using: :btree

  create_table "private_messages", force: :cascade do |t|
    t.integer  "sender_id",         null: false
    t.integer  "receiver_id",       null: false
    t.integer  "team_site_id",      null: false
    t.string   "text",              null: false
    t.datetime "created_at",        null: false
    t.datetime "updated_at",        null: false
    t.string   "file_file_name"
    t.string   "file_content_type"
    t.integer  "file_file_size"
    t.datetime "file_updated_at"
  end

  add_index "private_messages", ["receiver_id"], name: "index_private_messages_on_receiver_id", using: :btree
  add_index "private_messages", ["sender_id"], name: "index_private_messages_on_sender_id", using: :btree
  add_index "private_messages", ["team_site_id"], name: "index_private_messages_on_team_site_id", using: :btree

  create_table "sessions", force: :cascade do |t|
    t.integer  "user_id"
    t.string   "token",      null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_index "sessions", ["token"], name: "index_sessions_on_token", using: :btree
  add_index "sessions", ["user_id"], name: "index_sessions_on_user_id", using: :btree

  create_table "stars", force: :cascade do |t|
    t.datetime "created_at",    null: false
    t.datetime "updated_at",    null: false
    t.integer  "user_id",       null: false
    t.integer  "starable_id",   null: false
    t.string   "starable_type", null: false
  end

  add_index "stars", ["starable_id"], name: "index_stars_on_starable_id", using: :btree
  add_index "stars", ["user_id"], name: "index_stars_on_user_id", using: :btree

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
  add_index "users", ["username"], name: "index_users_on_username", unique: true, using: :btree

  add_foreign_key "sessions", "users"
end
