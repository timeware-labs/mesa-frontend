import styled from 'styled-components'

interface ContainerProps {
	inverted?: boolean
	pointer?: boolean
	flexDirectionReversed?: boolean
}

export const Container = styled.button<ContainerProps>`
	background-color: ${({ theme, inverted }) =>
		inverted ? 'transparent' : theme.colors.main};
	color: ${({ theme, inverted }) =>
		inverted ? theme.colors.tertiary : theme.colors.secondary};
	border: ${({ theme, inverted }) =>
		inverted ? `1px solid ${theme.colors.tertiary}` : 'none'};
	cursor: ${({ pointer }) => (pointer ? 'pointer' : 'normal')};
	border-radius: 10px;
	padding: 0.4rem 1.25rem;
	font-weight: 400;
	font-size: 14px;
	letter-spacing: 1.25px;

	display: flex;
	align-items: center;
	flex-direction: ${({ flexDirectionReversed }) =>
		flexDirectionReversed ? 'row-reverse' : 'row'};
	gap: 0.5rem;
`
