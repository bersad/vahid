import io from 'socket.io-client';

window.socket = io("https://ariaeestore.com/", {
			path: "/shop/socket.io",
			transport: ["websocket", "polling"],
			query: `token=${localStorage.getItem('token')}`,
			secure: true
		});