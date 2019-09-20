import React from "react";
import { shallow } from 'enzyme';
import GridContainer from "./grid-container";
import toJson from 'enzyme-to-json';

describe('GridContainer', () => {
  function setup() {
    return shallow(<GridContainer />);
  }

  it('Renders without crashing', () => {
    // Arrange
    const wrapper = setup();

    // Assert
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});