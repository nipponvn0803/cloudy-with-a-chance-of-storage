const express = require('express')
var cors = require('cors')
const fetch = require('node-fetch')
const API_PORT = 3001
const app = express()
app.use(cors())
const router = express.Router()

// function calculate distance based on lat and long
// https://stackoverflow.com/questions/27928/calculate-distance-between-two-latitude-longitude-points-haversine-formula
function getDistanceFromLatLonInKm (lat1, lon1, lat2, lon2) {
  var R = 6371 // Radius of the earth in km
  var dLat = deg2rad(lat2 - lat1) // deg2rad below
  var dLon = deg2rad(lon2 - lon1)
  var a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(deg2rad(lat1)) *
      Math.cos(deg2rad(lat2)) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2)

  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))
  var d = R * c // Distance in km
  return d
}

function deg2rad (deg) {
  return deg * (Math.PI / 180)
}

// the API idea I get from
// https://medium.com/javascript-in-plain-english/full-stack-mongodb-react-node-js-express-js-in-one-simple-app-6cc8ed6de274
router.get('/getData', (req, res) => {
  fetch('https://api.aiven.io/v1/clouds')
    .then((res) => res.json())
    .then(
      (data) => {
        const formattedData = []
        data.clouds.forEach((cloud) => {
          // cut provider name between the first hypen (-) and colon (:)
          const provider = cloud.cloud_description.substring(
            cloud.cloud_description.indexOf('-') + 2,
            cloud.cloud_description.indexOf(':')
          )

          //   cut the location before the first hyphen (-)
          const location = cloud.cloud_description.substring(
            0,
            cloud.cloud_description.indexOf('-') - 1
          )

          const distance =
          //   get distance in km
          //   round distance to 2 decimal points
            Math.round(
              getDistanceFromLatLonInKm(
                req.query.lat,
                req.query.long,
                cloud.geo_latitude,
                cloud.geo_longitude
              ) * 100
            ) / 100

          formattedData.push({
            cloudName: cloud.cloud_name,
            provider: provider,
            location: location,
            region: cloud.geo_region
            // uppercase the first letter of each word in region
              .split(' ')
              .map(
                string =>
                  string.charAt(0).toUpperCase() + string.substring(1)
              )
              .join(' '),
            distance: distance
          })
        })

        return res.json({ data: formattedData })
      },
      (error) => {
        return res.json({ success: false, error: error })
      }
    )
})

// append /api for our http requests
app.use('/api', router)

// launch our backend into a port
app.listen(API_PORT, () => console.log(`LISTENING ON PORT ${API_PORT}`))
