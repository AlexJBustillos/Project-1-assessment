//create a page that adds or subtracts input from the count
let count = document.querySelector('.count')
let input = document.querySelector('.input')
let subtraction = document.querySelector('.subtract')
let addition = document.querySelector('.add')

addition.addEventListener('click', function(){
    let result = parseInt(count.textContent) + parseInt(input.value)
    document.querySelector('.count').textContent = result
    if (result < 0) {
        count.style.color = "red";
    } else if (result > 0) {
        count.style.color = "black";
    }
})

subtraction.addEventListener('click', function(){
    let result = parseInt(count.textContent) - parseInt(input.value)
    document.querySelector('.count').textContent = result

    if (result < 0) {
        count.style.color = "red";
    } else if (result > 0) {
        count.style.color = "black";
    }
})



