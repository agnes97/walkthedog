import type { FunctionComponent } from 'preact'
import { Container } from '@material-ui/core'
import { Switch, Route } from 'react-router-dom'
import { Header } from '@components/Header'
import { Walks } from '@components/Walks'

export const App: FunctionComponent = () => (
	<>
		<Header />
		<Container component="section">
			<Switch>
				<Route path="/" component={Walks} />
			</Switch>
		</Container>
	</>
)
