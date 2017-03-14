var findMinMax = require('../apps/minmaxofanarray.js').minMax;
(function() {
  'use strict';

  describe('Min-Max Numbers in a List: ', function () {

    describe('Return the min and max number in the list in a new list follows `[min, max]`', function () {

      it('should return [1,4] for [1, 2, 3 , 4]', function () {
        expect(findMinMax([1, 2, 3, 4])).toEqual([1, 4]);
      });

      it('should return [2,7] for [7, 2, 3 ,5]', function () {
        expect(findMinMax([7, 2, 3, 5])).toEqual([2, 7]);
      });

      it('should return [5,17] for [17, 2,8 ,11,16]', function () {
        expect(findMinMax([17, 2,8 ,11,16])).toEqual([2, 17]);
      });


      it('should return [4, 6] for [6, 4]', function () {
        expect(findMinMax([6, 4])).toEqual([4, 6]);
      });

      it('should return [22, 56] for [6, 4]', function () {
        expect(findMinMax([56, 22])).toEqual([22, 56]);
      });

      it('should return [2, 78] for [4, 66, 6, 44, 7, 78, 8, 68, 2]', function () {
        expect(findMinMax([4, 66, 6, 44, 7, 78, 8, 68, 2])).toEqual([2, 78]);
      });

      it('should return [8, 96] for [21, 66, 48, 57, 24, 96, 8, 78, 12]', function () {
        expect(findMinMax([21, 66, 48, 57, 24, 96, 8, 78, 12])).toEqual([8,96]);
      });

      it('should return [1,50] for [18, 25, 16, 40, 27, 38, 13, 50, 22]', function () {
        expect(findMinMax([4, 66, 6, 44, 7, 78, 8, 68, 2])).toEqual([2, 78]);
      });

    });

    describe('Return the number in the list in a new list follows `[min]` when the number is the min and max number in that list', function () {

      it('should return [4] for [4, 4, 4, 4]', function () {
        expect(findMinMax([4, 4, 4, 4])).toEqual([4]);
      });
      it('should return [25] for [25, 25, 25, 25]', function () {
        expect(findMinMax([25, 25, 25, 25])).toEqual([25]);
      });


    });

  });

})();