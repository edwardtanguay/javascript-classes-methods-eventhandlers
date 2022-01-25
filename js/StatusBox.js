export class StatusBox {
	constructor(parentElem, status = 'offline') {
		this.parentElem = parentElem;
		this.status = status;

		this.parentElem.innerHTML += this.getHtml();

		this.buttonElem = this.parentElem.querySelector('button');
		this.statusElem = this.parentElem.querySelector('span.status');

		this.buttonElem.addEventListener('click', this.toggle);
	}

	toggle = () => {
		this.status = this.status === 'online' ? 'offline' : 'online';
		this.statusElem.innerHTML = this.status;
	}

	getHtml() {
		return `
<div class="infoBox">
	<div class="title">Status Box</div>	
	<div class="body">The status is: <span class="status">${this.status}</span></div>
	<button>Toggle</button>
</div>
			`;
	}
}