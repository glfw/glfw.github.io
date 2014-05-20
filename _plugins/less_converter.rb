# Jekyll automated less to css converter plugin
#
# Code taken from : https://gist.github.com/KBalderson/5689220
#
# Installation note : gem install less therubyracer
# Usage note : Add two lines of --- at the top of .less file.

module Jekyll
  class LessConverter < Converter
    safe true
    priority :high
    
    def setup
      return if @setup
      require 'less'
      @setup = true
    rescue LoadError
      STDERR.puts 'You are missing the library required for less. Please run:'
      STDERR.puts ' $ [sudo] gem install less'
      raise FatalException.new("Missing dependency: less")
    end
    
    def matches(ext)
      ext =~ /less|lcss/i
    end
    
    def output_ext(ext)
      ".css"
    end
    
    def convert(content)
      setup
      begin
        parser = Less::Parser.new
        parser = parser.parse(content).to_css(:compress => true)
      rescue => e
        puts "Less Exception: #{e.message}"
      end
    end
  end
end
