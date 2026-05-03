import gsap from 'gsap'

const bars = document.querySelectorAll('.bar') as NodeListOf<HTMLDivElement>

bars.forEach((bar, index) => {
	gsap.fromTo(
		bar,
		{
			scaleY: 0.4,
		},
		{
			scaleY: 1.6,
			duration: 0.5,
			ease: 'sine.inOut',
			repeat: -1,
			yoyo: true,
			delay: index * 0.1,
		},
	)
})
