import { FunctionComponent } from 'preact'
import { Box, IconButton } from '@material-ui/core'
import OpacityOutlinedIcon from '@material-ui/icons/OpacityOutlined'
import DeleteOutlineOutlinedIcon from '@material-ui/icons/DeleteOutlineOutlined'
import LocalDiningOutlinedIcon from '@material-ui/icons/LocalDiningOutlined'
import LocalHospitalOutlinedIcon from '@material-ui/icons/LocalHospitalOutlined'

export const WalkActions: FunctionComponent = () => (
	<Box display="flex" justifyContent="space-between">
		<IconButton>
			<OpacityOutlinedIcon fontSize="large" />
		</IconButton>
		<IconButton>
			<DeleteOutlineOutlinedIcon fontSize="large" />
		</IconButton>
		<IconButton>
			<LocalDiningOutlinedIcon fontSize="large" />
		</IconButton>
		<IconButton>
			<LocalHospitalOutlinedIcon fontSize="large" />
		</IconButton>
	</Box>
)
