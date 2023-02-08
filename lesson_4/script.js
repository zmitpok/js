//Sum of Minimums!
function sumOfMinimums(arr) {
  var result = []
    result.push(arr.map(function(row){return Math.min.apply(Math, row)}))
    result = result.reduce(function(a,b){return a.concat(b)})
    return result.reduce(function(a,b){return a+b})
}