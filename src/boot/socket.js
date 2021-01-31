import Vue from 'vue'
import VueSocketIO from 'vue-socket.io'

const options = {
	path: "/shop/socket.io",
	transport: ["websocket", "polling"],
	query: `token=${localStorage.getItem('token')}`,
	secure: true
  };
Vue.use(new VueSocketIO({
  debug: true,
  connection: 'https://ariaeestore.com/',
  options : options
}))
