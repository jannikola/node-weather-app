const request = require('request')
const url = 'https://api.darksky.net/forecast/beaec2f869efeb5defa92aef9802bf71/37.8267,-122.4233'

request({ url: url, json: true }, (error, response) => {
    console.log(response.body.currently)
})

const geocodeURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoiamFubmlrb2xhIiwiYSI6ImNrNXB1N29vNDA1OXYzZnFvbnBhOHQ2aXcifQ.Iu7-LDOOlqlPjkYXptsJUg'

request({url: geocodeURL, json: true}, (error,response) => {
    const lattitude = response.body.features[0].center[1]
    const longitute = response.body.features[0].center[0]
    console.log(lattitude, longitute)
})