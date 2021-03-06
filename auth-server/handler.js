const { google } = require('googleapis');
const OAuth2 = google.auth.OAuth2;
const calendar = google.calendar('v3');
// SCOPES set access levels
const SCOPES = ['https://www.googleapis.com/auth/calendar.readonly'];

// “process.env” means the value is in the “config.json” file
const credentials = {
	client_id: process.env.CLIENT_ID,
	project_id: process.env.PROJECT_ID,
	client_secret: process.env.CLIENT_SECRET,
	calendar_id: process.env.CALENDAR_ID,
	auth_uri: 'https://accounts.google.com/o/oauth2/auth',
	token_uri: 'https://oauth2.googleapis.com/token',
	auth_provider_x509_cert_url: 'https://www.googleapis.com/oauth2/v1/certs',
	redirect_uris: ['https://bethiamchan.github.io/meet/'],
	javascript_origins: ['https://bethiamchan.github.io', 'http://localhost:3000'],
};
const { client_secret, client_id, redirect_uris, calendar_id } = credentials;
const oAuth2Client = new google.auth.OAuth2(client_id, client_secret, redirect_uris[0]);

// First, generate a URL so users can log in with Google. After logging in, they’ll receive a code as a URL parameter.
module.exports.getAuthURL = async () => {
	// Scopes array passed to the `scope` option. Any passed scopes what users will see when the consent screen is displayed.
	const authUrl = oAuth2Client.generateAuthUrl({
		access_type: 'offline',
		scope: SCOPES,
	});

	return {
		statusCode: 200,
		headers: {
			'X-Requested-With': '*',
			'Access-Control-Allow-Headers': 'Content-Type,X-Amz-Date,Authorization,X-Api-Key,x-requested-with',
			'Access-Control-Allow-Origin': '*',
			// 'Access-Control-Allow-Methods': 'POST,GET,OPTIONS',
			// "Access-Control-Allow-Credentials": true,
		},
		body: JSON.stringify({
			authUrl: authUrl,
		}),
	};
};

module.exports.getAccessToken = async (event) => {
	// The values used to instantiate the OAuthClient are at the top of the file
	const oAuth2Client = new google.auth.OAuth2(client_id, client_secret, redirect_uris[0]);
	// Get authorization code from the URL query
	const code = decodeURIComponent(`${event.pathParameters.code}`);

	return new Promise((resolve, reject) => {
		// Exchange authorization code for access token
		oAuth2Client.getToken(code, (err, token) => {
			if (err) {
				return reject(err);
			}
			return resolve(token);
		});
	})
		.then((token) => {
			// Respond with OAuth token

			return {
				statusCode: 200,
				headers: {
					'X-Requested-With': '*',
					'Access-Control-Allow-Headers': 'Content-Type,X-Amz-Date,Authorization,X-Api-Key,x-requested-with',
					'Access-Control-Allow-Origin': '*',
					// 'Access-Control-Allow-Methods': 'POST,GET,OPTIONS',
				},
				body: JSON.stringify(token),
			};
		})
		.catch((err) => {
			console.error(err);
			return {
				statusCode: 500,
				body: JSON.stringify(err),
			};
		});
};

module.exports.getCalendarEvents = async (event) => {
	const oAuth2Client = new google.auth.OAuth2(client_id, client_secret, redirect_uris[0]);
	const access_token = decodeURIComponent(`${event.pathParameters.access_token}`);
	oAuth2Client.setCredentials({
		access_token,
	});

	return new Promise((resolve, reject) => {
		calendar.events.list(
			{
				calendarId: calendar_id,
				auth: oAuth2Client,
				timeMin: new Date().toISOString(),
				maxResults: 32,
				singleEvents: true,
				orderBy: 'startTime',
			},
			(error, response) => {
				if (error) {
					reject(error);
				} else {
					resolve(response);
				}
			}
		);
	})
		.then((results) => {
			return {
				statusCode: 200,
				headers: {
					'X-Requested-With': '*',
					'Access-Control-Allow-Headers': 'Content-Type,X-Amz-Date,Authorization,X-Api-Key,x-requested-with',
					'Access-Control-Allow-Origin': '*',
					// 'Access-Control-Allow-Methods': 'POST,GET,OPTIONS',
				},
				body: JSON.stringify({
					events: results.data.items,
				}),
			};
		})
		.catch((err) => {
			console.error(err);
			return {
				statusCode: 500,
				body: JSON.stringify(err),
			};
		});
};
