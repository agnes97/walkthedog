import { FunctionComponent } from 'preact'
import { useState } from 'preact/hooks'
import { Box } from '@material-ui/core'

import { Walk } from './types'
import { WalkControl } from './components/WalkControl'
import { WalkList } from './components/WalkList'

export const Walks: FunctionComponent = () => {
	const [walks, setWalks] = useState<Walk[]>([])
	const [currentWalk, setCurrentWalk] = useState<Walk | null>(null)

	const startWalk = () => {
		setCurrentWalk({
			startedAt: new Date(),
			endedAt: null,
			walker: 'XXX',
		})
	}

	const stopWalk = () => {
		if (currentWalk) {
			const newWalk = {
				...currentWalk,
				endedAt: new Date(),
			}
			setWalks([newWalk, ...walks])
			setCurrentWalk(null)
		}
	}

	return (
		<Box display="flex" flexDirection="column" mb={3}>
			<WalkControl
				walk={currentWalk}
				onWalkStart={startWalk}
				onWalkStop={stopWalk}
			/>
			<WalkList walks={walks} currentWalk={currentWalk} />
		</Box>
	)
}
