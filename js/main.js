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

// let startPrice = 4.07;


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
            e.target.closest('.container-custom-checkbox').classList.toggle('active');
            let choosenIngredients = [...document.querySelectorAll('.container-custom-checkbox.active')];
            calculateTotal();

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
            let choosenDrinks = [...document.querySelectorAll('.select-drink-item.active')];
            calculateTotal();
        })
    })
}
addDrinks();

//calculate total
const calculateTotal = () => {
    let startPrice = 4.07;
    let choosenIngredients = [...document.querySelectorAll('.container-custom-checkbox.active')],
        choosenDrinks = [...document.querySelectorAll('.select-drink-item.active')];
    const chooseActive = (el) => {
        el.forEach(item => {
            let totalOfIngredients = Number(item.dataset.value);
            console.log(totalOfIngredients);
            startPrice += totalOfIngredients;
            return startPrice;
        })
    }
    chooseActive(choosenIngredients);
    chooseActive(choosenDrinks);
    totalAmount.innerHTML = `${startPrice.toFixed(2)}$`
}