import styled from 'styled-components'

export const Container = styled.div`
	margin-left: 1rem;
	position: relative;
	max-width: 1200px;
	display: block !important;
	padding: 1rem 0;

	::after {
		content: '';
		position: absolute;
		width: 3px;
		background-color: #8e8e8e;
		opacity: 0.3;
		top: 2rem;
		bottom: 2rem;
		left: 1px;
		margin-left: -3px;
	}
`

export const ItemContainer = styled.div`
	padding: 10px 40px;
	position: relative;
	margin-bottom: 3px;

	::after {
		content: '';
		position: absolute;
		width: 12px;
		height: 11px;
		border: 2px solid ${({ theme }) => theme.colors.text};
		background-color: white;
		display: flex;
		top: 15px;
		border-radius: 50%;
		z-index: 1;
		left: -7.4px;
	}

	/* ::before {
		content: ' ';
		height: 4px;
		position: absolute;
		top: 20.5px;
		z-index: 1;
		left: 5px;
		width: 10px;
		background-color: ${({ theme }) => theme.colors.text};
	} */

	.content {
		position: relative;
		width: 100%;
		display: flex;
		justify-content: space-between;
		align-items: center;
		border-bottom: 1px solid #acacac;
		letter-spacing: ${({ theme }) => theme.fontSpacing.md};

		h2,
		span {
			margin: 0;
			font-size: ${({ theme }) => theme.fontSizes[16]};
			font-weight: 500;
		}
	}
`
