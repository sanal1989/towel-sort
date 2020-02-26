
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if(typeof(matrix) == "undefined"){
    return new Array();
  }else if(matrix.length == 0){
    return new Array();
  }
let reverse  = false;
let result = [];
for(let i=0;i<matrix.length;i++){
	if(reverse==false){
    	for(let j=0;j<matrix[i].length;j++){
        	result.push(matrix[i][j]);
    	}
    }else{
    	for(let j=matrix[i].length-1;j>=0;j--){
        	result.push(matrix[i][j]);
    	}
    }
    if(reverse==false){
    	reverse=true;
    }else{
    	reverse=false;
    }
}
  return result;
}
