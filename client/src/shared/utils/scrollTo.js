function getElementY (targetElement) {
	return window.pageYOffset + targetElement.getBoundingClientRect().top
}

export function scrollTo (element, duration) {
	const startingY = window.pageYOffset;
	const target = document.getElementById(element);
	const elementY = getElementY(target);
	const diff = elementY - startingY;

	let start;

	window.requestAnimationFrame(function step(timestamp) {
		if (!start) {
			start = timestamp;
		}

		const time = timestamp - start;
		const percent = Math.min(time / duration, 1);

		window.scrollTo(0, startingY + diff * percent);

		if (time < duration) {
			window.requestAnimationFrame(step);
		}
	})
}