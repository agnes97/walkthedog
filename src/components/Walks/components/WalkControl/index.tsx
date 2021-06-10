import type { FunctionComponent } from 'preact'
import { useEffect, useState } from 'preact/hooks'
import { Box, Button, Paper, styled, Typography } from '@material-ui/core'
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline'
import PauseCircleOutlineIcon from '@material-ui/icons/PauseCircleOutline'

import { TimeUnit, toTimeFromNow } from '../../../../utils/time'
import type { Time } from '../../../../utils/time/types'
import type { Walk } from '../../types'
import { WalkActions } from '../WalkActions'

const StyledButton = styled(Button)(({ theme }) => ({
	padding: theme.spacing(6),
}))

const StyledPaper = styled(Paper)(({ theme }) => ({
	flexGrow: 1,
	marginRight: theme.spacing(2),
	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'center',
	alignItems: 'center',
}))

export const WalkControl: FunctionComponent<{
	walk: Walk | null
	onWalkStart: () => void
	onWalkStop: () => void
	onWalkChange: (walk: Walk) => void
}> = ({ walk, onWalkStart, onWalkStop, onWalkChange }) => {
	const [walkTime, setWalkTime] = useState<Time>({
		fragments: [{ value: 0, unit: TimeUnit.Seconds }],
	})

	useEffect(() => {
		if (walk) {
			const setCurrentWalkTime = () =>
				setWalkTime(toTimeFromNow(walk.startedAt))
			const interval = setInterval(setCurrentWalkTime, 1000)
			return () => clearInterval(interval)
		}
	}, [walk, setWalkTime])

	return (
		<Box display="flex" justifyContent="center" mb={3}>
			{!walk ? (
				<StyledButton
					variant="contained"
					color="primary"
					size="large"
					endIcon={<PlayCircleOutlineIcon />}
					onClick={onWalkStart}
					fullWidth
				>
					Start
				</StyledButton>
			) : (
				<>
					<StyledPaper elevation={3}>
						<Typography variant="h5" align="center" color={walkTime.color}>
							UŽ VENČÍŠ:{' '}
							{walkTime.fragments
								.map(
									(timeFragment) => `${timeFragment.value}${timeFragment.unit}`
								)
								.join(' ')}
						</Typography>
						<WalkActions
							walkActions={walk.walkActions}
							onWalkActionsChange={(walkActions) =>
								onWalkChange({ ...walk, walkActions })
							}
						/>
					</StyledPaper>
					<StyledButton
						variant="contained"
						color="secondary"
						size="large"
						startIcon={<PauseCircleOutlineIcon />}
						onClick={onWalkStop}
					>
						Stop
					</StyledButton>
				</>
			)}
		</Box>
	)
}
