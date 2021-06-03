export type WalkActions = {
	pee: boolean
	poop: boolean
	food: boolean
	pills: boolean
}

export type Walk = {
	startedAt: Date
	endedAt: Date | null
	walker: string
	walkActions: WalkActions
}
