import type { Plugin } from 'unified'

declare const remarkMdsvexReadingTime: Plugin<[{ name?: string; remarkReadingTimeName?: string }]>

export default remarkMdsvexReadingTime
