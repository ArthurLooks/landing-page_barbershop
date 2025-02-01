// Menu mobile
const menuBtn = document.querySelector('.header__menu-btn')
const menuNav = document.querySelector('.header__nav')
const menuLinks = document.querySelectorAll('.header__nav-link')

function toggleMenu() {
	menuNav.classList.toggle('active')
}

menuBtn.addEventListener('click', toggleMenu)

menuLinks.forEach((link) => {
	link.addEventListener('click', () => {
		menuNav.classList.remove('active')
	})
})


// Efeito do Header no Scroll
const header = document.querySelector('.header')

function handleScroll() {
	const scrollPosition = window.scrollY
	header.classList.toggle('scrolled', scrollPosition > 0)
}

window.addEventListener('scroll', handleScroll)


// Formulário de agendamento
const appointmentForm = document.querySelector('.appointment__form')
if (appointmentForm) {
	appointmentForm.addEventListener('submit', (e) => {
		e.preventDefault()

		// Aqui você pode adicionar a lógica para enviar os dados do formulário
		const formData = new FormData(appointmentForm)
		const appointmentData = Object.fromEntries(formData)

		// Por enquanto, apenas mostra os dados no console
		console.log('Dados do agendamento:', appointmentData)

		// Feedback visual para o usuário
		alert('Agendamento recebido! Entraremos em contato em breve.')
		appointmentForm.reset()
	})
}

// Animação de entrada dos elementos
const observerOptions = {
	threshold: 0.1,
}

const observer = new IntersectionObserver((entries) => {
	entries.forEach((entry) => {
		if (entry.isIntersecting) {
			entry.target.classList.add('animate-in')
			observer.unobserve(entry.target)
		}
	})
}, observerOptions)

// Elementos para animar
const animateElements = document.querySelectorAll(
	'.service__card, .pricing__item, .about__image, .contact__item'
)

animateElements.forEach((element) => {
	element.classList.add('animate-element')
	observer.observe(element)
})

// Form Submission
const contactForm = document.querySelector('.contact__form')
const footerForm = document.querySelector('.footer__form')

function handleFormSubmit(e) {
	e.preventDefault()
	const formData = new FormData(e.target)
	const data = Object.fromEntries(formData)

	// Aqui você pode adicionar a lógica para enviar os dados para seu backend
	console.log('Dados do formulário:', data)

	// Exemplo de feedback visual
	const submitBtn = e.target.querySelector('button[type="submit"]')
	const originalText = submitBtn.textContent
	submitBtn.textContent = 'Enviado!'
	submitBtn.style.backgroundColor = 'var(--color-primary-light)'

	setTimeout(() => {
		submitBtn.textContent = originalText
		submitBtn.style.backgroundColor = ''
		e.target.reset()
	}, 2000)
}

if (contactForm) {
	contactForm.addEventListener('submit', handleFormSubmit)
}

if (footerForm) {
	footerForm.addEventListener('submit', handleFormSubmit)
}

// Scroll Reveal Animation
const revealElements = document.querySelectorAll(
	'.service__card, .pricing__item'
)

function revealOnScroll() {
	revealElements.forEach((element) => {
		const elementTop = element.getBoundingClientRect().top
		const windowHeight = window.innerHeight

		if (elementTop < windowHeight - 100) {
			element.style.opacity = '1'
			element.style.transform = 'translateY(0)'
		}
	})
}

revealElements.forEach((element) => {
	element.style.opacity = '0'
	element.style.transform = 'translateY(20px)'
	element.style.transition = 'all 0.6s ease'
})

window.addEventListener('scroll', revealOnScroll)
window.addEventListener('load', revealOnScroll)