// const refTextBlock = useRef()
// const refScrollbox = useRef()
// const textBlock = refTextBlock.current
// const scrollbox = refScrollbox.current
// const heightTrack = scrollbox.parentElement.clientHeight
// const heightThumb = scrollbox.offsetHeight
// const maxScrollTopTextBlock = textBlock.scrollHeight - textBlock.offsetHeight
// const maxScrollboxTop = heightTrack - heightThumb
// let yDown = null
// const handleTouchStartScrollbar = (e) => {
// 	yDown = +e.changedTouches[0].clientY
// }
// const handleTouchMoveScrollbar = (e) => {
// 	const yUp = +e.changedTouches[0].clientY
// 	const yDiff = yUp - yDown
// 	if ((yDiff >= 0) && ((yDiff + heightThumb) <= heightTrack)) {
// 		scrollbox.style.top = `${yDiff} px`
// 		const percentScroll = yDiff / heightTrack
// 		textBlock.scrollTop = maxScrollTopTextBlock * percentScroll
// 	}
// }
// const handleTouchStartTextblock = (e) => {
// 	yDown = +e.changedTouches[0].clientY
// }
// const handleTouchMoveTextblock = () => {
// 	const percentScroll = textBlock.scrollTop / maxScrollTopTextBlock
// 	scrollbox.style.top = `${maxScrollboxTop * percentScroll} px`
// }

const thumb = document.querySelector('#thumb')
const range = document.querySelector('#range')
const rangeValue = document.querySelector('#range-value')
let xDown = null
let xStart = null
const initialThumb = () => {
	const thumbWidth = thumb.offsetWidth
	const rangeWidth = range.clientWidth - thumbWidth
	const initValue = parseInt(rangeValue.value) / 100
	const xDiff = rangeWidth * initValue
	const shift = xDiff - thumbWidth
	thumb.style.left = `${shift}px`
}
const handleTouchStartThumb = (e) => {
	xDown = +e.changedTouches[0].clientX
	xStart = parseInt(thumb.style.left)
}
const handleTouchMoveThumb = (e) => {
	const thumbWidth = thumb.offsetWidth
	const rangeWidth = range.clientWidth - thumbWidth
	const xUp = +e.changedTouches[0].clientX	
	const xDiff = xUp - xDown
	const left = xStart + xDiff
	if (left >= 0 && left <= rangeWidth){		
		thumb.style.left = `${left}px`
		const percent = Math.round(left / rangeWidth * 100)
		rangeValue.value = `${percent}%`
	}	
}
thumb.onmousedown = (e) => {
	xDown = +e.pageX
	xStart = parseInt(thumb.style.left)
	document.onmousemove = (e) => {
		const thumbWidth = thumb.offsetWidth
		const rangeWidth = range.clientWidth - thumbWidth
		const xUp = +e.pageX	
		const xDiff = xUp - xDown
		const left = xStart + xDiff
		if (left >= 0 && left <= rangeWidth){		
			thumb.style.left = `${left}px`
			const percent = Math.round(left / rangeWidth * 100)
			rangeValue.value = `${percent}%`
		}	
	}
	document.onmouseup = function() {
		document.onmousemove = null;
		document.onmouseup = null;
	}
}
thumb.addEventListener('touchstart', handleTouchStartThumb)
thumb.addEventListener('touchmove', handleTouchMoveThumb)
thumb.ondragstart = () => {return false}
initialThumb()