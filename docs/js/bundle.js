//set header text

const frontendDeveloper = document.querySelector(
	'.main-header__text__profession'
);

frontendDeveloper.textContent = '<Frontend developer />';

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

// Show/hide video modal
// const modal = document.querySelector('.modal');
// const video = document.querySelector('.modal__video');
// frontendDeveloper.addEventListener('click', showModal);

// function showModal() {
// 	modal.style.display = 'flex';
// 	modal.addEventListener('click', hideModal);
// }

// function hideModal() {
// 	modal.style.display = 'none';
// 	player.stopVideo();
// }

//create video (YT API)
// const tag = document.createElement('script');

// tag.src = 'https://www.youtube.com/iframe_api';
// const firstScriptTag = document.getElementsByTagName('script')[0];
// firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// // 3. This function creates an <iframe> (and YouTube player)
// //    after the API code downloads.
// let player;
// function onYouTubeIframeAPIReady() {
// 	player = new YT.Player('player', {
// 		height: '390',
// 		width: '640',
// 		videoId: 'vZfr0G4BdD0',
// 		events: {
// 			onReady: onPlayerReady
// 		}
// 	});
// }

// // 4. The API will call this function when the video player is ready.
// function onPlayerReady(event) {
// 	event.target.playVideo();
// }
