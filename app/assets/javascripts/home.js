Vue.component('cou',{
	template: '<div><input @blur="applied"></div>',
	methods:{
		applied(){
			this.$emit('chem');
		}
	}
});