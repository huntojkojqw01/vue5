Vue.component('modal',{
	template: `
		<div class="modal is-active">
		  <div class="modal-background"></div>
		  <div class="modal-card">
		    <header class="modal-card-head">
		      <p class="modal-card-title">
		      	<slot name="header"></slot>
		      </p>
		      <button class="delete"></button>
		    </header>
		    <section class="modal-card-body">
		      <slot name="body"></slot>
		      <slot>
		      	default content here
		      </slot>
		    </section>
		    <footer class="modal-card-foot">
		      <a class="button is-success">Save changes</a>
		      <a class="button">Cancel</a>
		    </footer>
		  </div>
		</div>
	`
});