import Image from 'next/image'

import { Container } from './styles'

const Header: React.FC = () => {
	return (
		<Container>
			<div className="logo">
				<Image layout="fill" alt="Logo Cred Fácil" src="/logo.png" />
			</div>
		</Container>
	)
}

export default Header
