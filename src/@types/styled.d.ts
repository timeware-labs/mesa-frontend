import 'styled-components'
import theme from '@styles/theme'

declare module 'styled-components' {
	type MyTheme = typeof theme

	// eslint-disable-next-line @typescript-eslint/no-empty-interface
	export interface DefaultTheme extends MyTheme {}
}
