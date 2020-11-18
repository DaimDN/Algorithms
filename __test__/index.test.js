
const {sharedStart} = require('../sample');

describe('index must match with respective Strings', () => {

    it('should have respective Strings', () => {

        expect(sharedStart("GeeksForGeeks", "Geeks")).toBe("Geeks");


        
    });
    
});