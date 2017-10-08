const stars = function(n)
{
	if (n === 0){
		return " ";
	}
	return "*"+stars(n-1);
};
const squareHelper = function(n, starCount)
    {
    	if (n === 0) {
return;
}
console.log(stars(starCount));
squareHelper(n-1, starCount);
};
/*
const square = function(n){
	squareHelper(n, n)
};
square(10);*/
squareHelper(5,5);
