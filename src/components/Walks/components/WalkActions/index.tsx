import { FunctionComponent } from 'preact'
import { useEffect, useState } from 'preact/hooks'
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
	isButton?: boolean
}> = ({ Icon, walkAction, onClick, isButton }) => {
	const color = walkAction ? 'primary' : 'inherit'

	return isButton ? (
		<IconButton color={color} onClick={onClick}>
			<Icon fontSize="large" />
		</IconButton>
	) : (
		<Icon fontSize="large" color={color} />
	)
}

export const WalkActions: FunctionComponent<{
	walkActions: WalkActionsType
	onWalkActionsChange?: (walkActions: WalkActionsType) => void
}> = ({ walkActions, onWalkActionsChange }) => {
	const theme = useTheme()
	const [currentWalkActions, setCurrentWalkActions] = useState<WalkActionsType>(
		{
			pee: false,
			poop: false,
			food: false,
			pills: false,
		}
	)

	useEffect(() => {
		setCurrentWalkActions(walkActions)
	}, [walkActions])

	const { pee, poop, food, pills } = currentWalkActions

	const areWalkActionsClickable = Boolean(onWalkActionsChange)

	const onWalkActionClick = (walkAction: keyof WalkActionsType) => {
		if (onWalkActionsChange) {
			const updatedWalkActions: WalkActionsType = {
				...currentWalkActions,
				[walkAction]: !currentWalkActions[walkAction],
			}

			setCurrentWalkActions(updatedWalkActions)
			onWalkActionsChange(updatedWalkActions)
		}
	}

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
				isButton={areWalkActionsClickable}
			/>
			<WalkAction
				Icon={DeleteOutlineOutlinedIcon}
				walkAction={poop}
				onClick={() => onWalkActionClick('poop')}
				isButton={areWalkActionsClickable}
			/>
			<WalkAction
				Icon={LocalDiningOutlinedIcon}
				walkAction={food}
				onClick={() => onWalkActionClick('food')}
				isButton={areWalkActionsClickable}
			/>
			<WalkAction
				Icon={LocalHospitalOutlinedIcon}
				walkAction={pills}
				onClick={() => onWalkActionClick('pills')}
				isButton={areWalkActionsClickable}
			/>
		</Box>
	)
}
