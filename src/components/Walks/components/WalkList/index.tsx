import type { FunctionComponent } from 'preact'
import { Grid } from '@material-ui/core'

import type { Walk } from '../../types'
import { WalkDetail } from '../WalkDetail'

export const WalkList: FunctionComponent<{
	walks: Walk[]
	currentWalk?: Walk | null
}> = ({ walks, currentWalk }) => (
	<Grid container justify="center" spacing={2}>
		{currentWalk && (
			<Grid item>
				<WalkDetail title="Current Walk" walk={currentWalk} />
			</Grid>
		)}
		{walks &&
			walks.map((walk, index) => (
				<Grid item key={index}>
					<WalkDetail walk={walk} />
				</Grid>
			))}
	</Grid>
)
