import { observer } from 'mobx-react';
import { observable, action } from 'mobx';
import classNames from 'classnames';
import React, { Component } from 'react';

import GridCell from '../grid-cell/grid-cell';
import CellModel from '../../models/cell-model';

import './grid.less';

interface Props {
  columns: number;
  rows: number;
  size: GridSize;
}

type GridSize = 'small' | 'medium' | 'large';

@observer
class Grid extends Component<Props> {
  @observable private cells: CellModel[] = [];
  private readonly maxNumberOfCells: number = 99;

  render() {
    return (
      <div className={classNames('grid', `grid--${this.props.size}`)}>
        {this.renderTable()}
      </div>
    );
  }

  private renderTable = (): JSX.Element => {
    return (
      <table>
        <tbody>{this.renderRows()}</tbody>
      </table>
    );
  };

  private renderRows = (): JSX.Element[] => {
    let rows: JSX.Element[] = [];
    for (let row = 0; row < this.props.rows; row++) {
      rows.push(<tr key={row}>{this.renderCells()}</tr>);
    }

    return rows;
  };

  private renderCells = (): JSX.Element[] => {
    const cells: JSX.Element[] = [];
    for (let col = 0; col < this.props.columns; col++) {
      if (this.cells.length < this.maxNumberOfCells) {
        this.addCell({
          id: this.cells.length,
          value: this.getRandomValue(),
          isClicked: false
        });

        const activeCell: CellModel = this.getActiveCell();

        cells.push(
          <GridCell
            key={activeCell.id}
            cell={activeCell}
            onCellClick={() => this.handleCellClick(activeCell)}
          />
        );
      }
    }

    return cells;
  };

  private getRandomValue = (): number => {
    let numberOfCells: number = this.props.columns * this.props.rows;
    if (numberOfCells > this.maxNumberOfCells) {
      numberOfCells = this.maxNumberOfCells;
    }

    const randomNumber: number = Math.floor(Math.random() * numberOfCells) + 1;

    if (!this.cells.find(cell => cell.value === randomNumber)) {
      return randomNumber;
    }
    return this.getRandomValue();
  };

  private getActiveCell = (): CellModel => {
    return this.cells.find(cell => cell.id === this.cells[this.cells.length -1].id)!;
  }

  @action
  private addCell = (newCell: CellModel): void => {
    this.cells.push(newCell);
  };

  @action
  private handleCellClick = (editedCell: CellModel): void => {
    const cellIndex: number = this.cells.findIndex(
      cell => cell.id === editedCell.id
    );
    if (cellIndex >= 0) {
      this.cells[cellIndex].isClicked = !this.cells[cellIndex].isClicked;
    }
  };
}

export default Grid;
