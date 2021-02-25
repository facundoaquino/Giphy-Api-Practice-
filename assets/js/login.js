import { setUserSession } from './helpers.js'

const form = document.querySelector('form')

form.addEventListener('submit', (e) => {
	e.preventDefault()

	const username = form.elements.username.value

	if (username.trim().length > 3) {
		setUserSession(username)
		location.href = '/'
	} else {
		const p = form.querySelector('p')
		 
		!p
			? form.insertAdjacentHTML('beforeend', '<p class=mt-2 >El username tiene que tener mas de 3 caracteres</p>')
			: null
	}
})
