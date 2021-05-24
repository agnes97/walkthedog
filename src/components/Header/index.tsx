import { FunctionComponent } from 'preact'
import { Box, Link, makeStyles, Typography } from '@material-ui/core'
import { Link as RouterLink } from 'react-router-dom'

import { Logo } from '../Logo'

const useStyles = makeStyles((theme) => ({
	transform: {
		cursor: 'pointer',
		pointerEvents: 'none',
		'& > *': {
			transition: theme.transitions.create(['transform']),
			pointerEvents: 'auto',
		},
		'&:hover > *:first-child': {
			transformOrigin: 'center',
			transform: 'rotate(20deg)',
		},
		'&:hover > *:last-child': {
			transform: 'scale(1.05)',
		},
	},
	logo: {
		borderRadius: '50%',
		overflow: 'hidden',
	},
}))

export const Header: FunctionComponent = () => {
	const { transform, logo } = useStyles()

	return (
		<Box
			component="header"
			display="flex"
			justifyContent="center"
			alignItems="center"
			flexWrap="wrap"
			className={transform}
		>
			<Link className={logo} component={RouterLink} to="/">
				<Logo width={256} height={256} />
			</Link>
			<Link color="inherit" underline="none" component={RouterLink} to="/">
				<Typography variant="h2" component="h1" align="center">
					Walk The Dog!
				</Typography>
			</Link>
		</Box>
	)
}
