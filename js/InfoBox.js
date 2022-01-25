export class InfoBox {
	constructor(title, body) {
		this.document = document;
		this.title = title;
		this.body = body;
	}

	display() {
		return `
			<div className="infoBox">
		<div className="title">${this.title}</div>	
		<div className="body">${this.body}</div>
			</div>
			`;
	}
}