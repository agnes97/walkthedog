import { FunctionComponent } from 'preact'

import { Logo } from '../Logo'

export const App: FunctionComponent = () => (
	<>
		<Logo />
		<p>Hello Vite + Preact!</p>
		<p>
			<a
				className="link"
				href="https://preactjs.com/"
				target="_blank"
				rel="noopener noreferrer"
			>
				Learn Preact
			</a>
		</p>
	</>
)
