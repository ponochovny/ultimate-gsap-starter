// import './style.css'
import gsap from 'gsap'

gsap.to('.box', {
	opacity: 1,
	scale: 1,
	duration: 5,
	onComplete: () => {
		gsap.to('.box', {
			y: -20,
			repeat: -1,
			yoyo: true,
			duration: 0.5,
		})
	},
})
