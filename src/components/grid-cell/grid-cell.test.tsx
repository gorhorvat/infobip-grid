import React from "react";
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import GridCell from "./grid-cell";
import CellModel from "../../models/cell-model";

describe('GridCell', () => {
  const cellParam: CellModel = {
    id: 0,
    value: 1,
    isClicked: false
  }

  function setup(isClicked: boolean) {
    return shallow(<GridCell cell={{ ...cellParam, isClicked: isClicked }} onCellClick={jest.fn()} />);
  }

  it('Renders without crashing', () => {
    // Arrange
    const wrapper = setup(false);

    // Assert
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('When cell is clicked should show value', () => {
    // Arrange
    const wrapper = setup(true);

    // Assert
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('When cell is clicked should not show value', () => {
    // Arrange
    const wrapper = setup(false);

    // Assert
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});