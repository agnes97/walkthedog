import type { Time } from './types'

export enum TimeUnit {
	Seconds = 'S',
	Minutes = 'M',
	Hours = 'H',
}

export const toTime = (from: Date, to = new Date()): Time => {
	const milliseconds = to.getTime() - from.getTime()
	const seconds = milliseconds / 1000

	if (seconds < 60) {
		return {
			fragments: [
				{
					value: Math.floor(seconds),
					unit: TimeUnit.Seconds,
				},
			],
			color: 'secondary',
		}
	}

	const minutes = seconds / 60

	if (minutes < 60) {
		return {
			fragments: [
				{
					value: Math.floor(minutes),
					unit: TimeUnit.Minutes,
				},
				{
					value: Math.floor(seconds % 60),
					unit: TimeUnit.Seconds,
				},
			],
			color: 'primary',
		}
	}

	const hours = minutes / 60

	return {
		fragments: [
			{
				value: Math.floor(hours),
				unit: TimeUnit.Hours,
			},
			{
				value: Math.floor(minutes % 60),
				unit: TimeUnit.Minutes,
			},
			{
				value: Math.floor(seconds % 60),
				unit: TimeUnit.Seconds,
			},
		],
		color: 'secondary',
	}
}

export const timeToString = (time: Time): string =>
	time.fragments
		.map((timeFragment) => `${timeFragment.value}${timeFragment.unit}`)
		.join(' ')
