import os
import subprocess
import sys

from dotenv import dotenv_values


def test_main():
    env = {**os.environ, **dotenv_values(".env.example"), "PYTHONUNBUFFERED": "1"}

    proc = subprocess.Popen(
        [sys.executable, "main.py"],
        stdout=subprocess.PIPE,
        stderr=subprocess.PIPE,
        env=env,
        cwd=os.path.dirname(os.path.abspath(__file__)),
    )

    try:
        stdout, stderr = proc.communicate(timeout=10)
    except subprocess.TimeoutExpired:
        proc.kill()
        stdout, stderr = proc.communicate()

    assert b"example-flag" in stdout, f"Expected output not found.\nstderr: {stderr.decode()}"
