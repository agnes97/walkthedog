import { FunctionComponent } from 'preact'
import { useState } from 'preact/hooks'
import { Box } from '@material-ui/core'

import { Walk } from './types'
import { WalkControl } from './components/WalkControl'
import { WalkList } from './components/WalkList'

export const Walks: FunctionComponent = () => {
	const [currentWalk, setCurrentWalk] = useState<Walk | null>(null)
	const [walks, setWalks] = useState<Walk[]>([])

	const startWalk = () => {
		setCurrentWalk({
			startedAt: new Date(),
			endedAt: null,
			walker: 'XXX',
			walkActions: {
				pee: false,
				poop: false,
				food: false,
				pills: false,
			},
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
				onWalkChange={(walk) => setCurrentWalk(walk)}
			/>
			<WalkList walks={walks} currentWalk={currentWalk} />
		</Box>
	)
}
