var expect = require('expect');
var {generateMessage, generateLocationMessage} = require('./message');

describe('generateMessage', () => {
    it('should generate correct message object', () => {
        var from = 'Joe'
        var text = 'Some message'
        var message = generateMessage(from, text);

        expect(message).toInclude({from, text});
        expect(message.createdAt).toBeA('number')
    });
});

describe('generateLocationMessage', () => {
    it('should generate correct location object', () => {
        var from = 'Sparkles';
        var lat = 17;
        var lon = 19;
        var url = `https://www.google.com/maps?q=${lat},${lon}`;
        var message = generateLocationMessage(from, lat, lon);

        expect(message).toInclude({from, url});
        expect(message.url).toBe(url);
        expect(message.createdAt).toBeA('number');
    });
});
