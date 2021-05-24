import { FunctionComponent } from 'preact'
import { Box, makeStyles, Typography } from '@material-ui/core'

import { Logo } from '../Logo'

const useStyles = makeStyles((theme) => ({
	transform: {
		'& > *': {
			transition: theme.transitions.create(['transform']),
		},
		'&:hover > *:first-child': {
			transformOrigin: 'center',
			transform: 'rotate(20deg)',
		},
		'&:hover > *:last-child': {
			transform: 'scale(1.05)',
		},
	},
}))

export const Header: FunctionComponent = () => {
	const { transform } = useStyles()

	return (
		<Box
			component="header"
			display="flex"
			justifyContent="center"
			alignItems="center"
			flexWrap="wrap"
			className={transform}
		>
			<Logo width={256} height={256} />
			<Typography variant="h2" component="h1" align="center">
				Walk The Dog!
			</Typography>
		</Box>
	)
}
