const expect = require('expect');

const {isRealString} = require('./validation');

describe('isRealString', () => {
    it('should reject non-string values', () => {
        var res = isRealString(1234);
        expect(res).toBe(false);
    });

    it('should reject string with all spaces', () => {
        var res = isRealString('     ');
        expect(res).toBe(false);
    });

    it('should allow strings with non-pace chars', () => {
        var res = isRealString('  valid_id   ');
        expect(res).toBe(true);
    });
});
