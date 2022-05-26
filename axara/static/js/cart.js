window.getCookie = function (name) {
    var match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
    if (match) return match[2];
}

function addQuantity(productVariantId, size) {
    let quantity_el = event.srcElement.closest('.cart-element-count').querySelector('span')
    let quantity = parseInt(quantity_el.textContent)
    let request_body = {product_variant_id: productVariantId, size: size}
    fetch('/cart/add_quantity', {
        credentials: 'include',
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-CSRFToken': getCookie('csrftoken')
        },

        body: JSON.stringify(request_body)
    }).then((response) => {
        if (response.ok) {
            quantity_el.textContent = quantity + 1
            return response.json()
        }
    }).then((data) => {
        setFullPrice(data['full_price'])
    });
}

function subQuantity(productVariantId, size) {
    let quantity_el = event.srcElement.closest('.cart-element-count').querySelector('span')
    let quantity = parseInt(quantity_el.textContent)
    let request_body = {product_variant_id: productVariantId, size: size}
    fetch('/cart/sub_quantity', {
        credentials: 'include',
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-CSRFToken': getCookie('csrftoken')
        },

        body: JSON.stringify(request_body)
    }).then((response) => {

        if (response.ok) {
            if (quantity > 1) {
                quantity_el.textContent = quantity - 1
            } else {
                quantity_el.closest('.cart-item').remove()
                checkCartItemsExists()
            }
            return response.json()
        }
    }).then((data) => {
        setFullPrice(data['full_price'])
    });
}

function removeCartItem(productVariantId, size) {
    let request_body = {product_variant_id: productVariantId, size: size}
    let cart_item = event.srcElement.closest('.cart-item')
    fetch('/cart/remove_from_cart', {
        credentials: 'include',
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-CSRFToken': getCookie('csrftoken')
        },
        body: JSON.stringify(request_body)
    }).then((response) => {

        if (response.ok) {
            cart_item.remove()
            checkCartItemsExists()
            return response.json()
        }
    }).then((data) => {
        setFullPrice(data['full_price'])
    });

}

function setFullPrice(price) {
    document.querySelector('#cart-full-price').textContent = price
}
function checkCartItemsExists() {
    if  (document.getElementsByClassName('cart-item').length === 0) {
        document.querySelector('#modal-cart .cart-items-footer').remove()
        document.querySelector('#modal-cart .cart-items-body').remove()
        console.log(document.querySelector('#modal-cart.cart-items-body'))
        document.querySelector('#modal-cart .cart-empty').classList.remove("d-none");
    }
    changeCartIconCount()
}
function changeCartIconCount() {
    let count = document.getElementsByClassName('cart-item').length
    if (count === 0) {
        count = ''
    } else {
        count = count.toString()
    }
    document.querySelector('.cart-icon-count').textContent = count
}