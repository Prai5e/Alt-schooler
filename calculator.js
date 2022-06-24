let myarray = document.getElementsByTagName('button')
let newarray = []
for( let it of myarray){
    newarray.push(it.innerHTML)
}
console.log(newarray)