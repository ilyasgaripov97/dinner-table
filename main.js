let milkAmount = 0
let cheeseAmount = 0

const updateProductAmount = (input, productName) => {
    if (input.className === productName) {
        return input.value;
    }
}

const updateProductsAmounts = (input) => {
    cheeseAmount = updateProductAmount(input,"cheese");
    milkAmount = updateProductAmount(input, "milk")
}


function keyupEventListener(section) {
    section.addEventListener('keyup', () => {
        const input = section.querySelector('input');
        updateProductsAmounts(input);
        // use values of input fields for rendering a products on table
    })
}

function buttonClickEventListener(section) {
    section.addEventListener('click', e => {
        const input = section.querySelector('input');

        if (e.target.className === 'increase') {
            ++input.value;
            updateProductsAmounts(input);
        }
        if (e.target.className === 'decrease') {
            --input.value;
            updateProductsAmounts(input);
        }
    })
}

const fetchProductsAmounts = () => {
    const container = document.querySelector('.ui-controllers');

    const productSections = Array.from(container.children);
    productSections.forEach(section => {

        keyupEventListener(section);
        buttonClickEventListener(section);

    })
}

fetchProductsAmounts();
