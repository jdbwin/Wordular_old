require File.expand_path('../boot', __FILE__)

require 'rails'
require "active_model/railtie"
require "active_job/railtie"
require "active_record/railtie"
require "action_controller/railtie"
require "action_mailer/railtie"
require "rails/test_unit/railtie"

# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
Bundler.require(*Rails.groups)

module Wordular
  class Application < Rails::Application

    config.middleware.insert_before 'Rack::Runtime', 'Rack::Cors' do
      allow do
        origins '*'
        resource '*',
          headers: :any,
          methods: [:get, :post, :patch, :delete, :options]
      end
    end

    config.active_record.raise_in_transactional_callbacks = true

  end
end
