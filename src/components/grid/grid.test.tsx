import React from "react";
import { shallow } from 'enzyme';
import Grid from "./grid";
import toJson from 'enzyme-to-json';
import GridCell from "../grid-cell/grid-cell";

describe('Grid', () => {
  function setup(columns: number, rows: number) {
    return shallow(<Grid columns={columns} rows={rows} size="small" />);
  }

  it('Renders without crashing', () => {
    // Arrange
    const wrapper = setup(1, 1);

    // Assert
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('When grid cell is clicked its cell props should change', () => {
    // Arrange
    const wrapper = setup(1, 1);
    const cell = wrapper.find(GridCell);

    // Act
    cell.props().onCellClick();

    // Assert
    expect(cell.props().cell.isClicked).toBe(true);
  });

  it('When max number of cells is passed should render max number of cells (99)', () => {
    // Arrange
    const wrapper = setup(10, 10);

    // Assert
    expect(wrapper.find(GridCell).length).toBe(99);
  });
});