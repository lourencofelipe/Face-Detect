function init() {
	const video = document.getElementById('video');
	const canvas = document.getElementById('canvas');
	const context = canvas.getContext('2d'); //mantém a imagem em 2d
	const tracker = new tracking.ObjectTracker('face');

	tracking.track('#video', tracker, { camera: true }); // Rastreia a face na tag video e utiliza a camera.

	tracker.on('track', event => {
		context.clearRect(0, 0, canvas.width, canvas.height);

		event.data.forEach(rect => {
			// Altera as propriedades para o retângulo.
			context.strokeStyle = '#ffff00';
			context.lineWidth = 2;

			// Desenha o retângulo a partir das posições do tracking.
			context.strokeRect(rect.x, rect.y, rect.width, rect.height);

			// Adiciona um texto para o retângulo e sua posição.
			context.fillText(`x: ${rect.x}, w: ${rect.width}`, rect.x + rect.width + 20, rect.y + 20);
			context.fillText(`y: ${rect.y}, w: ${rect.height}`, rect.x + rect.width + 20, rect.y + 40);
		});
	});
}
window.onload = init();
