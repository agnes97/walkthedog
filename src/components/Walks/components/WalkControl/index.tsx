import type { FunctionComponent } from 'preact'
import { useEffect, useState } from 'preact/hooks'
import { Box, Button, makeStyles, Paper, Typography } from '@material-ui/core'
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline'
import PauseCircleOutlineIcon from '@material-ui/icons/PauseCircleOutline'

import { timeToString, TimeUnit, toTime } from '../../../../utils/time'
import type { Time } from '../../../../utils/time/types'
import type { Walk } from '../../types'
import { WalkActions } from '../WalkActions'

const useStyles = makeStyles((theme) => ({
	button: {
		padding: theme.spacing(6),
	},
	currentWalk: {
		flexGrow: 1,
		marginRight: theme.spacing(2),
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',

		[theme.breakpoints.down('sm')]: {
			marginRight: theme.spacing(0),
			marginBottom: theme.spacing(2),
			padding: theme.spacing(2, 0),
		},
	},
}))

export const WalkControl: FunctionComponent<{
	walk: Walk | null
	onWalkStart: () => void
	onWalkStop: () => void
	onWalkChange: (walk: Walk) => void
}> = ({ walk, onWalkStart, onWalkStop, onWalkChange }) => {
	const { button, currentWalk } = useStyles()

	const [walkTime, setWalkTime] = useState<Time>({
		fragments: [{ value: 0, unit: TimeUnit.Seconds }],
	})

	useEffect(() => {
		if (walk) {
			const setCurrentWalkTime = () => setWalkTime(toTime(walk.startedAt))
			const interval = setInterval(setCurrentWalkTime, 1000)
			return () => clearInterval(interval)
		}
	}, [walk, setWalkTime])

	return (
		<Box
			display="flex"
			justifyContent="center"
			flexDirection={{ xs: 'column', md: 'row' }}
		>
			{!walk ? (
				<Button
					className={button}
					variant="contained"
					color="primary"
					size="large"
					endIcon={<PlayCircleOutlineIcon />}
					onClick={onWalkStart}
					fullWidth
				>
					Start
				</Button>
			) : (
				<>
					<Paper className={currentWalk} elevation={3}>
						<Typography variant="h5" align="center" color={walkTime.color}>
							UŽ VENČÍŠ: {timeToString(walkTime)}
						</Typography>
						<WalkActions
							walkActions={walk.walkActions}
							onWalkActionsChange={(walkActions) =>
								onWalkChange({ ...walk, walkActions })
							}
						/>
					</Paper>
					<Button
						className={button}
						variant="contained"
						color="secondary"
						size="large"
						startIcon={<PauseCircleOutlineIcon />}
						onClick={onWalkStop}
					>
						Stop
					</Button>
				</>
			)}
		</Box>
	)
}
