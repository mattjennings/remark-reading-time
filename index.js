import getReadingTime from "reading-time";
import { visit } from "unist-util-visit";

export default function readingTime({
  /**
   * The attribute name to store the reading time under in frontmatter
   *
   * @type {string}
   * @default "readingTime"
   */
  attribute = "readingTime",
} = {}) {
  return () => {
    return function (info, file) {
      let text = "";

      visit(info, ["text", "code"], (node) => {
        text += node.value;
      });

      const time = getReadingTime(text);

      file.data.fm = {
        ...file.data.fm,
        [attribute]: time,
      };
    };
  };
}
