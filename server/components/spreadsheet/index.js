const express = require('express');
const {google} = require('googleapis');
const { CREDENTIALS, SCHEET_ID, TOKEN } = process.env;

const SCOPES = ['https://www.googleapis.com/auth/spreadsheets.readonly'];

const {client_secret, client_id, redirect_uris} = JSON.parse(CREDENTIALS).installed;
const oAuth2Client = new google.auth.OAuth2(client_id, client_secret, redirect_uris[0]);

oAuth2Client.setCredentials(JSON.parse(TOKEN));

/**
 * Prints the names and majors of students in a sample spreadsheet:
 * @param {google.auth.OAuth2} auth The authenticated Google OAuth client.
 */
const getSheets = (auth) => new Promise((resolve, reject) => {
  const sheets = google.sheets({version: 'v4', auth});

  sheets.spreadsheets.values.get({
    spreadsheetId: SCHEET_ID,
    range: 'Data19!A2:H',
  }, (err, res) => {
    if (err) return console.log('The API returned an error: ' + err);
    const rows = res.data.values;
    let result = [];
    if (!rows.length) {
      result.push({data: 'no data'});
    }

    if (rows.length) {

      rows.forEach((row) => {
        const formObj = {
          Activity: row[0],
          Need: row[1],
          Grave: row[2],
          OrgNr: row[3],
          Email: row[4],
          Locality: row[5],
          DateSubmitted: row[6],
          Token: row[7]
        }

        result.push(formObj);
      })

      // console.log(result);
      resolve(result);

    } else {
      reject({data: 'no data'})
    }
  })
})

const routes = () => {
    const router = express.Router();

    router.get('/', async (request, response) => {
        getSheets(oAuth2Client).then((result) => {
        response.json(result);
      }).catch((e) => {
          console.log(e);
          response.json({data: 'asdf'})
        })
    });
    return router;
};

module.exports = routes;
