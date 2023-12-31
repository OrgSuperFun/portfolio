const observer = new IntersectionObserver((entries) => {
	entries.forEach((entry) => {
		if (entry.isIntersecting) {
			entry.target.classList.add('show-element')
		} else {
			entry.target.classList.remove('show-element')
		}
	})
})

const sections = document.querySelectorAll('.section-timeline-hidden')

sections.forEach((section) => {
	observer.observe(section)
})

let timelineHeight = getComputedStyle(
	document.documentElement
).getPropertyValue('--timeline-height')

window.addEventListener('scroll', () => {
	// get the total height of the page
	const scrollHeight = document.documentElement.scrollHeight
	// get the scroll position
	const scrollPosition = window.scrollY

	// get the height of the window
	const windowHeight = window.innerHeight

	const scrollPercentage =
		(scrollPosition / (scrollHeight - windowHeight)) * 100

	document.documentElement.style.setProperty(
		'--timeline-height',
		`${scrollPercentage}dvh`
	)
})

let contactForm = document.getElementById('contact-form')

contactForm.addEventListener('submit', (e) => {
	e.preventDefault()
	const name = document.getElementById('name').value
	const email = document.getElementById('email').value
	const message = document.getElementById('message').value
	const submitButton = document.getElementById('submit-button')

	if (name && email && message) {
		submitButton.innerText = 'Sending...'
		setTimeout(() => {
			window.location.href = `/pages/sucess.html`
		}, 2000)
	}
})
