window.Event=new class {
	constructor(){
		this.vue=new Vue();
	}
	kick(event,data=null){
		this.vue.$emit(event,data);
	}
	listen(event,callback){
		this.vue.$on(event,callback);
	}
}
Vue.component('cou',{
	template: '<div>Cou<input @change="send" v-model="content"><p>{{receive}}</p></div>',
	data(){
		return {
			receive: "",
			content: ""
		}
	},
	methods:{
		send(){
			Event.kick('cou-send',this.content);
		},
		recv(mess){
			this.receive=mess;
		}
	},
	created(){
		Event.listen('acp-send',this.recv);
	}
});
Vue.component('acp',{
	template: '<div>Acp<input @change="send" v-model="content"><p>{{receive}}</p></div>',
	data(){
		return {
			receive: "",
			content: ""
		}
	},
	methods:{
		send(){
			Event.kick('acp-send',this.content);
		},
		recv(mess){
			this.receive=mess;
		}
	},
	created(){
		Event.listen('cou-send',this.recv);
	}
});