from http.server import ThreadingHTTPServer, SimpleHTTPRequestHandler
from pathlib import Path
import os


def run() -> None:
    root = Path(__file__).resolve().parent
    os.chdir(root)
    host, port = "127.0.0.1", 8000
    print(f"Serving eCommerce dashboard at http://{host}:{port}")
    ThreadingHTTPServer((host, port), SimpleHTTPRequestHandler).serve_forever()


if __name__ == "__main__":
    run()
