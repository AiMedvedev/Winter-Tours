import Vue from 'vue';

Vue.filter('descrLength', (text) => {
	return text.slice(0, 400);
})