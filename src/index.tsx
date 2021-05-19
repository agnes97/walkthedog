import '@fontsource/roboto'
import { render } from 'preact'
import { CssBaseline, ThemeProvider } from '@material-ui/core'

import { darkTheme } from './theme'
import { App } from './components/App'

render(
	<ThemeProvider theme={darkTheme}>
		<CssBaseline />
		<App />
	</ThemeProvider>,
	// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
	document.getElementById('app')!
)
