import type { FunctionComponent } from 'preact'
import { Avatar, Box, makeStyles, Paper, Typography } from '@material-ui/core'

import PersonIcon from '@material-ui/icons/Person'

import { timeToString, toTime } from '../../../../utils/time'
import type { Walk } from '../../types'
import { WalkActions } from '../WalkActions'

const useStyles = makeStyles((theme) => ({
	avatarSize: {
		width: theme.spacing(7),
		height: theme.spacing(7),
	},
	walkItem: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-around',
		alignItems: 'center',
		padding: theme.spacing(3),
		margin: theme.spacing(1, 0),

		[theme.breakpoints.down('sm')]: {
			flexDirection: 'column',

			'& > *': {
				margin: theme.spacing(1, 0),
			},
		},
	},
}))

const formatDate = (date: Date): string =>
	new Intl.DateTimeFormat('cs', {
		dateStyle: 'medium',
	}).format(date)

const WalkItem: FunctionComponent<{ walk: Walk }> = ({ walk }) => {
	const { avatarSize, walkItem } = useStyles()
	const walkTime = toTime(walk.startedAt, walk.endedAt ?? new Date())

	return (
		<Paper
			className={walkItem}
			// eslint-disable-next-line @typescript-eslint/ban-ts-comment
			// @ts-expect-error: It works as expected, but there is a wrong type in the library.
			component="li"
			elevation={3}
		>
			<Avatar className={avatarSize}>
				<PersonIcon fontSize="large" />
			</Avatar>
			<Box display="flex" flexDirection="column" alignItems="center">
				<Typography variant="h6" component="h2">
					{formatDate(walk.startedAt)}
				</Typography>
				<Typography variant="body1">
					EXTRA{' '}
					<Typography component="span" color={walkTime.color}>
						{timeToString(walkTime)}
					</Typography>
				</Typography>
			</Box>
			<WalkActions walkActions={walk.walkActions} />
		</Paper>
	)
}

export const WalkList: FunctionComponent<{ walks: Walk[] }> = ({ walks }) => (
	<Box
		display="flex"
		flexDirection="column"
		justifyContent="space-between"
		my={2}
		component="ul"
		p={0}
	>
		{walks && walks.map((walk, index) => <WalkItem key={index} walk={walk} />)}
	</Box>
)
