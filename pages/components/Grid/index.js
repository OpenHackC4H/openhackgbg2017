import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import { GridList, GridListTile, GridListTileBar } from 'material-ui/GridList';
import Subheader from 'material-ui/List/ListSubheader';
import IconButton from 'material-ui/IconButton';
import InfoIcon from 'material-ui-icons/Info';

import User from '../User'

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    overflow: 'hidden'
  },
  gridList: {
    width: '90%',
    height: 450,
  },
});

function Grid(props) {
  const { classes, users, city } = props;

  return (
    <div className={classes.container}>
      <GridList cellHeight={180} className={classes.gridList}>
        {users && users.map((user, i) => <User key={`User_${i}`}{...user} />)}
      </GridList>
    </div>
  );
}

Grid.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Grid);
