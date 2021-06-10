import type { Time } from './types'

export enum TimeUnit {
	Seconds = 'S',
	Minutes = 'M',
	Hours = 'H',
}

export const toTimeFromNow = (date: Date): Time => {
	const now = new Date()
	const millisecondsFromNow = now.getTime() - date.getTime()
	const secondsFromNow = millisecondsFromNow / 1000

	if (secondsFromNow < 60) {
		return {
			fragments: [
				{
					value: Math.floor(secondsFromNow),
					unit: TimeUnit.Seconds,
				},
			],
			color: 'secondary',
		}
	}

	const minutesFromNow = secondsFromNow / 60

	if (minutesFromNow < 60) {
		return {
			fragments: [
				{
					value: Math.floor(minutesFromNow),
					unit: TimeUnit.Minutes,
				},
				{
					value: Math.floor(secondsFromNow % 60),
					unit: TimeUnit.Seconds,
				},
			],
			color: 'primary',
		}
	}

	const hoursFromNow = minutesFromNow / 60

	return {
		fragments: [
			{
				value: Math.floor(hoursFromNow),
				unit: TimeUnit.Hours,
			},
			{
				value: Math.floor(minutesFromNow % 60),
				unit: TimeUnit.Minutes,
			},
			{
				value: Math.floor(secondsFromNow % 60),
				unit: TimeUnit.Seconds,
			},
		],
		color: 'secondary',
	}
}
