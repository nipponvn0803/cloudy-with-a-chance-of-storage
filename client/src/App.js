import React, { useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import {
  CircularProgress,
  Input,
  InputLabel,
  MenuItem,
  FormControl,
  ListItemText,
  Select,
  Checkbox,
  Paper,
  TableContainer,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TableSortLabel,
  useMediaQuery
} from '@material-ui/core'
import SimpleDialog from './Dialog'

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    width: '35%'
  },
  formControlSmall: {
    margin: theme.spacing(1),
    minWidth: 120,
    width: '20%'
  },
  formControlMobile: {
    margin: theme.spacing(1),
    minWidth: 120,
    width: '90%'
  },
  loading: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: 20
  }
}))

const ITEM_HEIGHT = 48
const ITEM_PADDING_TOP = 8
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250
    }
  }
}

function App () {
  const classes = useStyles()
  const mobile = useMediaQuery('(max-width:800px)')
  const [error, setError] = useState(null)
  const [isLoaded, setIsLoaded] = useState(false)

  // table data
  const [initialData, setInitialData] = useState([])
  const [data, setData] = useState([])

  // provider selection
  const [initialProviders, setInitialProviders] = useState([])
  const [selectedProviderName, setSelectedProviderName] = useState([])

  // regions selection
  const [initialRegions, setInitialRegions] = useState([])
  const [selectedRegions, setSelectedRegions] = useState([])

  // distance sorting
  const [selectedSort, setSelectedSort] = useState('Nearest')
  const [userLocation, setUserLocation] = useState({
    geo_latitude: null,
    geo_longitude: null
  })
  const [locationError, setLocationError] = useState(null)

  // dialog state
  const [open, setOpen] = React.useState(false)
  const [selectedValue, setSelectedValue] = useState({})

  const handleClickOpen = (selectedCloud) => {
    setSelectedValue(selectedCloud)
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const saveUserLocation = position => {
    setUserLocation({
      geo_latitude: position.coords.latitude,
      geo_longitude: position.coords.longitude
    })
  }

  // geolocation error cases by w3schools
  // https://www.w3schools.com/html/html5_geolocation.asp
  const showError = error => {
    switch (error.code) {
      case error.PERMISSION_DENIED:
        setLocationError('User denied the request for Geolocation.')
        break
      case error.POSITION_UNAVAILABLE:
        setLocationError('Location information is unavailable.')
        break
      case error.TIMEOUT:
        setLocationError('The request to get user location timed out.')
        break
      case error.UNKNOWN_ERROR:
        setLocationError('An unknown error occurred.')
        break
      default:
        break
    }
  }

  const handleChange = (event, param) => {
    switch (param) {
      case 0:
        setSelectedProviderName(event.target.value)
        break
      case 1:
        setSelectedRegions(event.target.value)
        break
      case 2:
        setSelectedSort(event.target.value)
        break
      default:
        break
    }
  }

  useEffect(() => {
    // check for user location
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(saveUserLocation, showError)
    } else {
      // in case the browser does not support geolocation,
      // set the coords to (0,0)
      saveUserLocation({ coords: { latitude: 0, longitude: 0 } })
      alert('Geolocation is not supported by this browser.')
    }
  }, [])

  useEffect(() => {
    if (
      userLocation.geo_latitude !== null &&
      userLocation.geo_longitude !== null
    ) {
      // fetch data from server.js
      fetch(
        `http://localhost:3001/api/getData?lat=${userLocation.geo_latitude}&long=${userLocation.geo_longitude}`
      )
        .then(res => res.json())
        .then(
          result => {
            // finish loading
            setIsLoaded(true)

            // initiate data
            setInitialData(result.data)
            setData(
              result.data.sort(function (a, b) {
                return a.distance - b.distance
              })
            )

            // initiate providers
            setInitialProviders([
              ...new Set(result.data.map(cloud => cloud.provider))
            ])
            setSelectedProviderName([
              ...new Set(result.data.map(cloud => cloud.provider))
            ])

            // initiate regions
            setInitialRegions([
              ...new Set(result.data.map(cloud => cloud.region))
            ])
            setSelectedRegions([
              ...new Set(result.data.map(cloud => cloud.region))
            ])
          },

          error => {
            setIsLoaded(true)
            setError(error)
          }
        )
    } else {
      // if user does not allowed geolocation
      fetch('http://localhost:3001/api/getData?lat=0&long=0')
        .then(res => res.json())
        .then(
          result => {
            setIsLoaded(true)
            setInitialData(result.data)
            setData(
              result.data.sort(function (a, b) {
                return a.distance - b.distance
              })
            )

            setInitialProviders([
              ...new Set(result.data.map(cloud => cloud.provider))
            ])
            setSelectedProviderName([
              ...new Set(result.data.map(cloud => cloud.provider))
            ])
          },

          error => {
            setIsLoaded(true)
            setError(error)
          }
        )
    }
  }, [userLocation])

  useEffect(() => {
    // since React does not seem to count sorting as updating state
    // I have to create a copy of the array
    const initialDataCopy = [...initialData]

    setData(
      initialDataCopy
        .filter(function (cloud) {
          return selectedProviderName.indexOf(cloud.provider) !== -1
        })
        .filter(function (cloud) {
          return selectedRegions.indexOf(cloud.region) !== -1
        })
        .sort(function (a, b) {
          return selectedSort === 'Nearest'
            ? a.distance - b.distance
            : b.distance - a.distance
        })
    )
  }, [selectedSort, selectedProviderName, selectedRegions])

  if (error) {
    return <div>Error: {error.message}</div>
  } else if (!isLoaded) {
    return (
      <div style={{ padding: mobile ? '5px 10px' : '10px 20px' }}>
        <div style={{ display: 'flex', flexDirection: mobile ? 'column' : 'row', justifyContent: 'space-between' }}>
          <FormControl className={mobile ? classes.formControlMobile : classes.formControl}>
            <InputLabel>Provider</InputLabel>
            <Select
              multiple
              value={''}
              input={<Input />}
              renderValue={selected => selected.join(', ')}
              MenuProps={MenuProps}
            >
            </Select>
          </FormControl>

          <FormControl className={mobile ? classes.formControlMobile : classes.formControl}>
            <InputLabel>Regions</InputLabel>
            <Select
              multiple
              value={''}
              input={<Input />}
              renderValue={selected => selected.join(', ')}
              MenuProps={MenuProps}
            >
            </Select>
          </FormControl>

          <FormControl className={mobile ? classes.formControlMobile : classes.formControlSmall}>
            <InputLabel>Sort by distance</InputLabel>
            <Select value={selectedSort} onChange={e => handleChange(e, 2)}>
              <MenuItem value={'Nearest'}>Nearest first</MenuItem>
              <MenuItem value={'Farthest'}>Farthest first</MenuItem>
            </Select>
          </FormControl>
        </div>

        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Cloud&nbsp;name</TableCell>
                <TableCell align="center">Provider</TableCell>
                <TableCell align="center">Location</TableCell>
                <TableCell align="center">Region</TableCell>
                <TableCell align="center">
                  <TableSortLabel
                    active={true}
                    direction={selectedSort === 'Nearest' ? 'asc' : 'desc'}
                    onClick={() => setSelectedSort(selectedSort === 'Nearest' ? 'Farthest' : 'Nearest')}
                  >
                Distance&nbsp;(km)
                  </TableSortLabel>
                </TableCell>
              </TableRow>
            </TableHead>
          </Table>
        </TableContainer>
        <div data-testid="circular-progress-div" className={classes.loading}>
          <CircularProgress />
        </div>
      </div>)
  } else {
    return (
      <div style={{ padding: mobile ? '5px 10px' : '10px 20px' }}>
        <div style={{ display: 'flex', flexDirection: mobile ? 'column' : 'row', justifyContent: 'space-between' }}>
          <FormControl className={mobile ? classes.formControlMobile : classes.formControl}>
            <InputLabel>Provider</InputLabel>
            <Select
              multiple
              value={selectedProviderName}
              onChange={e => handleChange(e, 0)}
              input={<Input />}
              renderValue={selected => selected.join(', ')}
              MenuProps={MenuProps}
            >
              {initialProviders.map(name => (
                <MenuItem key={name} value={name}>
                  <Checkbox checked={selectedProviderName.indexOf(name) > -1} />
                  <ListItemText primary={name} />
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <FormControl className={mobile ? classes.formControlMobile : classes.formControl}>
            <InputLabel>Regions</InputLabel>
            <Select
              multiple
              value={selectedRegions}
              onChange={e => handleChange(e, 1)}
              input={<Input />}
              renderValue={selected => selected.join(', ')}
              MenuProps={MenuProps}
            >
              {initialRegions.map(name => (
                <MenuItem key={name} value={name}>
                  <Checkbox checked={selectedRegions.indexOf(name) > -1} />
                  <ListItemText primary={name} />
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <FormControl className={mobile ? classes.formControlMobile : classes.formControlSmall}>
            <InputLabel>Sort by distance</InputLabel>
            <Select value={selectedSort} onChange={e => handleChange(e, 2)}>
              <MenuItem value={'Nearest'}>Nearest first</MenuItem>
              <MenuItem value={'Farthest'}>Farthest first</MenuItem>
            </Select>
          </FormControl>
        </div>

        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Cloud&nbsp;name</TableCell>
                <TableCell align="center">Provider</TableCell>
                <TableCell align="center">Location</TableCell>
                <TableCell align="center">Region</TableCell>
                <TableCell align="center">
                  <TableSortLabel
                    active={true}
                    direction={selectedSort === 'Nearest' ? 'asc' : 'desc'}
                    onClick={() => setSelectedSort(selectedSort === 'Nearest' ? 'Farthest' : 'Nearest')}
                  >
                    Distance&nbsp;(km)
                  </TableSortLabel>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map(row => (
                <TableRow
                  data-testid="cloud-row"
                  key={`${row.cloudName} ${row.provider} ${row.region}`}
                  onClick={() => handleClickOpen({
                    cloudName: row.cloudName,
                    provider: row.provider,
                    location: row.location,
                    region: row.region
                  })}
                >
                  <TableCell component="th" scope="row">
                    {row.cloudName}
                  </TableCell>
                  <TableCell align="center">{row.provider}</TableCell>
                  <TableCell align="center">{row.location}</TableCell>
                  <TableCell align="center">
                    {row.region}
                  </TableCell>
                  <TableCell align="center">
                    {locationError || row.distance}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        <SimpleDialog selectedValue={selectedValue} open={open} onClose={handleClose} />
      </div>
    )
  }
}

export default App
