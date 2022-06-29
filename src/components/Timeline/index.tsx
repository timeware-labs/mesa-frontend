import moment from 'moment'
import React from 'react'

import { Container, ItemContainer } from './styles'

interface Props {
	contents: { title: string; date: Date }[]
}

moment.locale('pt-br')

const Timeline: React.FC<Props> = ({ contents }) => {
	return (
		<Container>
			{contents?.map((content, index) => (
				<ItemContainer key={`timeline-${index}`}>
					<div className="content">
						<h2>{content.title}</h2>
						<span>{moment(content.date).format('DD/MM/YYYY HH:mm')}</span>
					</div>
				</ItemContainer>
			))}
		</Container>
	)
}
export default Timeline
