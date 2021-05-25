var names_array = ["bob", "jimmy", "max b", "bernie", "jordan", "future hendrix"]
var	evenArray = []
var oddArray = []
    for( i = 0; i < names_array.length; i++) {
     name = names_array[i];
    if(name.length % 2 == 0){
        evenArray.push(name);
    }
    else{
        oddArray.push(name);
    }
}
    console.log(evenArray)
    console.log(oddArray)
        for(i = 0; i < evenArray; i++){
            evenArray.replace(evenArray[0], "b");

        }
        console.log(evenArray)

         for(i = 0; i < oddArray; i++){
             last = oddArray[i].length- 1
            oddArray.replace(last, "c")
}
console.log(evenArray)
console.log(oddArray)

even_array = evenArray

console.log(even_array)
;
