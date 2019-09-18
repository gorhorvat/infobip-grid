import React, { Component } from 'react';
import Grid from '../../components/grid/grid';
import { observer } from 'mobx-react';

@observer
class GridContainer extends Component {
  render() {
    return <Grid columns={10} rows={13} size='large' />;
  }
}

export default GridContainer;
