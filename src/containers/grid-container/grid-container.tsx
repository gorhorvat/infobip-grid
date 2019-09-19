import { observer } from 'mobx-react';
import React, { Component } from 'react';

import Grid from '../../components/grid/grid';

@observer
class GridContainer extends Component {
  render() {
    return <Grid columns={10} rows={9} size='large' />;
  }
}

export default GridContainer;
