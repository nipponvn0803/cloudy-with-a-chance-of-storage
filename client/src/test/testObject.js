const testObject = {
  data: [
    {
      cloud_description: 'Africa, South Africa - Azure: South Africa North',
      cloud_name: 'azure-south-africa-north',
      geo_latitude: -26.198,
      geo_longitude: 28.03,
      geo_region: 'africa'
    },
    {
      cloud_description: 'Asia, Bahrain - Amazon Web Services: Bahrain',
      cloud_name: 'aws-me-south-1',
      geo_latitude: 26.07,
      geo_longitude: 50.55,
      geo_region: 'south asia'
    },
    {
      cloud_description: 'Asia, Hong Kong - Amazon Web Services: Hong Kong',
      cloud_name: 'aws-ap-east-1',
      geo_latitude: 22.5,
      geo_longitude: 114,
      geo_region: 'east asia'
    },
    {
      cloud_description: 'Asia, Hong Kong - Azure: East Asia',
      cloud_name: 'azure-eastasia',
      geo_latitude: 22.5,
      geo_longitude: 114,
      geo_region: 'southeast asia'
    },
    {
      cloud_description: 'Asia, Hong Kong - Google Cloud: Hong Kong',
      cloud_name: 'google-asia-east2',
      geo_latitude: 22.5,
      geo_longitude: 114,
      geo_region: 'east asia'
    },
    {
      cloud_description: 'Asia, India - Amazon Web Services: Mumbai',
      cloud_name: 'aws-ap-south-1',
      geo_latitude: 19.13,
      geo_longitude: 72.89,
      geo_region: 'south asia'
    },
    {
      cloud_description: 'Asia, India - Azure: Central India',
      cloud_name: 'azure-india-central',
      geo_latitude: 19.08,
      geo_longitude: 72.88,
      geo_region: 'south asia'
    },
    {
      cloud_description: 'Asia, India - Azure: South India',
      cloud_name: 'azure-india-south',
      geo_latitude: 13.08,
      geo_longitude: 80.27,
      geo_region: 'south asia'
    },
    {
      cloud_description: 'Asia, India - Azure: West India',
      cloud_name: 'azure-india-west',
      geo_latitude: 19.13,
      geo_longitude: 72.89,
      geo_region: 'south asia'
    },
    {
      cloud_description: 'Asia, India - DigitalOcean: Bangalore',
      cloud_name: 'do-blr',
      geo_latitude: 12.96,
      geo_longitude: 77.59,
      geo_region: 'south asia'
    },
    {
      cloud_description: 'Asia, India - Google Cloud: Mumbai',
      cloud_name: 'google-asia-south1',
      geo_latitude: 19.08,
      geo_longitude: 72.88,
      geo_region: 'south asia'
    },
    {
      cloud_description: 'Asia, India - Google Cloud: Mumbai, PRE-EMPTIBLE',
      cloud_name: 'google-preemptible-asia-south1',
      geo_latitude: 19.08,
      geo_longitude: 72.88,
      geo_region: 'south asia'
    },
    {
      cloud_description: 'Asia, Japan - Amazon Web Services: Tokyo',
      cloud_name: 'aws-ap-northeast-1',
      geo_latitude: 35.68,
      geo_longitude: 139.68,
      geo_region: 'east asia'
    },
    {
      cloud_description: 'Asia, Japan - Azure: Japan East',
      cloud_name: 'azure-japaneast',
      geo_latitude: 35.68,
      geo_longitude: 139.68,
      geo_region: 'east asia'
    },
    {
      cloud_description: 'Asia, Japan - Azure: Japan West',
      cloud_name: 'azure-japanwest',
      geo_latitude: 35.68,
      geo_longitude: 136.68,
      geo_region: 'east asia'
    },
    {
      cloud_description: 'Asia, Japan - Google Cloud: Osaka',
      cloud_name: 'google-asia-northeast2',
      geo_latitude: 34.694,
      geo_longitude: 135.502,
      geo_region: 'east asia'
    },
    {
      cloud_description: 'Asia, Japan - Google Cloud: Tokyo',
      cloud_name: 'google-asia-northeast1',
      geo_latitude: 35.68,
      geo_longitude: 139.68,
      geo_region: 'east asia'
    },
    {
      cloud_description: 'Asia, Japan - Google Cloud: Tokyo, PRE-EMPTIBLE',
      cloud_name: 'google-preemptible-asia-northeast1',
      geo_latitude: 35.68,
      geo_longitude: 139.68,
      geo_region: 'east asia'
    },
    {
      cloud_description: 'Asia, Korea - Amazon Web Services: Seoul',
      cloud_name: 'aws-ap-northeast-2',
      geo_latitude: 37.57,
      geo_longitude: 126.97,
      geo_region: 'east asia'
    },
    {
      cloud_description: 'Asia, Korea - Azure: Korea Central',
      cloud_name: 'azure-korea-central',
      geo_latitude: 37.57,
      geo_longitude: 126.97,
      geo_region: 'east asia'
    },
    {
      cloud_description: 'Asia, Korea - Azure: Korea South',
      cloud_name: 'azure-korea-south',
      geo_latitude: 35.18,
      geo_longitude: 129.08,
      geo_region: 'east asia'
    },
    {
      cloud_description: 'Asia, Korea - Google Cloud: Seoul',
      cloud_name: 'google-asia-northeast3',
      geo_latitude: 37.57,
      geo_longitude: 126.97,
      geo_region: 'east asia'
    },
    {
      cloud_description: 'Asia, Singapore - Amazon Web Services: Singapore',
      cloud_name: 'aws-ap-southeast-1',
      geo_latitude: 1.3,
      geo_longitude: 103.8,
      geo_region: 'southeast asia'
    },
    {
      cloud_description: 'Asia, Singapore - Azure: Southeast Asia',
      cloud_name: 'azure-southeastasia',
      geo_latitude: 1.3,
      geo_longitude: 103.8,
      geo_region: 'southeast asia'
    },
    {
      cloud_description: 'Asia, Singapore - DigitalOcean: Singapore',
      cloud_name: 'do-sgp',
      geo_latitude: 1.3,
      geo_longitude: 103.8,
      geo_region: 'southeast asia'
    },
    {
      cloud_description: 'Asia, Singapore - Google Cloud: Singapore',
      cloud_name: 'google-asia-southeast1',
      geo_latitude: 1.3,
      geo_longitude: 103.8,
      geo_region: 'southeast asia'
    },
    {
      cloud_description: 'Asia, Singapore - Google Cloud: Singapore, PRE-EMPTIBLE',
      cloud_name: 'google-preemptible-asia-southeast1',
      geo_latitude: 1.3,
      geo_longitude: 103.8,
      geo_region: 'southeast asia'
    },
    {
      cloud_description: 'Asia, Singapore - UpCloud: Singapore',
      cloud_name: 'upcloud-sg-sin',
      geo_latitude: 1.3,
      geo_longitude: 103.8,
      geo_region: 'southeast asia'
    },
    {
      cloud_description: 'Asia, Taiwan - Google Cloud: Taiwan',
      cloud_name: 'google-asia-east1',
      geo_latitude: 23.98,
      geo_longitude: 120.53,
      geo_region: 'east asia'
    },
    {
      cloud_description: 'Asia, Taiwan - Google Cloud: Taiwan, PRE-EMPTIBLE',
      cloud_name: 'google-preemptible-asia-east1',
      geo_latitude: 23.98,
      geo_longitude: 120.53,
      geo_region: 'east asia'
    },
    {
      cloud_description: 'Australia, New South Wales - Amazon Web Services: Sydney',
      cloud_name: 'aws-ap-southeast-2',
      geo_latitude: -33.85,
      geo_longitude: 151.2,
      geo_region: 'australia'
    },
    {
      cloud_description: 'Australia, New South Wales - Azure: Australia East',
      cloud_name: 'azure-australiaeast',
      geo_latitude: -33.85,
      geo_longitude: 151.2,
      geo_region: 'australia'
    },
    {
      cloud_description: 'Australia, New South Wales - Google Cloud: Sydney',
      cloud_name: 'google-australia-southeast1',
      geo_latitude: -33.85,
      geo_longitude: 151.2,
      geo_region: 'australia'
    },
    {
      cloud_description: 'Australia, New South Wales - Google Cloud: Sydney, PRE-EMPTIBLE',
      cloud_name: 'google-preemptible-australia-southeast1',
      geo_latitude: -33.85,
      geo_longitude: 151.2,
      geo_region: 'australia'
    },
    {
      cloud_description: 'Australia, Victoria - Azure: Australia Southeast',
      cloud_name: 'azure-australiasoutheast',
      geo_latitude: -37.7,
      geo_longitude: 145.02,
      geo_region: 'australia'
    },
    {
      cloud_description: 'Canada, Ontario - Azure: Canada Central',
      cloud_name: 'azure-canadacentral',
      geo_latitude: 45.7,
      geo_longitude: -79.4,
      geo_region: 'north america'
    },
    {
      cloud_description: 'Canada, Ontario - DigitalOcean: Toronto',
      cloud_name: 'do-tor',
      geo_latitude: 45.7,
      geo_longitude: -79.4,
      geo_region: 'north america'
    },
    {
      cloud_description: 'Canada, Quebec - Amazon Web Services: Canada Central',
      cloud_name: 'aws-ca-central-1',
      geo_latitude: 45.3,
      geo_longitude: -73.34,
      geo_region: 'north america'
    },
    {
      cloud_description: 'Canada, Quebec - Azure: Canada East',
      cloud_name: 'azure-canadaeast',
      geo_latitude: 50.7,
      geo_longitude: -69.4,
      geo_region: 'north america'
    },
    {
      cloud_description: 'Canada, Quebec - Google Cloud: Montréal',
      cloud_name: 'google-northamerica-northeast1',
      geo_latitude: 45.5,
      geo_longitude: -73.57,
      geo_region: 'north america'
    },
    {
      cloud_description: 'Canada, Quebec - Google Cloud: Montréal, PRE-EMPTIBLE',
      cloud_name: 'google-preemptible-northamerica-northeast1',
      geo_latitude: 45.5,
      geo_longitude: -73.57,
      geo_region: 'north america'
    },
    {
      cloud_description: 'Europe, Belgium - Google Cloud: Belgium',
      cloud_name: 'google-europe-west1',
      geo_latitude: 50.45,
      geo_longitude: 3.82,
      geo_region: 'europe'
    },
    {
      cloud_description: 'Europe, Belgium - Google Cloud: Belgium, PRE-EMPTIBLE',
      cloud_name: 'google-preemptible-europe-west1',
      geo_latitude: 50.45,
      geo_longitude: 3.82,
      geo_region: 'europe'
    },
    {
      cloud_description: 'Europe, England - Amazon Web Services: London',
      cloud_name: 'aws-eu-west-2',
      geo_latitude: 51.5,
      geo_longitude: 0.12,
      geo_region: 'europe'
    },
    {
      cloud_description: 'Europe, England - Azure: UK South',
      cloud_name: 'azure-uksouth',
      geo_latitude: 52.5,
      geo_longitude: 0.12,
      geo_region: 'europe'
    },
    {
      cloud_description: 'Europe, England - DigitalOcean: London',
      cloud_name: 'do-lon',
      geo_latitude: 51.5,
      geo_longitude: 0.12,
      geo_region: 'europe'
    },
    {
      cloud_description: 'Europe, England - Google Cloud: London',
      cloud_name: 'google-europe-west2',
      geo_latitude: 51.5,
      geo_longitude: 0.12,
      geo_region: 'europe'
    },
    {
      cloud_description: 'Europe, England - Google Cloud: London, PRE-EMPTIBLE',
      cloud_name: 'google-preemptible-europe-west2',
      geo_latitude: 51.5,
      geo_longitude: 0.12,
      geo_region: 'europe'
    },
    {
      cloud_description: 'Europe, England - UpCloud: London',
      cloud_name: 'upcloud-uk-lon',
      geo_latitude: 51.5,
      geo_longitude: 0.12,
      geo_region: 'europe'
    },
    {
      cloud_description: 'Europe, Finland - Google Cloud: Finland',
      cloud_name: 'google-europe-north1',
      geo_latitude: 60.5693,
      geo_longitude: 27.1878,
      geo_region: 'europe'
    },
    {
      cloud_description: 'Europe, Finland - UpCloud: Helsinki',
      cloud_name: 'upcloud-fi-hel',
      geo_latitude: 60.17,
      geo_longitude: 24.97,
      geo_region: 'europe'
    },
    {
      cloud_description: 'Europe, France - Amazon Web Services: Paris',
      cloud_name: 'aws-eu-west-3',
      geo_latitude: 48.85,
      geo_longitude: 2.35,
      geo_region: 'europe'
    },
    {
      cloud_description: 'Europe, France - Azure: France Central',
      cloud_name: 'azure-france-central',
      geo_latitude: 48.86,
      geo_longitude: 2.35,
      geo_region: 'europe'
    },
    {
      cloud_description: 'Europe, France - Azure: France South',
      cloud_name: 'azure-france-south',
      geo_latitude: 43.8345,
      geo_longitude: 2.19,
      geo_region: 'europe'
    },
    {
      cloud_description: 'Europe, Germany - Amazon Web Services: Frankfurt',
      cloud_name: 'aws-eu-central-1',
      geo_latitude: 50.12,
      geo_longitude: 8.68,
      geo_region: 'europe'
    },
    {
      cloud_description: 'Europe, Germany - Azure: Germany Central',
      cloud_name: 'azure-germany-central',
      geo_latitude: 50.12,
      geo_longitude: 8.68,
      geo_region: 'europe'
    },
    {
      cloud_description: 'Europe, Germany - Azure: Germany Northeast',
      cloud_name: 'azure-germany-northeast',
      geo_latitude: 52.13,
      geo_longitude: 11.62,
      geo_region: 'europe'
    },
    {
      cloud_description: 'Europe, Germany - DigitalOcean: Frankfurt',
      cloud_name: 'do-fra',
      geo_latitude: 50.12,
      geo_longitude: 8.68,
      geo_region: 'europe'
    },
    {
      cloud_description: 'Europe, Germany - Google Cloud: Frankfurt',
      cloud_name: 'google-europe-west3',
      geo_latitude: 50.12,
      geo_longitude: 8.68,
      geo_region: 'europe'
    },
    {
      cloud_description: 'Europe, Germany - Google Cloud: Frankfurt, PRE-EMPTIBLE',
      cloud_name: 'google-preemptible-europe-west3',
      geo_latitude: 50.12,
      geo_longitude: 8.68,
      geo_region: 'europe'
    },
    {
      cloud_description: 'Europe, Germany - UpCloud: Frankfurt',
      cloud_name: 'upcloud-de-fra',
      geo_latitude: 50.12,
      geo_longitude: 8.68,
      geo_region: 'europe'
    },
    {
      cloud_description: 'Europe, Ireland - Amazon Web Services: Ireland',
      cloud_name: 'aws-eu-west-1',
      geo_latitude: 53.33,
      geo_longitude: -6.25,
      geo_region: 'europe'
    },
    {
      cloud_description: 'Europe, Ireland - Azure: North Europe',
      cloud_name: 'azure-northeurope',
      geo_latitude: 53.33,
      geo_longitude: -6.25,
      geo_region: 'europe'
    },
    {
      cloud_description: 'Europe, Netherlands - Azure: West Europe',
      cloud_name: 'azure-westeurope',
      geo_latitude: 52.37,
      geo_longitude: 4.9,
      geo_region: 'europe'
    },
    {
      cloud_description: 'Europe, Netherlands - DigitalOcean: Amsterdam',
      cloud_name: 'do-ams',
      geo_latitude: 52.37,
      geo_longitude: 4.9,
      geo_region: 'europe'
    },
    {
      cloud_description: 'Europe, Netherlands - Google Cloud: Netherlands',
      cloud_name: 'google-europe-west4',
      geo_latitude: 53.44,
      geo_longitude: 6.84,
      geo_region: 'europe'
    },
    {
      cloud_description: 'Europe, Netherlands - Google Cloud: Netherlands, PRE-EMPTIBLE',
      cloud_name: 'google-preemptible-europe-west4',
      geo_latitude: 53.44,
      geo_longitude: 6.84,
      geo_region: 'europe'
    },
    {
      cloud_description: 'Europe, Netherlands - UpCloud: Amsterdam',
      cloud_name: 'upcloud-nl-ams',
      geo_latitude: 52.37,
      geo_longitude: 4.9,
      geo_region: 'europe'
    },
    {
      cloud_description: 'Europe, Sweden - Amazon Web Services: Stockholm',
      cloud_name: 'aws-eu-north-1',
      geo_latitude: 59.3293,
      geo_longitude: 18.0686,
      geo_region: 'europe'
    },
    {
      cloud_description: 'Europe, Switzerland - Google Cloud: Zürich',
      cloud_name: 'google-europe-west6',
      geo_latitude: 47.378,
      geo_longitude: 8.539,
      geo_region: 'europe'
    },
    {
      cloud_description: 'Europe, Wales - Azure: UK West',
      cloud_name: 'azure-ukwest',
      geo_latitude: 48.5,
      geo_longitude: 0.12,
      geo_region: 'europe'
    },
    {
      cloud_description: 'South America, Brazil - Amazon Web Services: São Paulo',
      cloud_name: 'aws-sa-east-1',
      geo_latitude: -23.55,
      geo_longitude: -46.63,
      geo_region: 'south america'
    },
    {
      cloud_description: 'South America, Brazil - Azure: Brazil South',
      cloud_name: 'azure-brazilsouth',
      geo_latitude: -23.55,
      geo_longitude: -46.63,
      geo_region: 'south america'
    },
    {
      cloud_description: 'South America, Brazil - Google Cloud: Sao Paulo',
      cloud_name: 'google-southamerica-east1',
      geo_latitude: -23.53,
      geo_longitude: -46.625,
      geo_region: 'south america'
    },
    {
      cloud_description: 'South America, Brazil - Google Cloud: Sao Paulo, PRE-EMPTIBLE',
      cloud_name: 'google-preemptible-southamerica-east1',
      geo_latitude: -23.53,
      geo_longitude: -46.625,
      geo_region: 'south america'
    },
    {
      cloud_description: 'United States, California - Amazon Web Services: N. California',
      cloud_name: 'aws-us-west-1',
      geo_latitude: 37.78,
      geo_longitude: -122.42,
      geo_region: 'north america'
    },
    {
      cloud_description: 'United States, California - Azure: West US',
      cloud_name: 'azure-westus',
      geo_latitude: 37.78,
      geo_longitude: -122.42,
      geo_region: 'north america'
    },
    {
      cloud_description: 'United States, California - DigitalOcean: San Francisco',
      cloud_name: 'do-sfo',
      geo_latitude: 37.78,
      geo_longitude: -122.42,
      geo_region: 'north america'
    },
    {
      cloud_description: 'United States, California - Google Cloud: Los Angeles',
      cloud_name: 'google-us-west2',
      geo_latitude: 34.05,
      geo_longitude: -118.24,
      geo_region: 'north america'
    },
    {
      cloud_description: 'United States, California - UpCloud: San Jose',
      cloud_name: 'upcloud-us-sjo',
      geo_latitude: 37.3,
      geo_longitude: -121.96,
      geo_region: 'north america'
    },
    {
      cloud_description: 'United States, Illinois - Azure: North Central US',
      cloud_name: 'azure-northcentralus',
      geo_latitude: 41.83,
      geo_longitude: -87.85,
      geo_region: 'north america'
    },
    {
      cloud_description: 'United States, Illinois - UpCloud: Chicago',
      cloud_name: 'upcloud-us-chi',
      geo_latitude: 41.83,
      geo_longitude: -87.85,
      geo_region: 'north america'
    },
    {
      cloud_description: 'United States, Iowa - Azure: Central US',
      cloud_name: 'azure-centralus',
      geo_latitude: 41.25,
      geo_longitude: -95.87,
      geo_region: 'north america'
    },
    {
      cloud_description: 'United States, Iowa - Google Cloud: Iowa',
      cloud_name: 'google-us-central1',
      geo_latitude: 41.25,
      geo_longitude: -95.87,
      geo_region: 'north america'
    },
    {
      cloud_description: 'United States, Iowa - Google Cloud: Iowa, PRE-EMPTIBLE',
      cloud_name: 'google-preemptible-us-central1',
      geo_latitude: 41.25,
      geo_longitude: -95.87,
      geo_region: 'north america'
    },
    {
      cloud_description: 'United States, New York - DigitalOcean: New York',
      cloud_name: 'do-nyc',
      geo_latitude: 40.7,
      geo_longitude: -70,
      geo_region: 'north america'
    },
    {
      cloud_description: 'United States, Ohio - Amazon Web Services: Ohio',
      cloud_name: 'aws-us-east-2',
      geo_latitude: 40.24,
      geo_longitude: -82.88,
      geo_region: 'north america'
    },
    {
      cloud_description: 'United States, Oregon - Amazon Web Services: Oregon',
      cloud_name: 'aws-us-west-2',
      geo_latitude: 45.52,
      geo_longitude: -122.67,
      geo_region: 'north america'
    },
    {
      cloud_description: 'United States, Oregon - Google Cloud: Oregon',
      cloud_name: 'google-us-west1',
      geo_latitude: 45.52,
      geo_longitude: -122.67,
      geo_region: 'north america'
    },
    {
      cloud_description: 'United States, Oregon - Google Cloud: Oregon, PRE-EMPTIBLE',
      cloud_name: 'google-preemptible-us-west1',
      geo_latitude: 45.52,
      geo_longitude: -122.67,
      geo_region: 'north america'
    },
    {
      cloud_description: 'United States, South Carolina - Google Cloud: South Carolina',
      cloud_name: 'google-us-east1',
      geo_latitude: 33,
      geo_longitude: -80.03,
      geo_region: 'north america'
    },
    {
      cloud_description: 'United States, South Carolina - Google Cloud: South Carolina, PRE-EMPTIBLE',
      cloud_name: 'google-preemptible-us-east1',
      geo_latitude: 33,
      geo_longitude: -80.03,
      geo_region: 'north america'
    },
    {
      cloud_description: 'United States, Texas - Azure: South Central US',
      cloud_name: 'azure-southcentralus',
      geo_latitude: 33,
      geo_longitude: -98.5,
      geo_region: 'north america'
    },
    {
      cloud_description: 'United States, Virginia - Amazon Web Services: N. Virginia',
      cloud_name: 'aws-us-east-1',
      geo_latitude: 38.7,
      geo_longitude: -78.15,
      geo_region: 'north america'
    },
    {
      cloud_description: 'United States, Virginia - Azure: East US',
      cloud_name: 'azure-eastus',
      geo_latitude: 38.7,
      geo_longitude: -78.15,
      geo_region: 'north america'
    },
    {
      cloud_description: 'United States, Virginia - Azure: East US 2',
      cloud_name: 'azure-eastus2',
      geo_latitude: 38.7,
      geo_longitude: -78.15,
      geo_region: 'north america'
    },
    {
      cloud_description: 'United States, Virginia - Google Cloud: Northern Virginia',
      cloud_name: 'google-us-east4',
      geo_latitude: 38.7,
      geo_longitude: -78.15,
      geo_region: 'north america'
    },
    {
      cloud_description: 'United States, Virginia - Google Cloud: Northern Virginia, PRE-EMPTIBLE',
      cloud_name: 'google-preemptible-us-east4',
      geo_latitude: 38.7,
      geo_longitude: -78.15,
      geo_region: 'north america'
    },
    {
      cloud_description: 'United States, Washington - Azure: West US 2',
      cloud_name: 'azure-westus2',
      geo_latitude: 45.52,
      geo_longitude: -122.67,
      geo_region: 'north america'
    },
    {
      cloud_description: 'United States, Wyoming - Azure: West Central US',
      cloud_name: 'azure-westcentralus',
      geo_latitude: 45.52,
      geo_longitude: -110.67,
      geo_region: 'north america'
    }
  ]
}

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

function formatData (object) {
  const formattedData = []
  object.data.forEach((cloud) => {
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
                65,
                25,
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

  return { data: formattedData }
}

export default formatData(testObject)
