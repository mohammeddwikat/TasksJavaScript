const { User } = require("./user.js");

const readPlain = (file) => {
  const csv = require("csv-parser");
  const fs = require("fs");
  let arrOfUsers = [];

  fs.createReadStream(file)
    .pipe(csv())
    .on("data", (row) => {
      let user = new User();
      Object.assign(user, row);
      arrOfUsers.push(user);
    })
    .on("end", () => {
      saveToFile("saveToFile.json", arrOfUsers);
    });
};

const saveToFile = (file, arrOfUsers) => {
  const fs = require("fs");
  data = JSON.stringify(arrOfUsers);
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
