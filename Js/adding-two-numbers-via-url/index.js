const express = require('express');
const app = express();

app.get('/', (req) => {
  console.log(req.query)
});


app.listen(3000, () => {
  console.log("Start server...")
});


// Explanation
// 1) to download all packages, enter the command in the terminal "npm install"
// 2) in the terminal, type the command "node index"
// 3) http://localhost:3000/?key1=value1?key2=value2
// 4) in the editor console you will see the object