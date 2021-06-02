import { TypographyTypeMap } from '@material-ui/core'

export enum TimeUnit {
	Seconds = 'S',
	Minutes = 'M',
	Hours = 'H',
}

export type Time = {
	value: number
	unit: TimeUnit
	color: TypographyTypeMap['props']['color']
}
