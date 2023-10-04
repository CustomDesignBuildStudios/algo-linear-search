function linearSearch(searchTerm, arr) {
  for(let x = 0; x < arr.length; x++){
    if(arr[x] === searchTerm){
      console.log(searchTerm + " " + arr[x]);
      return x;
    }
  }
  return undefined;
}

function globalLinearSearch(searchTerm, arr) {
  let foundIndexes = [];
  for(let x = 0; x < arr.length; x++){
    if(arr[x] === searchTerm){
      foundIndexes.push(x);
    }
  }
  return foundIndexes;
}

module.exports = { linearSearch, globalLinearSearch };
