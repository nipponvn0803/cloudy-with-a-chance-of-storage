// Dialog example provided by Material UI
import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import {
  Button,
  Dialog,
  DialogTitle,
  DialogActions,
  DialogContent,
  Table,
  TableBody,
  TableHead,
  TableRow,
  TableCell
} from '@material-ui/core/'
import { blue } from '@material-ui/core/colors'

const useStyles = makeStyles({
  avatar: {
    backgroundColor: blue[100],
    color: blue[600]
  }
})

export default function SimpleDialog (props) {
  const classes = useStyles()
  const { onClose, selectedValue, open } = props

  const handleClose = () => {
    onClose(selectedValue)
  }

  return (
    <Dialog onClose={handleClose} aria-labelledby="simple-dialog-title" open={open}>
      <DialogTitle>Selected cloud</DialogTitle>

      <DialogContent>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Cloud&nbsp;name</TableCell>
              <TableCell align="center">Provider</TableCell>
              <TableCell align="center">Location</TableCell>
              <TableCell align="center">Region</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow >
              <TableCell component="th" scope="row">
                {selectedValue.cloudName}
              </TableCell>
              <TableCell align="center">{selectedValue.provider}</TableCell>
              <TableCell align="center">{selectedValue.location}</TableCell>
              <TableCell align="center">
                {selectedValue.region}
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </DialogContent>

      <DialogActions>
        <Button onClick={handleClose} color="primary">
            Close
        </Button>
      </DialogActions>
    </Dialog>
  )
}

SimpleDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  selectedValue: PropTypes.object.isRequired
}
