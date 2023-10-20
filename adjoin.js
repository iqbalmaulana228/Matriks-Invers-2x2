function Adj(A){
let smt = A[0][0]
//menukar posisi nilai a dengan d
A[0][0] = A[1][1]
A[1][1] = smt
//mengubah simbol b dengan c menjadi minus
A[0][1] = A[0][1] - A[0][1]*2
A[1][0] = A[1][0] - A[1][0]*2
console.log(A)
}

let A = [[2,2],[3,4]]
Adj(A)
