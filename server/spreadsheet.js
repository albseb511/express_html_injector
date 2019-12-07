var Gsheets = require('google-spreadsheet');
const {promisify} = require('util')
const creds = require('./config/client_secret.json')


async function accessSpreadSheet(){
    const doc = new Gsheets('1BRpeWpAILzZ9ph2TBPR0ofIvrpO1y-Fu8lR45X7_eC0')
    await promisify(doc.useServiceAccountAuth)(creds)
    const info = await promisify(doc.getInfo)()
    const sheet = info.worksheets[0]
    console.log(sheet.title, sheet.rowCount)

    const row = await promisify(sheet.getRows)({offset:0})
    return printData(row)
}

function printData(data){
    var obj = {}
    data.forEach(element => {
        obj[element.htmltag] = element.content
    });
    console.log(obj)
    return obj
}


module.exports ={
    getData:accessSpreadSheet
}