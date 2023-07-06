interface RefObject<T> {
	[x: string]: any
	readonly current: T | null
}

declare module '*.scss' {
	const content: any
	export default content
}

declare module "*.svg" {
	const content: any
	export default content
}

declare module "*.mp3" {
	const content: any
	export default content
}