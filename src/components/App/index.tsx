import { FunctionComponent } from 'preact'
import { Container, Typography } from '@material-ui/core'
import { Switch, Route } from 'react-router-dom'

import { Header } from '../Header'

export const App: FunctionComponent = () => (
	<>
		<Header />
		<Container component="section">
			<Switch>
				<Route path="/">
					<Typography variant="h2" align="center">
						Hello World!
					</Typography>
				</Route>
			</Switch>
		</Container>
	</>
)
