import gsap from 'gsap'

// Select the main floating action button (FAB) and its child buttons
const fab = document.querySelector('.fab')
const fabChildren = document.querySelectorAll('.fab-child')

// Set how far the children spread out from the center
const spreadDistance = 80

// Track whether menu is expanded or collapsed
let isExpanded = false

fab?.addEventListener('click', () => {
	isExpanded = !isExpanded

	// Toggle button symbol (+ / x)
	fab.textContent = isExpanded ? '×' : '+'

	if (isExpanded) {
		// Define arc of expansion: spread over 90 degrees
		const arcSpan = Math.PI / 1.5 // radians
		const startAngle = Math.PI / 2 + arcSpan / 2 // Start from top center

		fabChildren.forEach((child, index) => {
			const angle = startAngle - index * (arcSpan / (fabChildren.length - 1))

			// Polar to Cartesian conversion for target position
			const x = Math.cos(angle) * spreadDistance
			const y = -Math.sin(angle) * spreadDistance

			// Animation will go here
			gsap.to(child, {
				x,
				y,
				opacity: 1,
				rotate: 360,
				duration: 0.5,
				ease: 'expo.out',
			})
		})
	} else {
		fabChildren.forEach((child) => {
			// Collapse animation will go here
			gsap.to(child, {
				x: 0,
				y: 0,
				opacity: 0,
				rotate: 0,
				duration: 0.3,
				ease: 'power1.in',
				pointerEvents: 'none', // Disable interaction when collapsed
			})
		})
	}
})
