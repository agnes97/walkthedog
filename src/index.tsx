import '@fontsource/roboto'
import { render } from 'preact'
import { CssBaseline, ThemeProvider } from '@material-ui/core'
import { BrowserRouter as Router } from 'react-router-dom'
import { App } from '@components/App'

import { darkTheme } from './theme'

render(
	<ThemeProvider theme={darkTheme}>
		<CssBaseline />
		<Router>
			<App />
		</Router>
	</ThemeProvider>,
	// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
	document.getElementById('app')!
)
