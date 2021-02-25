import { getGift, insertText, insertImage, addFavourite, getUserSession } from './helpers.js'
/*---------------------- api key ---------------------*/

const API_KEY = 'ge8ywqidok7RY7xe6SAkFnOefCLLxfs1'
const URL_API = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`

/*---------------------- dom references ---------------------*/
const startIcon = document.getElementById('favourite')

window.onload = async () => {
	const button = document.getElementById('button')
	const favouriteButton = document.getElementById('favourite')
	const main = async () => {
		const titleH1 = document.querySelector('.title')

		const mainImage = document.getElementById('mainImage')

		const { title, image_url, id } = await getGift(URL_API)

		insertText(titleH1, title)

		insertImage(mainImage, image_url)

		mainImage.setAttribute('data-id', id)
		startIcon.classList.replace('fas','far')

	}

	button.addEventListener('click', main)

	main()

	favouriteButton.addEventListener('click', (e) => {
		const userSession = getUserSession()
		if (userSession) {
			const giftId = mainImage.getAttribute('data-id')
			startIcon.classList.replace('far','fas')

			addFavourite(giftId)
		} else {
			location.href = 'login.html'
		}
	})
}
