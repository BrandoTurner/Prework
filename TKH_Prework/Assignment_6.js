var array = ["Retta", "Vern", "Marica", "Cyrus", "Linette", "Curt", "Nichole", "Jesica", "Wynell", "Michaele"]
 longest = array[0];
	for( i = 1; i < array.length; i++) {
     name = array[i];
    if(name.length > longest.length)
        longest = name;
}
