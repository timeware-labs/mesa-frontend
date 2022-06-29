import dynamic from 'next/dynamic'

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false })

interface Props {
	series: number[]
	labels: string[]
	colors?: string[]
	width?: string | number
	height?: string | number
	responsive?: ApexResponsive[]
	tooltipFormatter?: (val: number, opts?: any) => string
}

const DonutChart: React.FC<Props> = ({
	series,
	labels,
	width,
	colors,
	height,
	responsive,
	tooltipFormatter,
}) => {
	return (
		<Chart
			type="donut"
			series={series}
			width={width}
			height={height ?? 110}
			options={{
				chart: {
					width,
					fontFamily: 'Poppins',
				},
				labels,
				colors,
				tooltip: {
					y: {
						formatter: tooltipFormatter,
					},
				},
				responsive: responsive ?? [],
			}}
		/>
	)
}

export default DonutChart
