var app = require('express')()
var cors = require('cors')
var port = 8000
app.use(cors())
var {getData} = require('./spreadsheet')

app.get('/',async (req,res)=>{
    var data = await getData()
    console.log('data is',data)
    res.json(data)
})

app.listen(port,()=>{
    console.log('port is listening to ',port)
})