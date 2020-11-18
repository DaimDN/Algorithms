const { match } = require('assert');
const {runner} = require('../matcher');

describe('All the functions must return the respective output', () => {

    it('must provide the correct outpt', () => {
        //test Sample 1
        expect(runner("GeeksForGeeks", "Geeks")).toBe("Geeks");

        //Test Sample 2 

        expect(runner('ABABC', 'BABCA')).toBe('BABC')
        
    });
    
});