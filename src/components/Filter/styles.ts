import styled from 'styled-components'

import ButtonComponent from '../Button'

interface ContainerProps {
	maxHeight?: number
}

export const Container = styled.form<ContainerProps>`
	background: ${({ theme }) => theme.colors.white};
	padding: 2rem;

	border-radius: ${({ theme }) => theme.borderRadius.sm};
	box-shadow: 5px 5px 15px 2px rgba(0, 0, 0, 0.15);

	max-height: ${({ maxHeight }) => maxHeight ?? 500}px;
`

export const Title = styled.div`
	display: flex;
	align-items: center;
	color: rgba(6, 41, 88, 0.6);

	h1 {
		margin: 0 0 0 0.6rem;
		font-weight: 600;
	}
`

export const InputWrapper = styled.div`
	display: flex;
	flex-direction: column;
	margin: 2vh 0;

	> div {
		margin: 2vh 0;
	}
`

export const Button = styled(ButtonComponent)`
	padding: 0.75rem 1.5rem;
	font-family: 'Inter';
	font-weight: 600;
	font-size: 16px;
	text-transform: uppercase;
	color: ${({ theme }) => theme.colors.white};
	background-color: #2ea24c;
	cursor: pointer;
`
