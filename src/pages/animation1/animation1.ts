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

// repeat: -1, // infinite loop
// yoyo: true, // reverse the animation on every other iteration
// repeatDelay: 1, // delay between repeats
// stagger: 0.1, // delay between each element in a staggered animation
