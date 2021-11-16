import remark from "remark";
import readingTime from "./index.js";
import fs from "fs";

remark()
  .use(readingTime)
  .process(fs.readFileSync("./test.md", "utf-8"), function (err, file) {
    if (err) {
      console.error(err);
    }
    console.log(file.data.readingTime);
  });
