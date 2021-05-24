import { FunctionComponent } from 'preact'
import { useState } from 'preact/hooks'
import { Box, Button, styled } from '@material-ui/core'
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline'
import PauseCircleOutlineIcon from '@material-ui/icons/PauseCircleOutline'

import { Walk } from './types'
import { WalkList } from './components/WalkList'

const StyledButton = styled(Button)({
	margin: '1em',
})

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
		<Box display="flex" flexDirection="column" alignItems="center" mb={3}>
			{!currentWalk && (
				<StyledButton
					variant="contained"
					color="primary"
					size="large"
					startIcon={<PlayCircleOutlineIcon />}
					onClick={startWalk}
				>
					Start
				</StyledButton>
			)}
			{currentWalk && (
				<StyledButton
					variant="contained"
					color="secondary"
					size="large"
					startIcon={<PauseCircleOutlineIcon />}
					onClick={stopWalk}
				>
					Stop
				</StyledButton>
			)}
			<WalkList walks={walks} currentWalk={currentWalk} />
		</Box>
	)
}
