import express from 'express'

const PORT = 8000

const app = express();

app.get('/:OperationSigns/:oneNum/:twoNum', (req, res) => {
  const { oneNum, twoNum, OperationSigns } = req.params
  let result = 'result is '
  
  switch(OperationSigns) {
    case 'plus':
      result += Number(oneNum) + Number(twoNum)
      break
    
    case 'minus':
      result += Number(oneNum) - Number(twoNum)
      break
    
    case 'multiply':
      result += Number(oneNum) * Number(twoNum)
      break

    case 'divide':
      result += Number(oneNum) / Number(twoNum)
      break

    default:
      result = 'math operator entered incorrectly'      
  }
  
  res.send(result)
})

app.listen(PORT, function () {
  console.log(`Listening to Port ${PORT}...`);
});