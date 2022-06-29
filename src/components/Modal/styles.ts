import styled, { keyframes } from 'styled-components'

const fadeIn = keyframes`
  from {
    /* animation-timing-function: cubic-bezier(0.2242, 0.7499, 0.3142, 0.8148); */
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`

export const Container = styled.div`
	position: fixed;
	overflow: hidden;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	background-color: rgba(0, 0, 0, 0.65);
	width: 100%;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 1.5em 1em;
	z-index: 99999999999999999999999999;

	animation: ${fadeIn} 0.5s ease-in-out;
	animation-fill-mode: forwards;
	opacity: 0;
`

export const Overlay = styled.div`
	width: 100%;
	height: 100%;
	position: absolute;
	top: 0;
	left: 0;
`

export const ModalBody = styled.div`
	z-index: 2;
	position: relative;
	margin: 0 auto;
	/* background-color: #303030; */
	background-color: white;
	border: 1px solid rgba(255, 255, 255, 0.25);
	border-radius: 3px;
	overflow-x: hidden;
	overflow-y: auto;
	max-height: 100%;
	padding: 15px 20px;
	color: #000;

	/* &::-webkit-scrollbar {
		width: 7px;
	}

	&::-webkit-scrollbar-track {
		background: ${({ theme }) => theme.colors.text};
	} */
`
