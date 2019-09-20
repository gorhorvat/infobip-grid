import CellModel, { isCellModel } from './cell-model';

const cellParam: CellModel = {
    id: 0,
    value: 1,
    isClicked: false
};

describe('isCellModel', () => {
    it('should return true for a Cell', () => {
        expect(isCellModel(cellParam)).toBe(true);
    });
});
