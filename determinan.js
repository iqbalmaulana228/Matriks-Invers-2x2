function determinan(A) {
    // Mengalikan silang diagonal utama dengan diagonal samping
    let ab = A[0][0] * A[1][1];
    let cd = A[0][1] * A[1][0];
  
    const detA = ab - cd;
    return detA;
}
  
  let A = [[2, 2], [3, 4]];
  let result = determinan(A);
  console.log(result);
