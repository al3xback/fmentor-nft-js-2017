const cardEl = document.querySelector('.card');

/* String padStart() and padEnd() */
const dummyTitleId = '3';

let titleId = +dummyTitleId.padEnd(4, '0') + 429;
titleId = titleId.toString().padStart(5, '#');

const cardTitleIdEl = cardEl.querySelector('.card__title .id');
cardTitleIdEl.textContent = titleId;

/* async await */
async function setDescription() {
	const promise = Promise.resolve(
		'Our Equilibrium collection promotes balance and calm.'
	);
	const description = await promise;

	const cardDescriptionEl = cardEl.querySelector('.card__desc');
	cardDescriptionEl.textContent = description;
}

setDescription();

/* Object entries() */
const statusItems = {
	ethereumAmount: '0.041 ETH',
	remainingTime: '3 days left',
};

const cardStatusItemEls = cardEl.querySelectorAll('.card__stats-list-item');

Object.entries(statusItems).forEach(([name, value], i) => {
	cardStatusItemEls[i].querySelector('span').textContent = value;
});

/* Object values() */
const author = {
	name: 'Jules Wyvern',
	image: 'avatar.png',
};
const [authorName, authorImage] = Object.values(author);

const cardAuthorEl = cardEl.querySelector('.card__author');

const cardAuthorImageEl = cardAuthorEl.querySelector('.card__author-img');
cardAuthorImageEl.src = './images/' + authorImage;
cardAuthorImageEl.alt = authorName;

const cardAuthorNameEl = cardAuthorEl.querySelector('.card__author-desc a');
cardAuthorNameEl.textContent = authorName;
