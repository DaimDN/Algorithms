
const {sharedStart} = require('../sample');

describe('Must return a positive Reposnd', () => {


    it('should have the respective output', () => {
        expect(sharedStart("GeeksForGeeks", "Geeks")).toBe("Geeks");
        
    });
    
});