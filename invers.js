// Program mencari Invers Matriks
function invers(matrix) {
    var a = matrix[0][0];
    var b = matrix[0][1];
    var c = matrix[1][0];
    var d = matrix[1][1];

    // Adjoint
    let adjoin = [[d, -b], [-c, a]];

    // Determinant
    let determinan = a * d - b * c;

    // Check if the matrix is invertible (determinant is not 0)
    if (determinan === 0) {
        return {
            inversMatriks: "Matrix is not invertible, determinant is 0",
            adjoin: adjoin,
            determinan: determinan
        };
    }

    // Inverse
    const inverseMatrix = [
        [determinan * d, determinan * -b],
        [determinan * -c, determinan * a]
    ];

    return {
        inversMatriks: inverseMatrix,
        adjoin: adjoin,
        determinan: determinan
    };
}

const inputMatrix = [[2, 2], [3, 1]];
const result = invers(inputMatrix);

console.log("INVERS NYA ADALAH " + result.inversMatriks);
console.log("ADJOIN NYA ADALAH " + result.adjoin);
console.log("DETERMINAN NYA ADALAH " + result.determinan);
