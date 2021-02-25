const getGift = async (url) => {
	const response = await fetch(url)

	// console.log(response);
	const { data } = await response.json()
	// console.log(data);
	return data
}

const insertText = (element, text) => {
	element.innerText = text
}

const insertImage = (element, src) => {
	element.setAttribute('src', src)
}

const card = ({ title, images }) =>
	`<div class="card m-1" style="width: 15rem;">
<img src=${images.original.url} class="card-img-top" alt="...">
<div class="card-body">
  <h5 class="card-title">Gift title</h5>
  <p class="card-text">${title}</p>
   
</div>
</div>`

const insertCards = (element, gifts) => {
	gifts.forEach((gift) => {
		element.insertAdjacentHTML('beforeend', card(gift))
	})
}

const getFavourites = () => {
	const session = localStorage.getItem('favourites')
	if (!session) {
		localStorage.setItem('favourites', JSON.stringify([]))
	}

	return JSON.parse(localStorage.getItem('favourites'))
}

const addFavourite = (id) => {
	const favourites = getFavourites()

	localStorage.setItem('favourites', JSON.stringify([...favourites, id]))
}

const setUserSession = (user) => {
	sessionStorage.setItem('user', JSON.stringify(user))
}

const getUserSession = ()=> sessionStorage.getItem('user')

export { getGift, insertText, insertImage, insertCards, getFavourites, addFavourite, setUserSession, getUserSession }
