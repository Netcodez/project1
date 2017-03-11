module.exports  ={
	arithGeo :function (arr) { 

var commonDiff = arr[1] - arr[0];
var ratio = arr[1] / arr[0];

var arit = true;
var geo = true;
if (arr.length === 0){
	return 0;
	}

for(var i = 0; i < arr.length - 1; i++)
	{
	
    if( arr[i + 1] - arr[i] !== commonDiff )
      arit = false;
    if(arr[i]*ratio  !== arr[i + 1])
      geo = false;
	}


if(arit === true){
    return "Arithmetic";
	}
if(geo === true){
    return "Geometric";
	}
   return -1;


	}
}