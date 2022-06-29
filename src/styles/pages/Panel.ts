import styled from 'styled-components'

interface StatusProps {
	status: 'positive' | 'negative'
}

export const Container = styled.div`
	min-height: 100vh;
`

export const Main = styled.main`
	/* padding: 2rem; */

	background-color: transparent;

	flex: 1;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`

export const FiltersContainer = styled.div`
	width: 100%;

	display: flex;
	align-items: flex-start;
	gap: 4%;
	margin-bottom: 2rem;

	> div {
		flex: 3 0 63%;
	}

	> section:first-child {
		flex: 1 0 33%;
	}
`

export const Status = styled.div<StatusProps>`
	display: flex;
	flex-direction: column;
	align-items: flex-start;

	&::before {
		content: ${({ status }) =>
			status === 'positive' ? '"⬤ Positivo"' : '"⬤ Negativo"'};
		padding: 2px 5px;
		font-weight: 500;
		color: ${({ status }) => (status === 'positive' ? '#007f00' : '#FF0000')};
		background-color: ${({ status }) =>
			status === 'positive' ? '#cdffcd' : 'rgba(255, 0, 0, 0.31)'};
		border-radius: 10px;
		display: block;
	}
`

export const DateButton = styled.div`
	display: flex;
	padding: 0.5rem;
	border: 1px solid #ccc;
	border-radius: 5px;
	overflow: hidden;

	> button {
		display: flex;
		cursor: pointer;
		align-items: center;
		justify-content: center;
		flex: 1;
		border: none;
		background: transparent;

		> svg {
			margin-right: 0.6rem;
		}
	}

	.line {
		height: 2rem;
		width: 2px;
		background-color: #ccc;
		margin: 0 1rem;
	}

	.overflow {
		z-index: 98;
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background-color: transparent;
	}

	.calendar-wrapper {
		position: absolute;
		top: 100%;
		left: 0;
		right: 0;
		z-index: 99;
	}
`
