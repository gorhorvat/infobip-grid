import { observer } from 'mobx-react';
import React from 'react';
import classNames from 'classnames';

import CellModel from '../../models/cell-model';

import './grid-cell.less';

interface Props {
  cell: CellModel;
  onCellClick: () => void;
}

function GridCell(props: Props) {
  return (
    <td
      key={props.cell.id}
      className={classNames(
        'grid-cell',
        `grid-cell--${props.cell.isClicked ? 'active' : 'inactive'}`
      )}
      onClick={props.onCellClick}
    >
      {props.cell.isClicked && props.cell.value}
    </td>
  );
}

export default observer(GridCell);
