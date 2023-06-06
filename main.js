// 1.positive numbers

let num= [-23,-20,-17, -12, -5, 0, 1, 5, 12, 19, 20];

let result=num.filter(function(e){
	
	return e>=0;
});
document.write("Elements stored in the array are: "+num);
document.write("<br>")
document.write("Positive numbers in the array are: "+result);


// var winner = ["Anna", "Beth", "Cara"]

// winner.map(function(e,i,arr){
	
	// switch(i){
        // case 0: ('Gold: '+e );
            // break;
             // case 1: return ('Silver: '+e );
            // break;
             // case 2: return ('Bronze: '+e );
            // break;
    // }
// });


