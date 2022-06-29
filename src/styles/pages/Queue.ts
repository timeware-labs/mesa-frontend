import { rgba } from 'polished'
import styled from 'styled-components'

import CustomButton from '@components/Button'

export const Container = styled.div`
	padding: 0 2rem;
	min-height: 100vh;
`

export const Main = styled.main`
	/* padding: 4rem 0; */
	flex: 1;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`

export const Button = styled(CustomButton)`
	padding: 0.5rem 1.25rem;
	color: white;
	background-color: ${({ theme }) => theme.colors.red};
`

export const TableActions = styled.div`
	display: flex;
	align-items: center;
	gap: 0.5rem;

	a {
		max-width: 28px;
		max-height: 28px;
	}
`

export const ModalContent = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1rem;
	width: 43rem;
	position: relative;
	#close-btn {
		display: flex;
		align-items: center;
		justify-content: center;
		align-self: end;
		padding: 0.45rem;
		font-size: 1.1rem;
		border-radius: 4px;
		cursor: pointer;
		background-color: ${({ theme }) => theme.colors.red};
	}
	.datas-container {
		margin-top: 1.5rem;
		width: 100%;
		border: 1px solid ${({ theme }) => theme.colors.text};
		padding: 0.75rem 0.75rem;
		display: flex;
		flex-direction: column;
		gap: 3rem;
		margin-bottom: 3rem;
		border: none;
		> div {
			width: 100%;
			display: flex;
			justify-content: space-between;
			row-gap: 1rem;
			align-items: center;
			flex-wrap: wrap;
			h1 {
				flex: 1 0 100%;
				color: ${({ theme }) => theme.colors.text};
				text-align: center;
				margin: 0;
				text-transform: none;
				margin-bottom: 1rem;
			}
			.data {
				a {
					color: ${({ theme }) => theme.colors.tertiary};
					text-decoration: underline;
				}
				&.data-edit {
					width: 100%;
					.icon {
						cursor: pointer;
						display: flex;
						align-items: center;
						justify-content: center;
						border: 1px solid ${({ theme }) => theme.colors.text};
						padding: 2px 3px;
						border-radius: 50%;
					}
				}
				&.right {
					justify-content: flex-end;
				}
				span {
					font-weight: bold;
				}
				.select-vendedor {
					font-size: 10px;
					padding: 5px;
					> div {
						padding: 5px;
					}
				}
				font-size: ${({ theme }) => theme.fontSizes[16]};
				letter-spacing: ${({ theme }) => theme.fontSpacing.sm};
				color: ${({ theme }) => theme.colors.text};
				width: 50%;
				display: flex;
				text-overflow: ellipsis;
				white-space: nowrap;
				align-items: center;
				gap: 1rem;
			}
		}
	}
	.client-data {
		h1 {
			flex: 1 0 100%;
			font-weight: bold;
			font-size: ${({ theme }) => theme.fontSizes[24]};
			letter-spacing: normal;
			color: ${({ theme }) => theme.colors.text};
			text-align: center;
			padding: 0.5rem 0;
		}
	}
	.history {
		border: 1px solid ${rgba('#8a8a8a', 0.4)};
		border-radius: 5px;
		position: relative;
		max-height: 20rem;
		padding: 0.1rem 0.5rem 0 0.5rem;
		overflow-x: hidden;
		overflow-y: auto;
		legend {
			font-size: ${({ theme }) => theme.fontSizes[16]};
			color: ${({ theme }) => theme.colors.text};
			font-weight: 600;
		}
	}
	.footer-buttons {
		display: flex;
		align-items: center;
		justify-content: flex-end;
		gap: 1rem;
		#wpp-btn {
		}
	}
	h1 span,
	div span {
		font-weight: bold;
		text-transform: none;
	}
	div {
		font-size: 1.1em;
		text-transform: capitalize;
	}
	.history {
		display: flex;
		align-items: center;
		justify-content: space-between;
		flex-wrap: wrap;
		width: 100%;
		flex-direction: column;
		* {
			font-family: 'Open Sans', sans-serif;
		}
		> div {
			font-weight: bold;
			font-size: ${({ theme }) => theme.fontSizes[20]};
			letter-spacing: ${({ theme }) => theme.fontSpacing.sm};
			color: ${({ theme }) => theme.colors.text};
			display: flex;
			align-items: center;
			flex-direction: row;
			flex: 1 0 100%;
			width: 100%;
			justify-content: space-between;
		}
		.MuiTimeline-root {
			.MuiTypography-body1,
			.MuiTypography-h6 {
				color: ${({ theme }) => theme.colors.text};
				letter-spacing: ${({ theme }) => theme.fontSpacing.sm};
			}
			.MuiTypography-h6 {
				font-size: ${({ theme }) => theme.fontSizes[20]};
			}
			.MuiTypography-body1 {
				font-size: ${({ theme }) => theme.fontSizes[16]};
			}
		}
		svg {
			cursor: pointer;
		}
	}
	.infos {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		gap: 1rem;
	}
	.infos-text {
		flex: 1 0 45%;
		max-width: 45%;
		letter-spacing: ${({ theme }) => theme.fontSpacing.md};
		&.right {
			text-align: right;
		}
		&,
		&.status-green span,
		&.status-red span,
		&.status-blue span {
			color: ${({ theme }) => theme.colors.text};
		}
		&.status-green {
			color: ${({ theme }) => theme.colors.main};
		}
		&.status-red {
			color: ${({ theme }) => theme.colors.red};
		}
		&.status-blue {
			color: ${({ theme }) => theme.colors.tertiary};
		}
	}
	> section {
		> div {
			> h1 {
				display: flex;
			}
		}
	}
	.btn-color {
		background-color: ${(props) => props.theme.colors.tertiary};
	}
`

export const DateInputs = styled.div`
	display: flex;
	justify-content: flex-end;
	align-items: center;
	flex-wrap: wrap;
	position: relative;
	.react-datepicker {
		position: absolute;
		left: 31%;
		top: 3rem;
		z-index: 999;
	}
`

export const SelectInput = styled.div`
	display: flex;
	flex-direction: column;
	min-width: 15rem;
	.react-select-container {
		.react-select__control {
			background-color: #f4f2ff;
			border: none !important;
		}
		.react-select__value-container {
			padding: 0.75rem 1rem !important;

			> * {
				margin: 0;
				padding: 0;
			}
		}
		.react-select__placeholder,
		.react-select__input-container {
			font-family: 'Poppins', sans-serif;
			letter-spacing: 0.25px;
			font-weight: 500;
		}
	}
`
