import { Grid } from 'gridjs-react'
import { RowSelection } from 'gridjs/plugins/selection/dist'
import React, { useEffect, useRef, useState } from 'react'
// import Select from 'react-select'

import SearchIcon from '@assets/search-icon.svg'

import { Container } from './styles'

import 'gridjs/dist/theme/mermaid.min.css'

const Table = <T,>({
	onSearchChange,
	data,
	columns,
	headerDirection,
	searchEnabled,
	...props
}: GlobalInterfaces.TableProps<T>) => {
	const [, setSelectedRows] = useState<string[]>([])
	const grid = useRef<Grid>(null)
	const searchRef = useRef<HTMLInputElement>(null)
	const language = Object.assign(
		{
			search: {
				placeholder: '🔍 Pesquisar...',
			},
			pagination: {
				previous: 'Voltar',
				next: 'Avançar',
				showing: 'Exibindo',
				results: () => 'Registros',
				of: 'de',
				to: 'a',
			},
			noRecordsFound: 'Nenhum resultado encontrado',
		},
		props.language
	)

	useEffect(() => {
		const gridInstance = grid.current?.getInstance()

		gridInstance?.on('ready', () => {
			// find the plugin with the give plugin ID
			const checkboxPlugin =
				gridInstance?.config.plugin.get<RowSelection>('select')

			checkboxPlugin?.props?.store?.on('updated', (newState) => {
				setSelectedRows(newState.rowIds)
			})
		})
	}, [])

	return (
		<>
			<Container className="table-container">
				{(props.headerComponent || searchEnabled) && (
					<header className={headerDirection}>
						{searchEnabled && (
							<>
								<div className="search-input">
									<input
										onChange={(e) =>
											onSearchChange && onSearchChange(e.target.value)
										}
										ref={searchRef}
										placeholder="Vendedor, cliente ou telefone"
										type="text"
									/>
									<SearchIcon />
								</div>
							</>
						)}
						{props.headerComponent && props.headerComponent}
					</header>
				)}
				<Grid
					ref={grid}
					data={data}
					columns={columns}
					pagination={{
						enabled: false,
						limit: 10,
						...props.pagination,
					}}
					className={{
						td: 'td',
						th: 'th',
						table: 'table',
						footer: 'footer',
						search: 'search',
						pagination: 'pagination',
					}}
					language={language}
					resizable
					sort={false}
					search={false}
					fixedHeader={props?.fixedHeader}
					{...props}
				/>
			</Container>
		</>
	)
}

export default Table
