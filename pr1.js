const printTriangle = function(rowNumber)
{
	if (rowNumber === 0) 
		return; 
	 const printSpace = function(space)
	      {
	      	if (space === 0)
	      		return "";

	      	return " "+printSpace(space - 1);
           };
           	const printSingleLine = function(numberOfSymbol)
	      {
	         if(numberOfSymbol === 0) 
	    	 return "";
	    	
	         
		      return "*"+printSingleLine(numberOfSymbol-1);
	       };
	
	
	console.log(printSpace(rowNumber-1)+printSingleLine((2*rowNumber)-1));
	printTriangle(rowNumber-1);
} ;
printTriangle(5); 
/*
1  0
2  1
3  2
4  3
5  4*/
	