// ensure Vue.use(VueToasted) has been called before using these methods
import Vue from 'vue';

export default {

	toast: message => {
		Vue.toasted.show(message, {
			position: 'bottom-right',
			duration: '3000'
		});
	}

};
