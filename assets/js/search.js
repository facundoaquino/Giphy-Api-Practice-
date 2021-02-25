/*---------------------- dom references ---------------------*/

import { getGift, insertCards, insertText } from "./helpers.js"

const form = document.querySelector('form')
const mainHtml = document.querySelector('.main')
const title = document.querySelector('.title')

/*---------------------- api key ---------------------*/

const API_KEY = 'ge8ywqidok7RY7xe6SAkFnOefCLLxfs1'

const searchGifts = async () => {
	if (location.search) {
		const query = new URLSearchParams(location.search)

		const keyword = query.get('keyword')
		const limit = query.get('limit')
		const URL_API = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${keyword}&limit=${limit}`

        const gifts = await getGift(URL_API)
		 
        title.innerText= gifts.length != 0 ?  `Resultado de busqueda para : ${keyword}` :`No hemos encontrado gitfs para : ${keyword}`
        insertCards(mainHtml, gifts)
	}
}

form.addEventListener('submit', (e) => {
	// e.preventDefault()
	// const query = new URLSearchParams(location.search)
	// console.log(query.get('keyword'));
	// const {keyword, limit} =
})

searchGifts()
