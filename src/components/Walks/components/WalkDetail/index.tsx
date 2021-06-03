import { FunctionComponent } from 'preact'
import {
	List,
	ListItem,
	ListItemIcon,
	ListItemText,
	Paper,
	Typography,
} from '@material-ui/core'
import { SvgIconComponent } from '@material-ui/icons'
import PersonIcon from '@material-ui/icons/Person'
import TimerIcon from '@material-ui/icons/Timer'
import TimerOffIcon from '@material-ui/icons/TimerOff'

import { Walk } from '../../types'
import { WalkActions } from '../WalkActions'

const CardItem: FunctionComponent<{
	Icon: SvgIconComponent
	title: string
	text: string
}> = ({ Icon, title, text }) => (
	<ListItem title={title}>
		<ListItemIcon title="x">
			<Icon />
		</ListItemIcon>
		<ListItemText
			primary={
				<>
					<b>{title}:</b> {text}
				</>
			}
			primaryTypographyProps={{ variant: 'h6', component: 'span' }}
		/>
	</ListItem>
)

const formatDate = (date: Date): string =>
	new Intl.DateTimeFormat('cs', {
		dateStyle: 'medium',
		timeStyle: 'short',
	}).format(date)

export const WalkDetail: FunctionComponent<{ walk: Walk; title?: string }> = ({
	walk,
	title,
}) => (
	<Paper
		// eslint-disable-next-line @typescript-eslint/ban-ts-comment
		// @ts-expect-error: It works as expected, but there is a wrong type in the library.
		component="article"
		elevation={3}
	>
		<List dense>
			{title && (
				<ListItem>
					<ListItemText
						primary={
							<Typography variant="h5" align="center" color="secondary">
								{title}
							</Typography>
						}
					/>
				</ListItem>
			)}
			<CardItem
				title="Started"
				Icon={TimerIcon}
				text={formatDate(walk.startedAt)}
			/>
			{walk.endedAt && (
				<CardItem
					title="Ended"
					Icon={TimerOffIcon}
					text={formatDate(walk.endedAt)}
				/>
			)}
			<CardItem
				title="Walker"
				Icon={PersonIcon}
				text={walk.walker ?? 'Unknown'}
			/>
			<ListItem>
				<ListItemText
					primary={<WalkActions walkActions={walk.walkActions} />}
				/>
			</ListItem>
		</List>
	</Paper>
)
