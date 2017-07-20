// Vue.component('task-list',{
// 	template: `
// 		<div>
// 			<task v-for="task in tasks">{{task.description}}</task>
// 		</div>
// 	`,
// 	data: function(){
// 		return {
// 			tasks: [
// 				{description: 'Task Mot',completed: true},
// 				{description: 'Task Hai',completed: false},
// 				{description: 'Task Ba',completed: true},
// 				{description: 'Task Bon',completed: true},
// 				{description: 'Task Nam',completed: false},
// 				{description: 'Task Sau',completed: true}
// 			]
// 		}
// 	}		
// });
// Vue.component('task',{
// 	template: '<li><slot></slot></li>'
// });
// Vue.component('message',{
// 	props: ['title','body'],
// 	data(){
// 		return {
// 			isVisible: true
// 		}
// 	},
// 	template: `
// 		<article class="message" v-show="isVisible">
// 		  <div class="message-header">
// 		    <p>{{title}}</p>
// 		    <button class="delete" @click="hideModal"></button>
// 		  </div>
// 		  <div class="message-body">
// 				{{body}}
// 		  </div>
// 		</article>
// 	`,
// 	methods: {
// 		hideModal(){
// 			this.isVisible=false;
// 		}
// 	}
// });
Vue.component('modal',{	
	template: `
		<div class="modal is-active">
		  <div class="modal-background"></div>
		  <div class="modal-content">
		  	<div class="box">
		  		Any other Bulma elements you want
		  	</div>
		  </div>
		  <button class="modal-close is-large" @click="$emit('close')"></button>
		</div>
	`
});
