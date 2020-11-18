const { run } = require("jest");

module.exports.runner =  function runner(x, y){
    const s1 = [...x];
    const s2 = [...y];
  
    
    const m = Array(s2.length + 1).fill(null).map(() => {
      return Array(s1.length + 1).fill(null);
    });
  
    for (let i = 0; i <= s1.length; i += 1) {
               m[0][i] = 0;
    }
  
    for (let r = 0; r <= s2.length; r += 1) {
      m[r][0] = 0;
    }
  
    let L = 0;
    let C = 0;
    let Row = 0;
  
    for (let ri = 1; ri <= s2.length; ri += 1) {
      for (let ci = 1; ci <= s1.length; ci += 1) {
        if (s1[ci - 1] === s2[ri - 1]) {
          m[ri][ci] = m[ri - 1][ci - 1] + 1;
        } else {
          m[ri][ci] = 0;
        }
        if (m[ri][ci] > L ) {
          L = m[ri][ci];
          C = ci;
          Row = ri;
        }
      }
    }
    
  
    if (L=== 0) {
      return '';
    }
  
    let string = '';
  
    while (m[Row][C] > 0) {
      string = s1[C - 1] + string;
      Row -= 1;
      C -= 1;
    }
  
  
  
    return string;
}

  


