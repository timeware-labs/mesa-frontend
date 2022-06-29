import moment from 'moment'
import React, { forwardRef } from 'react'

import { Container } from './styles'

import 'moment/locale/pt-br'

moment().locale('pt-br')

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	inverted?: boolean
	pointer?: boolean
	children?: React.ReactNode
	iconComponent?: React.ReactNode
	iconPos?: 'after' | 'before'
}

const Button: React.ForwardRefRenderFunction<HTMLButtonElement, Props> = (
	{
		children,
		inverted,
		pointer,
		onClick,
		className,
		iconComponent,
		iconPos = 'before',
	},
	ref
) => {
	return (
		<Container
			ref={ref}
			onClick={onClick}
			className={className}
			inverted={inverted}
			pointer={pointer}
			flexDirectionReversed={iconPos === 'after'}
		>
			{iconComponent}
			{children}
		</Container>
	)
}

export default forwardRef(Button)
