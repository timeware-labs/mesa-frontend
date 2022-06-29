/* eslint-disable @typescript-eslint/ban-ts-comment */
import FilterIcon from '@assets/filter-search.svg'

import { Container, Button, Title, InputWrapper } from './styles'

import 'react-date-range/dist/styles.css' // main style file
import 'react-date-range/dist/theme/default.css' // theme css file
import type { FormEvent } from 'react'

interface Props {
	maxHeight?: number
	onFilterSubmit?: (e: FormEvent) => void
}

const Filter: React.FC<Props> = ({ children, maxHeight, onFilterSubmit }) => {
	return (
		// @ts-ignore
		<Container maxHeight={maxHeight} onSubmit={onFilterSubmit}>
			<Title>
				<FilterIcon />
				<h1>Filtros</h1>
			</Title>

			<InputWrapper>{children}</InputWrapper>

			<Button>Aplicar Filtros</Button>
		</Container>
	)
}

export default Filter
