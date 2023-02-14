const jokeButton = document.querySelector('.getJoke');
const jokeHolder = document.querySelector('.joke');
const loader = document.querySelector('.loader');
const jokeButtonSpan = jokeButton.querySelector('.jokeText');

const buttonText = [
	'Ugh.',
	'🤦🏻‍♂️',
	'omg dad.',
	'you are the worst',
	'seriously',
	'stop it.',
	'please stop',
	'that was the worst one',
];

function randomTextGenerator(arr, not) {
	const item = arr[Math.floor(Math.random() * arr.length)];
	if (item == not) {
		return randomTextGenerator(arr, not);
	} else return item;
}

randomTextGenerator(buttonText);

async function fetchJoke() {
	loader.classList.remove('hidden');
	const res = await fetch('https://icanhazdadjoke.com', {
		headers: {
			Accept: 'application/json',
		},
	});
	const data = await res.json();
	loader.classList.add('hidden');

	return data;
}

async function handleClick() {
	const { joke } = await fetchJoke();
	jokeHolder.textContent = joke;
	jokeButtonSpan.textContent = randomTextGenerator(
		buttonText,
		jokeButtonSpan.textContent
	);
}

jokeButton.addEventListener('click', handleClick);
