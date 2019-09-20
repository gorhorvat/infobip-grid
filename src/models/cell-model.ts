import _ from 'lodash';

interface CellModel {
  id: number;
  value: number;
  isClicked: boolean;
}

export function isCellModel(arg: any): arg is CellModel {
  return !!(
      arg
      && _.isNumber(arg.id)
      && _.isNumber(arg.value)
      && _.isBoolean(arg.isClicked)
  );
}

export default CellModel;