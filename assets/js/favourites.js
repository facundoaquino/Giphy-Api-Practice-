/*---------------------- api key ---------------------*/

import { getFavourites, getGift, getUserSession, insertCards } from './helpers.js'

const API_KEY = 'ge8ywqidok7RY7xe6SAkFnOefCLLxfs1'

const mainHtml = document.querySelector('.main')

window.onload = async () => {

    if(!getUserSession()){
        alert('You must loggin to view yours favourites giphys')
        location.href='/'
    }

	const favourites = getFavourites().join()
     

    if(favourites){
        const URL_API = `https://api.giphy.com/v1/gifs?api_key=${API_KEY}&ids=${favourites}`
        const gifts = await getGift(URL_API)
        insertCards(mainHtml, gifts)

    }else{

        const h1 = `<h1 class="text-center title">Todavia no tenes gifts favoritos</h1>`
        mainHtml.innerHTML=h1
    }

    

	 
}
