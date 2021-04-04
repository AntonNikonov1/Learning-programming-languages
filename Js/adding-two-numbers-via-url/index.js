const express = require('express');
const app = express();

app.get('/:numOne/:numTwo', (req, res) => {
  const { numOne, numTwo } = req.params
  const sum = Number(numOne) + Number(numTwo)

  res.send(`<p>${sum}</p>`)
});


app.listen(3000, () => {
  console.log("Start server...")
});


// Explanation
// 1) to download all packages, enter the command in the terminal "npm install"
// 2) in the terminal, type the command "node index"