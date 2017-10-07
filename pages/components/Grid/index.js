import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import { GridList, GridListTile, GridListTileBar } from 'material-ui/GridList';
import Subheader from 'material-ui/List/ListSubheader';
import IconButton from 'material-ui/IconButton';
import InfoIcon from 'material-ui-icons/Info';
import Typography from 'material-ui/Typography';

import User from '../User'

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'scroll'
  },
  gridList: {
    width: '100%',
    height: 600
  },
});

function Grid(props) {
  const { classes, users, city, onSelectCity } = props;

  const gridListStyle = {
    width: city ? '80%' : 0,
    maxWidth: 1450,
    height: city ? 750 : 0
  }

  return (
    <div className={`${classes.container} fade`}>
      <GridList cellHeight={180} style={gridListStyle}>
        <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
          {users && users.length ?
            <Typography type="title" className={classes.title} onClick={onSelectCity.bind(this, null)}>
              {city}
            </Typography>
          : null}
        </GridListTile>
        {users && users.map((user, i) => <User key={`User_${i}`} {...user} />)}
      </GridList>
    </div>
  );
}

Grid.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Grid);
