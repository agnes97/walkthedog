import { FunctionComponent } from 'preact'
import { useCallback, useState } from 'preact/hooks'
import { Box, IconButton, useTheme } from '@material-ui/core'
import { SvgIconComponent } from '@material-ui/icons'

import OpacityOutlinedIcon from '@material-ui/icons/OpacityOutlined'
import DeleteOutlineOutlinedIcon from '@material-ui/icons/DeleteOutlineOutlined'
import LocalDiningOutlinedIcon from '@material-ui/icons/LocalDiningOutlined'
import LocalHospitalOutlinedIcon from '@material-ui/icons/LocalHospitalOutlined'

import { WalkActions as WalkActionsType } from '../../types'

const WalkAction: FunctionComponent<{
	Icon: SvgIconComponent
	walkAction: boolean
	onClick: () => void
}> = ({ Icon, walkAction, onClick }) => (
	<IconButton color={walkAction ? 'primary' : 'inherit'} onClick={onClick}>
		<Icon fontSize="large" />
	</IconButton>
)

export const WalkActions: FunctionComponent<{ walkActions: WalkActionsType }> =
	({ walkActions }) => {
		const theme = useTheme()
		const [currentWalkActions, setCurrentWalkActions] =
			useState<WalkActionsType>(walkActions)

		const { pee, poop, food, pills } = currentWalkActions

		const onWalkActionClick = useCallback(
			(walkAction: keyof WalkActionsType) => {
				setCurrentWalkActions({
					...currentWalkActions,
					[walkAction]: !currentWalkActions[walkAction],
				})
			},
			[currentWalkActions, setCurrentWalkActions]
		)

		return (
			<Box
				display="flex"
				justifyContent="space-between"
				color={theme.palette.background.default}
			>
				<WalkAction
					Icon={OpacityOutlinedIcon}
					walkAction={pee}
					onClick={() => onWalkActionClick('pee')}
				/>
				<WalkAction
					Icon={DeleteOutlineOutlinedIcon}
					walkAction={poop}
					onClick={() => onWalkActionClick('poop')}
				/>
				<WalkAction
					Icon={LocalDiningOutlinedIcon}
					walkAction={food}
					onClick={() => onWalkActionClick('food')}
				/>
				<WalkAction
					Icon={LocalHospitalOutlinedIcon}
					walkAction={pills}
					onClick={() => onWalkActionClick('pills')}
				/>
			</Box>
		)
	}
