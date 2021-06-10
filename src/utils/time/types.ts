import type { TypographyTypeMap } from '@material-ui/core'

import type { TimeUnit } from './'

type TimeFragment = {
	value: number
	unit: TimeUnit
}

export type Time = {
	fragments: TimeFragment[]
	color?: TypographyTypeMap['props']['color']
}
