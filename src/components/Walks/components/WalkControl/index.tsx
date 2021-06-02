import { FunctionComponent } from 'preact'
import { useEffect, useState } from 'preact/hooks'
import { Box, Button, Paper, styled, Typography } from '@material-ui/core'
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline'
import PauseCircleOutlineIcon from '@material-ui/icons/PauseCircleOutline'

import { Walk } from '../../types'
import { WalkActions } from '../WalkActions'
import { Time, TimeUnit } from './types'

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

// TODO: Add hours with minutes
const toTimeFromNow = (date: Date): Time => {
	const now = new Date()
	const millisecondsFromNow = now.getTime() - date.getTime()
	const secondsFromNow = millisecondsFromNow / 1000

	if (secondsFromNow < 60) {
		return {
			value: Math.floor(secondsFromNow),
			unit: TimeUnit.Seconds,
			color: 'secondary',
		}
	}

	const minutesFromNow = secondsFromNow / 60

	return {
		value: Math.floor(minutesFromNow),
		unit: TimeUnit.Minutes,
		color: 'primary',
	}
}

export const WalkControl: FunctionComponent<{
	walk: Walk | null
	onWalkStart: () => void
	onWalkStop: () => void
}> = ({ walk, onWalkStart, onWalkStop }) => {
	const [walkTime, setWalkTime] = useState<Time>({
		value: 0,
		unit: TimeUnit.Seconds,
		color: 'textPrimary',
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
							UŽ VENČÍŠ: {walkTime.value} {walkTime.unit}
						</Typography>
						<WalkActions />
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
