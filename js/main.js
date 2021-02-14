const inputsCheckbox = [...document.querySelectorAll('.container-custom-checkbox input')],
    ingredients = [...document.querySelectorAll('.current-pizza-item')],
    drinks = [...document.querySelectorAll('.select-drink-item')],
    totalAmount = document.querySelector('.total-amount>.summa'),
    orderBtn = document.querySelector('.typical-btn'),
    modalWindow = document.querySelector('.modal-window'),
    submitBtn = document.querySelector('.modal-window__submit-btn');

const subject = document.querySelector('.modal-window__subject');
let ingredientsArr = [];

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
            let nameOfIngr = e.target.closest('.container-custom-checkbox').textContent;
            calculateTotal();
            ingredientsArr.push(nameOfIngr.trim());
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
            startPrice += totalOfIngredients;
            return startPrice;
        })
    }
    chooseActive(choosenIngredients);
    chooseActive(choosenDrinks);
    totalAmount.innerHTML = `${startPrice.toFixed(2)}$`
}

//make order
orderBtn.addEventListener('click', () => {
    modalWindow.classList.remove('none');
    prepareModal();
});

window.addEventListener('click', event => {
    if (event.target === modalWindow) {
        modalWindow.classList.add('none');
        window.location.reload();
    }
});

submitBtn.addEventListener('click', () => {
    modalWindow.classList.add('none');
    showThanksModal();
    setTimeout(function () {
        window.location.reload();
    }, 2000)
});

const prepareModal = () => {
    subject.innerHTML = `
    You ordered drinks and  pizza with ingredients: ${ingredientsArr.toString().toLowerCase()}.
    <strong style="display: block; margin-top: 10px; color: red">Your total order is ${totalAmount.innerHTML};</strong>
    `
}

const showThanksModal = () => {
    modalWindow.classList.remove('none');
    submitBtn.style.display = 'none';
    subject.innerHTML = `
    <p style="margin-top: 40px; text-align: center">Thank you for your order!
    <span style="display: block">Soon we will deliver your pizza.</span>
    </p>
    `
}