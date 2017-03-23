module.exports  = {
  fizzbuzz : function(number){

    if ((number%3===0)&&(number%5===0)){  //this line calcuates if the number is dvisible by 3 nd 5
      return 'FizzBuzz';
    }

    else if (number%3===0){               //this line calcuates if the number is dvisible by 3 
      return 'Fizz';
    }

    else if (number%5===0){               //this line calcuates if the number is dvisible by 5
      return 'Buzz';
    }

    else {
      return number;              
    }
  }

}	

	