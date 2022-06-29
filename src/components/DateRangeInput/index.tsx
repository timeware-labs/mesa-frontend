import pt from 'date-fns/locale/pt-BR'
import moment from 'moment'
import React, { useState } from 'react'
import { DateRangeProps, Range } from 'react-date-range'
import { IoMdCalendar } from 'react-icons/io'
import { useTheme } from 'styled-components'

import { Button, ClearIcon, DateRange, DateRangeContainer } from './styles'

import 'react-date-range/dist/styles.css' // main css file
import 'react-date-range/dist/theme/default.css' // theme css file

interface Props extends DateRangeProps {
	icon?: 'after' | 'before'
	type?: 'start' | 'end'
	onClear?: (resetedRanges: Range[]) => unknown
}

moment.locale('pt-br')

const DateRangeInput: React.FC<Props> = ({ icon, onClear, ...props }) => {
	const { colors } = useTheme()
	const [isOpen, setIsOpen] = useState(false)
	const onClick = (value: boolean) => setIsOpen(value)

	const onClickClear = () => {
		const newRanges = props.ranges?.map((range) => ({
			...range,
			startDate: new Date(),
			endDate: undefined,
		}))

		newRanges && onClear && onClear(newRanges)
	}

	return (
		<>
			<Button
				iconPos={icon}
				iconComponent={icon && <IoMdCalendar size={18} />}
				onClick={() => onClick(!isOpen)}
				withBorderRight={false}
				inverted
				pointer
			>
				{props.ranges && props.ranges[0].startDate
					? moment(props.ranges[0].startDate).format('L')
					: 'Data inicial'}
			</Button>
			<Button withBorderRight onClick={() => onClick(!isOpen)} inverted pointer>
				{props.ranges && props.ranges[0].endDate
					? moment(props.ranges[0].endDate).format('L')
					: 'Data final'}
			</Button>
			{props.ranges?.length &&
				props.ranges[0].startDate &&
				props.ranges[0].endDate && (
					<ClearIcon color={colors.red} size="24px" onClick={onClickClear} />
				)}
			{isOpen && (
				<>
					<DateRangeContainer onClick={() => setIsOpen(false)} />
					<DateRange
						moveRangeOnFirstSelection={false}
						editableDateInputs={true}
						months={2}
						locale={pt}
						direction="horizontal"
						weekdayDisplayFormat="EEEEE"
						{...props}
						onChange={(values) => {
							props.onChange && props.onChange(values)
							!moment(values.selection.startDate).isSame(
								values.selection.endDate
							) && setIsOpen(false)
						}}
					/>
				</>
			)}
		</>
	)
}

export default DateRangeInput
