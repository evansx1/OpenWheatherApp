# OpenWheatherApp

Consult the weather at any location through the IP address or city provided.

## How to run it locally

1. Download the repo in your local: 

    `git clone https://github.com/evansx1/OpenWheatherApp.git`

1. Install dependencies using `npm install`
1. Create .env file and load the secrets
1. Run server using `node index`
1. Open your browser with your defined port or use the default `PORT=3000`
1. Hit the following endpoints:

    - **Get geolocation by IP address**: http://localhost:{YOUR_PORT}/v1/location
    - **Get current weather by city or current location**: http://localhost:{YOUR_PORT}/v1/current/:{city}?
    - **Get forecast weather for the incoming 5 days by city or current location**: http://localhost:{YOUR_PORT}/v1/forecast:{city}?