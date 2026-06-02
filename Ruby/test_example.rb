require 'minitest/autorun'
require 'dotenv'

class ExampleTest < Minitest::Test
  def test_main
    env = ENV.to_h.merge(Dotenv.parse(File.join(__dir__, '.env.example')))

    stdout_r, stdout_w = IO.pipe
    stderr_r, stderr_w = IO.pipe

    pid = Process.spawn(env, RbConfig.ruby, 'example.rb', chdir: __dir__,
                        out: stdout_w, err: stderr_w)
    stdout_w.close
    stderr_w.close

    stdout_thread = Thread.new { stdout_r.read }
    stderr_thread = Thread.new { stderr_r.read }

    sleep 10
    Process.kill('TERM', pid) rescue Errno::ESRCH
    Process.wait(pid)

    stdout = stdout_thread.value
    stderr = stderr_thread.value
    stdout_r.close
    stderr_r.close

    assert_includes stdout, 'example-flag',
                    "Expected 'example-flag' in output.\nstderr: #{stderr}"
  end
end
