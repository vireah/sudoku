module.exports = function solve(matrix){
    seacrh(0,-1);
    
     function seacrh(i, j) {
        j++; 
        if (j > 8) {
            j = 0;
            i++;
        if (i > 8) return true;
        }
  
        if (matrix[i][j] !== 0) { 
            if (!(row(i, j) && col(i,j) && quad3_3(i, j))) return false;
            return seacrh(i, j);
        } else {
            for (let num = 1; num <=9; num++) {
                matrix[i][j] = num;
                if (row(i, j) &&  col(i,j) &&  quad3_3(i, j)){
                    if (seacrh(i, j)) return true;
                }
            }
            matrix[i][j] = 0;
            return false;
        }
    }    
  
    function row(i,j) {
        for (let b = 0; b < 9; b++) {
            if (b !== j && matrix[i][b] === matrix[i][j]) return false;
        }
        return true;
    }
  
    function col(i,j) {
        for (let a = 0; a < 9; a++) {
            if (a !== i && matrix[a][j] === matrix[i][j]) return false;
        }
        return true;
    }
  
    function quad3_3(i, j) {
         a = i / 3 >>0;
         b = j / 3 >>0;
  
        for (let rows = a * 3; rows < a * 3 + 3; rows++) {
            for (let colm = b * 3; colm < b * 3 + 3; colm++) {
                if (rows !== i && colm !== j && matrix[rows][colm] === matrix[i][j]) return false;
            }
        }
        return true;
     }
     return matrix;
    // console.log(matrix);
    } 