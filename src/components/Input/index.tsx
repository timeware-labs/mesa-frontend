import { ReactNode } from 'react'

import { Container, Label, Content } from './styles'

interface InputProps {
	children: ReactNode
	label: string
}

const Input = ({ children, label }: Partial<InputProps>) => {
	return (
		<Container>
			<Label>{label}</Label>
			<Content>{children}</Content>
		</Container>
	)
}

export default Input
