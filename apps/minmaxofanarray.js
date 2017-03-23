module.exports = {
	minMax : function(arr){
		var min = arr[0];
		var max = arr[0];

		for  (var i = 0; i < arr.length; i++) {

			if  (arr[i] < min){      			   //this caculates the minimum of the array
			 
				min = arr[i];
			} 



			else if(arr[i] > max){                 //this caculates the maximum of the array
			 
				max = arr[i];
			}
		}

		if (min === max){						 // the function returns the minimum if both the min and max are equal
			return [min]
		}

		else return [min,max];
	}
}
