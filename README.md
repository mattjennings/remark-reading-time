# remark-reading-time

Adds estimated reading time to your markdown files using [reading-time](https://www.npmjs.com/package/reading-time).

## Usage

```js
import readingTime from "remark-reading-time";

remark()
  .use(readingTime())
  .process(markdown, function (err, file) {
    console.log("Reading time is " + file.data.fm.readingTime.text);
  });
```

By default, it will add the data to `readingTime` in your frontmatter. This can be changed:

```js
import readingTime from "remark-reading-time";

remark()
  .use(readingTime({ attribute: "length" }))
  .process(markdown, function (err, file) {
    console.log("Reading time is " + file.data.fm.length.text);
  });
```
