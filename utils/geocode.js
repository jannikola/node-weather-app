const request = require('request')

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+ encodeURIComponent(address) +'.json?access_token=pk.eyJ1IjoiamFubmlrb2xhIiwiYSI6ImNrNXV2M3M5bTE5amczZ3BiNTVoaXl1Z3kifQ.qx9aQsFFLA3DxUYnXHSz9A'

    request({url: url, json: true}, (error, response) => {
        if(error) {
           callback('Unable to connect to location services!', undefined) 
        } else if(response.body.features.length === 0) {
            callback('Unable to find location. Try another search', undefined)
        } else {
            callback(undefined, {
                latitude: response.body.features[0].center[1],
                longitude: response.body.features[0].center[0],
                location: response.body.features[0].place_name
            })
        }
    })
}

module.exports = geocode