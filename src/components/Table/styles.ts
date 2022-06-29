import styled from 'styled-components'

export const Container = styled.div`
	width: 100%;
	background-color: ${({ theme }) => theme.colors.white};
	border-radius: ${({ theme }) => theme.borderRadius.sm};

	header {
		width: 100%;
		padding: 1rem 1.3rem 0 1.3rem;
		margin-bottom: 1rem;

		display: flex;
		align-items: center !important;
		justify-content: space-between !important;

		&.row {
			flex-direction: row;
		}

		&.column {
			flex-direction: column;
		}

		.search-input {
			position: relative;
			background-color: #f4f2ff;
			width: 30%;

			input {
				font-weight: 600;
				padding: 0.75rem 1rem 0.75rem 2.75rem;
				border-radius: 6px;
				background: transparent;
				border: none;
				width: 100%;
				letter-spacing: 0.5px;

				&::placeholder {
					color: rgba(0, 0, 0, 0.45);
				}
			}

			svg {
				position: absolute;
				left: 1rem;
				cursor: pointer;
				top: 50%;
				width: 20px;
				height: 20px;
				transform: translateY(-50%);
			}
		}
	}

	.gridjs-container {
		padding: 0;
	}

	.table {
		width: 100%;
		background: transparent;

		.gridjs-wrapper {
			border-radius: none !important;
			border-radius: 0;
		}

		tbody,
		td {
			background: transparent;
		}

		.button {
			width: 2rem;
			background: transparent;
			border: 0;
		}
	}

	.th {
		background: #f4f2ff;
		border: none;

		padding: 1.15rem inherit;
		border-top: 1px solid #d9d5ec !important;
		border-bottom: 1px solid #d9d5ec !important;

		.gridjs-th-content {
			color: #6e6893;
			font-weight: 600;
			font-size: 12px;
			text-transform: uppercase;
			font-family: 'Inter';
		}
	}

	.td {
		border: none;
		border-bottom: 1px solid #d9d5ec !important;
		padding: 1rem inherit;

		color: #25213b;
		font-weight: 500;
		font-size: 14px;

		svg {
			cursor: pointer;
		}
	}

	.pagination,
	.pagination button {
		color: #6e6893;
	}

	.status-green {
		color: ${({ theme }) => theme.colors.main};
	}

	.status-red {
		color: ${({ theme }) => theme.colors.red};
	}

	.status-blue {
		color: ${({ theme }) => theme.colors.tertiary};
	}

	*::-webkit-scrollbar {
		width: 4px;
	}

	*::-webkit-scrollbar-thumb {
		background: ${({ theme }) => theme.colors.lightGray};
	}
`

export const FooterTable = styled.div`
	width: 100%;

	display: flex;
	align-items: center;
	justify-content: space-between;
	flex-direction: row-reverse;
`
