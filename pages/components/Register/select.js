import React from 'react'
import { withStyles } from 'material-ui/styles'
import Input, { InputLabel } from 'material-ui/Input'
import { MenuItem } from 'material-ui/Menu'
import { FormControl, FormHelperText } from 'material-ui/Form'
import Select from 'material-ui/Select'

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120,
  }
})

class SimpleSelect extends React.Component {

  renderMenuItem (value) {
    return (
      <MenuItem value={value}>
        {value}
      </MenuItem>
    )
  }

  render() {
    const { selectedValue, values, classes, label, onChange } = this.props

    return (
      <form className={classes.container} autoComplete="off">
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="age-simple">{label}</InputLabel>
          <Select
            value={selectedValue}
            onChange={onChange}
            input={<Input id="age-simple" />}>
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            {values.map(this.renderMenuItem)}
          </Select>
        </FormControl>

      </form>
    )
  }
}

export default withStyles(styles)(SimpleSelect)
