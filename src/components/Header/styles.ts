import styled from 'styled-components'

export const Container = styled.header`
	position: sticky;
	top: 0;
	left: 0;
	right: 0;
	width: 100%;
	height: 8.5vh;
	z-index: 99999999;

	padding: 0.625rem 2.8rem;
	display: flex;
	align-items: center;

	background-color: ${({ theme }) => theme.colors.white};

	.logo {
		width: 113px;
		height: 100%;
		position: relative;
	}
`
