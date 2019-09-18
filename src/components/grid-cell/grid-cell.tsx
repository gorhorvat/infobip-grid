import React from 'react';
import CellModel from '../../models/cell-model';
import './grid-cell.css';
import classNames from 'classnames';
import { observer } from 'mobx-react';

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
