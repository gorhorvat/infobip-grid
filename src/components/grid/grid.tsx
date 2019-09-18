import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { observable, action } from 'mobx';
import './grid.css';
import GridCell from '../grid-cell/grid-cell';
import CellModel from '../../models/cell-model';
import classNames from 'classnames';

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

  renderTable = () => {
    return (
      <table>
        <tbody>{this.getRows()}</tbody>
      </table>
    );
  };

  getRows = () => {
    let rows: JSX.Element[] = [];
    for (let row = 0; row < this.props.columns; row++) {
      rows.push(<tr key={row}>{this.getRowCells()}</tr>);
    }

    return rows;
  };

  getRowCells = () => {
    let cells: JSX.Element[] = [];
    for (let col = 0; col < this.props.rows; col++) {
      if (this.cells.length < this.maxNumberOfCells) {
        const newCell: CellModel = {
          id: this.cells.length,
          value: this.getRandomValue(),
          isClicked: false
        };

        this.addCell(newCell);

        cells.push(
          <GridCell
            key={newCell.id}
            cell={this.cells.find(cell => cell.id === newCell.id)!}
            onCellClick={() => this.handleCellClick(newCell)}
          />
        );
      }
    }

    return cells;
  };

  getRandomValue = (): number => {
    let numberOfCells: number = this.props.columns * this.props.rows;
    if (numberOfCells > this.maxNumberOfCells) {
      numberOfCells = this.maxNumberOfCells;
    }

    let randomNumber: number = Math.floor(Math.random() * numberOfCells) + 1;

    if (!this.cells.find(cell => cell.value === randomNumber)) {
      return randomNumber;
    }
    return this.getRandomValue();
  };

  @action
  addCell = (newCell: CellModel) => {
    this.cells.push(newCell);
  };

  @action
  handleCellClick = (editedCell: CellModel) => {
    const cellIndex: number = this.cells.findIndex(
      cell => cell.id === editedCell.id
    );
    if (cellIndex >= 0) {
      this.cells[cellIndex].isClicked = !this.cells[cellIndex].isClicked;
    }
  };

  render() {
    return (
      <div className={classNames('grid', `grid--${this.props.size}`)}>
        {this.renderTable()}
      </div>
    );
  }
}

export default Grid;
