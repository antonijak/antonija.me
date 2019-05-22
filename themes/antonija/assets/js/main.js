//set header text

const headerText = document.querySelector('.main-header__text__profession');

headerText.textContent = '<Frontend developer />';

// Copy email to clipboard

const email = document.querySelector('.contact__text__email');

function copyToClipboard() {
	const contactText = document.querySelector('.contact__text');
	const input = document.createElement('input');

	contactText.appendChild(input);
	input.setAttribute('class', 'contact__text__copy');
	input.value = 'hello@antonijakasum.com';

	input.select();
	document.execCommand('copy');
	email.setAttribute('class', 'copied');
	contactText.removeChild(input);
	email.addEventListener('mouseout', changeBack);
}

function changeBack() {
	email.setAttribute('class', 'contact__text__email');
}

email.addEventListener('click', copyToClipboard);
