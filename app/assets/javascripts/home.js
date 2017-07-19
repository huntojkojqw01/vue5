Vue.component('task-list',{
	template: `
		<div>
			<task v-for="task in tasks">{{task.description}}</task>
		</div>
	`,
	data: function(){
		return {
			tasks: [
				{description: 'Task Mot',completed: true},
				{description: 'Task Hai',completed: false},
				{description: 'Task Ba',completed: true},
				{description: 'Task Bon',completed: true},
				{description: 'Task Nam',completed: false},
				{description: 'Task Sau',completed: true}
			]
		}
	}		
});
Vue.component('task',{
	template: '<li><slot></slot></li>'
});