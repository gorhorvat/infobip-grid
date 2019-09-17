import React, { Component } from 'react';
import Grid, { GridSize } from '../../components/grid/grid';

class GridContainer extends Component {
  render() {
    return <Grid columns={3} rows={3} size={GridSize.medium} />;
  }
}

export default GridContainer;
