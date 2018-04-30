const auth = new Vue({
	el: '#app',
	data: {
		hasError : false,
		isSuccess : false,
		isLoading : false,
		nowInLogin : true

	},
	methods: {
		sectionCheck: function (check) {
			if(check == 'login'){
				this.nowInLogin = true;
			}
			else{
				this.nowInLogin = false;
			}
		}
	}
});