#!/usr/bin/env python3
"""Local preview server. Sends no-store so the browser never shows a stale page."""
import functools
import http.server
import socket
import sys


class DualStackServer(http.server.ThreadingHTTPServer):
    """Accepts both IPv6 (::1) and IPv4 (127.0.0.1) so 'localhost' always resolves."""

    address_family = socket.AF_INET6
    daemon_threads = True

    def server_bind(self):
        self.socket.setsockopt(socket.IPPROTO_IPV6, socket.IPV6_V6ONLY, 0)
        super().server_bind()


class NoCacheHandler(http.server.SimpleHTTPRequestHandler):
    def end_headers(self):
        self.send_header("Cache-Control", "no-store, must-revalidate")
        self.send_header("Expires", "0")
        super().end_headers()

    def send_header(self, keyword, value):
        if keyword == "Last-Modified":
            return
        super().send_header(keyword, value)


if __name__ == "__main__":
    port = int(sys.argv[1]) if len(sys.argv) > 1 else 8765
    handler = functools.partial(NoCacheHandler, directory=".")
    print(f"Preview running at http://localhost:{port} (caching disabled)")
    DualStackServer(("::", port), handler).serve_forever()
