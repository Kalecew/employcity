const burger = document.querySelector('#burger')
burger.onmousedown = (e) => {
	console.log(document.activeElement)
	if (document.activeElement == e.target) {
		document.activeElement.blur()
		e.preventDefault()
	}
}