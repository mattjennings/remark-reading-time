import { name as isIdentifierName } from 'estree-util-is-identifier-name'

export default function remarkMdsvexReadingTime({
  /**
   * The attribute name to export the stored the reading time under data.
   *
   * @type {string}
   * @default "readingTime"
   */
  name = 'readingTime',
  /**
   * The attribute name to store the reading time under data in remark plugin.
   *
   * @type {string}
   * @default "readingTime"
   */
  remarkReadingTimeName = 'readingTime'
} = {}) {
  if (!isIdentifierName(name)) {
    throw new Error(
      `The name should be a valid identifier name, got: ${JSON.stringify(
        name
      )}`
    )
  }

  return function transformer(_tree, vfile) {
    const readingTime = vfile.data[remarkReadingTimeName]

    if (readingTime) {
      vfile.data.fm = {
        ...vfile.data.fm,
        [name]: readingTime
      }
    }
  }
}
