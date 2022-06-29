import { DateRange as DateRangeComponent } from 'react-date-range'
import { MdOutlineClear } from 'react-icons/md'
import styled, { css } from 'styled-components'

import ButtonComponent from '../Button'

interface ButtonProps {
	withBorderRight?: boolean
}

export const Button = styled(ButtonComponent)<ButtonProps>`
	padding: 0.5rem;
	border: 1px solid #ccc;
	overflow: hidden;

	border-radius: 0;
	min-width: 9rem;
	display: flex;
	align-items: center;
	justify-content: center;
	color: #06295899;

	${({ withBorderRight }) =>
		!withBorderRight
			? css`
					border-right: none;
					border-top-left-radius: 5px;
					border-bottom-left-radius: 5px;
			  `
			: css`
					border-top-right-radius: 5px;
					border-bottom-right-radius: 5px;
			  `};
`

export const DateRangeContainer = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100vw;
	height: 100vh;
	background-color: transparent;
	z-index: 999;
`

export const DateRange = styled(DateRangeComponent)`
	position: absolute;
	z-index: 1000;
	top: 2.8rem;
`

export const ClearIcon = styled(MdOutlineClear)`
	margin-left: 6px;
	cursor: pointer;
`
