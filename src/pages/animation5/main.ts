import gsap from 'gsap'

// Select the repeat button
const repeatButton = document.querySelector('.repeat') as HTMLButtonElement

// Sample data for each day of the week
const data = [
	{ label: 'Mon', value: 80 },
	{ label: 'Tue', value: 60 },
	{ label: 'Wed', value: 100 },
	{ label: 'Thu', value: 70 },
	{ label: 'Fri', value: 90 },
	{ label: 'Sat', value: 50 },
	{ label: 'Sun', value: 65 },
]

// Get reference to the chart container
const chart = document.getElementById('chart') as HTMLDivElement

// Calculate layout constants
const chartHeight = chart.clientHeight
const barWidth = 50
const spacing = 25
const maxValue = Math.max(...data.map((d) => d.value))

// Render the bar chart
function renderChart() {
	data.forEach((item, i) => {
		// Create wrapper for each bar and label
		const barWrapper = document.createElement('div')
		barWrapper.className = 'bar-wrapper'
		barWrapper.style.left = `${i * (barWidth + spacing) + 50}px`
		barWrapper.style.width = `${barWidth}px`

		// Create the bar element
		const bar = document.createElement('div')
		bar.className = 'bar'
		bar.style.height = `${(item.value / maxValue) * (chartHeight - 60)}px`

		// Create the label element
		const label = document.createElement('div')
		label.className = 'label'
		label.textContent = item.label

		// Append bar and label to the wrapper, then to the chart
		barWrapper.appendChild(bar)
		barWrapper.appendChild(label)
		chart.appendChild(barWrapper)

		// Animate the bar using GSAP
		gsap.to(bar, {
			scaleY: 1,
			duration: 2,
			ease: 'elastic.out(1, 1.25)',
			delay: i * 0.1,
		})
	})
}

// Clear chart and re-render on reapt button click
repeatButton.addEventListener('click', () => {
	chart.innerHTML = ''
	renderChart()
})

// Initial render
renderChart()
