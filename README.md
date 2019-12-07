## README


`SETUP:`

Use google sheets to fill in information inside HTML page:
- goto developer google console
- create a new project
- enable Google sheets API
- download the credentials 
- create folder `server/config`
- copy the credentials file inside config folder and rename it as client_secret.json
- Create an excel sheet and share the sheet to the client_email inside the client_secret.json
- Goto your gogole sheets, copy the sheet id
- `https://docs.google.com/spreadsheets/d/<SHEET_ID>/edit`
- create a file sheet_id.json inside the config folder

```
{
    "sheetId":"SHEET_ID"
}
```



![https://i.ibb.co/HHnYBB9/Screen-Shot-2019-12-07-at-8-21-19-PM.png](https://i.ibb.co/HHnYBB9/Screen-Shot-2019-12-07-at-8-21-19-PM.png)

- Store information in the excel sheet
- use the html tags as your id in your html page


How to use:
```javascript
cd server
node index.js
// server is running
```

Let me know if something is not working.
