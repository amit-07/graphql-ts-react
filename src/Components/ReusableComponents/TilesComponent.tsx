import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import { AnyRecord } from 'dns';
// import tileData from './tileData';

interface Continent{
    name: string;
    code: string;
}

type Language = {
    code: String;
    name: String;
    native: String;
  }
  

interface Country{
        code: string
        name: string
        native: string
        phone: string
        continent: Continent
        capital: string
        currency: string
        languages: [Language]
}

const tilesData : Continent[] | Country[] = [
    {
      "name": "Africa",
      "code": "AF"
    },
    {
      "name": "Antarctica",
      "code": "AN"
    },
    {
      "name": "Asia",
      "code": "AS"
    },
    {
      "name": "Europe",
      "code": "EU"
    },
    {
      "name": "North America",
      "code": "NA"
    },
    {
      "name": "Oceania",
      "code": "OC"
    },
    {
      "name": "South America",
      "code": "SA"
    }
];

const styles: any = (theme: any) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: 500,
    height: 450,
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: 'translateZ(0)',
  },
  titleBar: {
    background:
      'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' +
      'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
  },
  icon: {
    color: 'white',
  },
});

const AdvancedGridList = (props: { classes: any }) => {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <GridList cellHeight={200} spacing={1} className={classes.gridList}>
        {tilesData.map(tile => (
          <GridListTile key={tile.code} cols={tile.name ? 2 : 1} rows={tile.name ? 2 : 1}>
            {/* <img src={tile.img} alt={tile.title} /> */}
            <GridListTileBar
              title={tile.name}
              titlePosition="top"
              actionIcon={
                <IconButton className={classes.icon}>
                  <StarBorderIcon />
                </IconButton>
              }
              actionPosition="left"
              className={classes.titleBar}
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}

AdvancedGridList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AdvancedGridList);