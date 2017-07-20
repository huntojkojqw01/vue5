Vue.component('tabs',{
	data(){
		return {
			tabs: []
		}
	},
	template: `
		<div>
			<div class="tabs">
			  <ul>
			    <li v-for="tab in tabs" :class="{'is-active': tab.isActive}"><a @click="tabselect(tab)">{{tab.name}}</a></li>			    
			  </ul>
			</div>
			<div><slot></slot></div>
		</div>	
	`,
	created(){
		this.tabs=this.$children;//lấy dữ liệu từ chính con nó trogn slot
	},
	methods: {
		tabselect(selectedTab){
			this.tabs.forEach(tab=>{
				tab.isActive=(tab.name==selectedTab.name);
			});
		}
	}
});
Vue.component('tab',{
	template: `
		<div v-show="isActive"><slot></slot></div>
	`,
	props: {
		name: {require: true},
		selected: {default: false}
	},
	data(){
		return {
			isActive: false
		}
	},
	mounted(){
		this.isActive=this.selected;
	}
});
