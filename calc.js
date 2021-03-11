let scr = document.getElementById("screen")
let one = document.getElementById("one")
let two = document.getElementById("two")
let three = document.getElementById("three")
let four = document.getElementById("four")
let five = document.getElementById("five")
let six = document.getElementById("six")
let seven = document.getElementById("seven")
let eight = document.getElementById("eight")
let nine = document.getElementById("nine")
let zero = document.getElementById("zero")
let add = document.getElementById("add")
let sub = document.getElementById("sub")
let div = document.getElementById("div")
let multi = document.getElementById("multi")
let equal = document.getElementById("equal")
let clearall = document.getElementById("clear")
seven.addEventListener('click',function() {
    scr.value += '7'
})
eight.addEventListener('click',function() {
    scr.value += '8'
})
nine.addEventListener('click',function() {
    scr.value += '9'
})
four.addEventListener('click',function() {
    scr.value += '4'
})
five.addEventListener('click',function() {
    scr.value += '5'
})
six.addEventListener('click',function() {
    scr.value += '6'
})
one.addEventListener('click',function() {
    scr.value += "1"

})
two.addEventListener('click',function() {
    scr.value += "2"
})
three.addEventListener('click',function() {
    scr.value += "3"
})
zero.addEventListener('click',function() {
    scr.value += '0'
})
add.addEventListener('click',function() {
    scr.value += "+"
})
sub.addEventListener('click',function() {
    scr.value += "-"
})
multi.addEventListener('click',function() {
    scr.value += '*'
})
div.addEventListener('click',function() {
    scr.value += "/"
})
clearall.addEventListener('click',function() {
    scr.value = ""
})
equal.addEventListener('click',function() {
    scr.value = eval(scr.value)
})