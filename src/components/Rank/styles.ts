import { rgba } from 'polished'
import styled from 'styled-components'

export const Container = styled.div`
	display: flex;
	flex-direction: column;

	padding: 1.5rem 2rem;
	gap: 2rem;
	background-color: ${({ theme }) => theme.colors.white};
	width: 100%;
	border-radius: ${({ theme }) => theme.borderRadius.sm};
	box-shadow: 5px 5px 15px 2px rgba(0, 0, 0, 0.15);

	header {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		width: 100%;

		font-size: 1.5rem;
		font-weight: 600;

		span {
			color: ${({ theme }) => rgba(theme.colors.text, 0.6)};
		}
	}

	.donut-wrapper2 {
		width: 100%;

		display: flex;
		/* flex-wrap: wrap; */
		flex-direction: column;
		/* align-items: center; */

		/* height: 600px; */

		gap: 4rem;

		> div {
			display: flex;
			flex-wrap: wrap;
		}

		ul li {
			color: ${({ theme }) => theme.colors.text};
			margin-bottom: 1.25rem;
		}
	}

	.donut-wrapper {
		width: 100%;

		display: flex;
		align-items: center;
		height: 300px;
		gap: 4rem;

		ul li {
			color: ${({ theme }) => theme.colors.text};
			margin-bottom: 1.25rem;
		}
	}
`
