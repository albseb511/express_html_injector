var Gsheets = require('google-spreadsheet');
const {promisify} = require('util')
const creds = require('./config/client_secret.json')
const {sheetId} = require('./config/sheet_id.json')


async function accessSpreadSheet(){
    const doc = new Gsheets(sheetId)
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