const vm = new Vue({
  el: '#app',
  data: {
    results: [],
    queryInput: '',
    ratingIsInActive: true,
    dataLoading: false
    },
  methods:{
    queryFunction(e){
    	this.dataLoading = true;
      axios.post('http://35.185.39.220:5555', this.queryInput)
          .then(response => {
          	this.dataLoading = false;
            this.results = response.data;
            this.ratingIsInActive = false;
            var container = this.$el.querySelector("#bodyAns");
			container.scrollIntoView();

          });
    console.log(this.results);
    }
  },
  mounted(){
  }
});