const { User } = require("./user.js");

const readPlain = (file) => {
  const csv = require("csv-parser");
  const fs = require("fs");
  let arr = [];

  fs.createReadStream(file)
    .pipe(csv())
    .on("data", (row) => {
      let a = new User();
      Object.assign(a, row);
      arr.push(a);
    })
    .on("end", () => {
      saveToFile("saveToFile.json", arr);
    });
};

const saveToFile = (file, arr) => {
  const fs = require("fs");
  data = JSON.stringify(arr);
  fs.writeFileSync(file, data);
};

const readJsonFile = (file) => {
  const fs = require("./saveToFile.json");
  for (let i in fs) {
    console.log(fs[i]);
  }
};

readPlain("MOCK_DATA.csv");
readJsonFile("saveToFile.json");
