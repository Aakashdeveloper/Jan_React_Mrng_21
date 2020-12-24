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