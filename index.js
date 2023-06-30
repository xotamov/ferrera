let num1 = +prompt('a')
let mark = prompt('+ - * /')
let num2 = +prompt('b')


function count(num1, num2, mark) {
    switch (mark) {
      case "*":
        alert(num1 * num2)
        break;
    case "+":
        alert( num1 + num2)
        break;
    case "-":
        alert( num1 - num2)
        break;
    case "/":
          alert (num1 / num2)
          break;    
       }
  }
  count(
    num1,num2,mark
)

let cars = prompt('how many cars')
let anothercars = 10000

function brak(cars, anothercars){
    let allcars = (cars / anothercars)* 100;
    alert('Прченты брака:' + allcars + "%");
}
brak(
    cars,anothercars
)