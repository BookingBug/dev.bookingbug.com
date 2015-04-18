=begin
require 'json'
require 'mysql2'

class Database
  CONFIG_PATH = 'config.json'

  attr_reader :connection

  def initialize
    connect
    use_database
  end

  def active?
    defined? connection
  end

  def clear_events
    do_query('TRUNCATE TABLE events')
  end

  def add_event(event_data)
    check_event_values(event_data)
    insert_event(event_data)
  end

  def list_events
    do_query('SELECT * FROM `events`').each {|line| puts line }
  end

  def do_query(query)
    try_sql do
      connection.query(query)
    end
  end

  private

  def connect
    try_sql do
      @connection = ::Mysql2::Client.new(
        host: host,
        port: port,
        username: username,
        password: password
      )
    end
  end

  def use_database
    do_query("USE `#{database}`;")
  end

  def config
    @config ||= JSON.parse(File.read(CONFIG_PATH))
  end

  def environment
    config['Dachi']['environment']
  end

  def host
    config['Database'][environment]['hostname']
  end

  def port
    config['Database'][environment]['port']
  end

  def username
    config['Database'][environment]['username']
  end

  def password
    config['Database'][environment]['password']
  end

  def database
    config['Database'][environment]['database']
  end

  def try_sql
    begin
      yield
    rescue ::Mysql2::Error => error
      print_error(error)
      close
    end
  end

  def print_error(error)
    puts error.errno
    puts error.error
  end

  def close
    connection.close if connection
    remove_instance_variable(:@connection)
  end

  # EVENTS

  def check_event_values(event_data)
    event_fields.each do |field|
      unless event_data.key? field
        raise "Missing value for event: #{field}"
      end
    end
  end

  def insert_event(event_data)
    do_query <<-sql
      INSERT INTO `events` (#{event_fields.join(',')})
      VALUES (event_data.sort.values)
    sql
  end

  def event_fields
    [:access_token_key, :access_token_secret, :client_id, :search, :title, :twitter_handle]
  end

  # http://paste.r4wizard.co.uk/226

end
=end