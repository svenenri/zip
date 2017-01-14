function zip(key, val){

	var newObj = {}
	for(var i in key){
		newObj[key[i]] = val[i]
	}
	return newObj
}

var arr1 = ["abc", 3, "yo"], arr2 = [42, "wassup", true]

var obj = {"first": "Sven", "last": "Waweru", "Title": "Software Engineer"}

// Run zip function
var newZip = (zip(arr1, arr2))

// Test zip function
for(i in newZip){
	console.log(i, ":", newZip[i])
}
