const request = require('request')
const url = 'https://api.darksky.net/forecast/beaec2f869efeb5defa92aef9802bf71/37.8267,-122.4233'

request({ url: url }, (error, response) => {
    const data = JSON.parse(response.body)
    console.log(data.currently)
})