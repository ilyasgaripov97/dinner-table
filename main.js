let milkAmount = 0
let cheeseAmount = 0

const products = ['milk', 'cheese'];

/* Draw products, generate positions of products */
const draw = (product) => {
    const table = document.querySelector('.table');
    table.innerHTML += `<img src="assets/${product}.png" id="${product}-image">`;
}

const getProductAmountByName = (product) => {
    for (let p of products) {
        if (product === 'milk') {
            return milkAmount;
        } else if (product === 'cheese') {
            return cheeseAmount;
        }
    }
}

const drawMultipleTimes = (product) => {
    const productAmount = getProductAmountByName(product);
    console.log(productAmount);
    for (let i = 0; i < productAmount; ++i) {
        draw(product);
    }
}

// Getting images and draw them when amount changes
function drawImages() {
    products.forEach(product => {
        draw(product);
    })
}

/* Working with DOM, getting milk amount and cheese amount from
*  the input forms
*  */
const updateProductAmount = (input, productName) => {
    if (input.className === productName) {
        return input.value;
    }
}

const updateProductsAmounts = (input) => {
    cheeseAmount = updateProductAmount(input,"cheese");
    milkAmount = updateProductAmount(input, "milk")
}

function submitEventListener(section) {
    section.addEventListener('submit', e => {
        e.preventDefault();

        const input = section.querySelector('input');
        updateProductsAmounts(input);

        // use values of input fields for rendering a products on table
        drawMultipleTimes(input.className);
    })
}

function increaseProductAmount(e, input, product) {
    if (e.target.className === 'increase') {
        ++input.value;
        draw(input.className);
    }
}

function decreaseProductAmount(e, input) {
    if (e.target.className === 'decrease'  && input.value > 0) {
        --input.value;
    }
}

function buttonClickEventListener(section) {
    section.addEventListener('click', e => {
        const input = section.querySelector('input');

        increaseProductAmount(e, input);
        decreaseProductAmount(e, input);

        updateProductsAmounts(input);

    })
}

const fetchProductsAmounts = () => {
    const container = document.querySelector('.ui-controllers');

    const productSections = Array.from(container.children);
    productSections.forEach(section => {
        submitEventListener(section);
        buttonClickEventListener(section);
    })
    //drawImages()
}

fetchProductsAmounts();

