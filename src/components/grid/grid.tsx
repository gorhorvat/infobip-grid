import React, { Component } from 'react';
import classNames from 'classnames';
import './grid.css';

interface Props {
  columns: number;
  rows: number;
  size: GridSize;
}

export enum GridSize {
  small = 20,
  medium = 35,
  large = 50
}

class Grid extends Component<Props> {
  render() {
    return (
      <div className={classNames('grid', `grid-${GridSize[this.props.size]}`)}>
        {this.renderGridElements()}
      </div>
    );
  }

  renderGridElements = () => {
    let elements = [];
    for (let i = 0; i < this.props.rows * this.props.columns; i++) {
      elements.push(<div>Grid element</div>);
    }

    return elements;
  };
}

export default Grid;
