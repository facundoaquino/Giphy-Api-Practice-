/*---------------------- prompt ---------------------*/

import { getGift, insertCards } from './helpers.js'

const limit = prompt('Limite de gifts ?')

/*---------------------- api key ---------------------*/

const API_KEY = 'ge8ywqidok7RY7xe6SAkFnOefCLLxfs1'
const URL_API = `https://api.giphy.com/v1/gifs/trending?api_key=${API_KEY}&limit=${limit}`

/*---------------------- dom references ---------------------*/

const mainHtml = document.querySelector('.main')

const main = async () => {
	const data = await getGift(URL_API)
	console.log(data)
	await insertCards(mainHtml, data)
}

main()
