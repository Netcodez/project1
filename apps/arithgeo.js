module.exports  = {
	arithGeo : function (arr) {
		var commonDiff = arr[1] - arr[0];              //calculates the common difference to determine if the sequece is arithemetic
		var ratio = arr[1] / arr[0];                   //calculates the geometric ratio to determine if the sequence is geometric


		var arit = true;
		var geo = true;

		if  (arr.length === 0){
			return 0;
		}

		for  (var i = 0; i < arr.length - 1; i++){
			if( arr[i + 1] - arr[i] !== commonDiff ){   //checks  if the sequence is arithemetic
				arit = false;	
   			}

    		if(arr[i]*ratio  !== arr[i + 1]){          //checks  if the sequence is geometric
    			geo = false;
    		}
		}



		if (arit === true && geo ===true){
			return 'The sequence is both arithemetic and geometric';
		}


		if (arit === true){							  //arithGeo function returns Arithemetic if the sequence is arithemetic
	
			return "Arithmetic";
		}

		if(geo === true){							  //arithGeo function returns Geometric if the sequence is geometric   

			return "Geometric";	
  
		}
   			return -1;


	}

}
