function add(a,b){
    return a,b
}
undefined
add(1,2)
2
add(1,6)
6

function add(a,b){
    return b,a 
}
undefined
add(6,1)
6

function add(b,a){
    var add = [b,a]
    return add
}

add(6,1)
1



> Es5
function add(a,b){
      return a+b
}

> Es6
const add = (a,b) => { return a+b}


var a = [23,45,67,87,45]
a.map((data) => { return data *2})

var a = [23,45,67,87,45]
a.map((data) => { return data *2})
(5) [46, 90, 134, 174, 90]

var a = [23,45,67,87,45]
a.map((data) => { return `<p>${data}</p>`})
(5) ["<p>23</p>", "<p>45</p>", "<p>67</p>", "<p>87</p>", "<p>45</p>"]



var a = [23,45,67,87,45]
a.filter((data) => {return data>50})
(2) [67, 87]

var a = [23,45,67,87,45]
undefined
a.indexOf(23)
0
a.indexOf(67)
2
a.indexOf(45)
1
a.indexOf(46)
-1
a.indexOf(21)
-1