const inputsCheckbox = [...document.querySelectorAll('.container-custom-checkbox input')],
    ingredients = [...document.querySelectorAll('.current-pizza-item')],
    drinks = [...document.querySelectorAll('.select-drink-item')],
    totalAmount = document.querySelector('.total-amount>.summa'),
    orderBtn = document.querySelector('.typical-btn'),
    modalWindow = document.querySelector('.modal-window'),
    submitBtn = document.querySelector('.modal-window__submit-btn');

const subject = document.querySelector('.modal-window__subject'),
    ingredientsSpan = document.querySelector('.modal-window__ingredients'),
    drinksSpan = document.querySelector('.modal-window__drinks');


/* Add ingredients to pizza*/
const addIngredients = () => {
    inputsCheckbox.forEach(input => {
        input.addEventListener('click', e => {
            let target = e.target.closest('.container-custom-checkbox').dataset.name;
            ingredients.forEach(ingredient => {
                if (ingredient.classList.contains(target)) {
                    ingredient.classList.toggle('active');
                }
            })
        })
    })
}
addIngredients();

//add drinks
const addDrinks = () => {
    drinks.forEach(drink => {
        drink.addEventListener('click', e => {
            let target = e.target.closest('.select-drink-item');
            target.classList.toggle('active');
        })
    })
}

addDrinks();