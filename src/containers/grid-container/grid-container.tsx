import React, { Component } from 'react';
import Grid from '../../components/grid/grid';
import { observer } from 'mobx-react';

@observer
class GridContainer extends Component {
  render() {
    return <Grid columns={9} rows={7} size='large' />;
  }
}

export default GridContainer;
