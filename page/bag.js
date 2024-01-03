const cnvenience_fee = 99;

let bagItemsObjects;
onLoad()

function onLoad() {
    loadBagItemsObjects()
    displayBagItems()
    displayBagSummary()
}

function displayBagSummary() {
    let bagSummaryElement = document.querySelector(".bag-summary")
    let totalItem = bagItemsObjects.length;
    let totalMrp = 0;
    let totalDiscount = 0;


    bagItemsObjects.forEach(bagitem => {
        totalMrp += bagitem.original_price;
        totalDiscount += bagitem.original_price - bagitem.current_price;


    })

    let finalPayment = totalMrp - totalDiscount + cnvenience_fee

    bagSummaryElement.innerHTML = `<div class="bag-details-container">
    <div class="price-header">PRICE DETAILS (${totalItem} Items) </div>
    <div class="price-item">
        <span class="price-item-tag">Total MRP</span>
        <span class="price-item-value">Rs${totalMrp}</span>
    </div>
    <div class="price-item">
        <span class="price-item-tag">Discount on MRP</span>
        <span class="price-item-value priceDetail-base-discount">-Rs${totalDiscount}</span>
    </div>
    <div class="price-item">
        <span class="price-item-tag">Convenience Fee</span>
        <span class="price-item-value">Rs 99</span>
    </div>
    <hr>
    <div class="price-footer">
        <span class="price-item-tag">Total Amount</span>
        <span class="price-item-value">Rs ${finalPayment}</span>
    </div>
</div>
<button class="btn-place-order">
    <div class="css-xjhrni">PLACE ORDER</div>
</button>
</div>`
}

function loadBagItemsObjects() {

    console.log(bagitem)
    bagItemsObjects = bagitem.map(itemId => {
        for (let i = 0; i < items.length; i++) {
            if (itemId == items[i].id) {
                return items[i];
            }
        }
    })
    console.log(bagItemsObjects)

}

function displayBagItems() {

    let containerElement = document.querySelector(".bag-items-container")
    let innerHTML = ''

    bagItemsObjects.forEach(bagitem => {
        innerHTML += generateItemHTmL(bagitem)


    });
    containerElement.innerHTML = innerHTML

}


function removeFromBag(itemId) {
    bagitem = bagitem.filter(bagItemId => bagItemId != itemId)
    localStorage.setItem('bagitem', JSON.stringify(bagitem))
    loadBagItemsObjects()
    displayBagIcon()
    displayBagItems()
    displayBagSummary()

}
function generateItemHTmL(item) {

    return `<div class="bag-item-container">
    <div class="item-left-part">
        <img class="bag-item-img" src="/${item.image}">
    </div>
    <div class="item-right-part">
        <div class="company">${item.company}</div>
        <div class="item-name">${item.item_name}</div>
        <div class="price-container">
            <span class="current-price">Rs ${item.current_price} </span>
            <span class="original-price">Rs ${item.original_price}</span>
            <span class="discount-percentage">(${item.discount_percentage}% OFF)</span>
        </div>
        <div class="return-period">
            <span class="return-period-days">${item.return_period} days</span> return available
        </div>
        <div class="delivery-details">
            Delivery by
            <span class="delivery-details-days">${item.delivery_date}</span>
        </div>
    </div>
    
    <div class="remove-from-cart" onclick="removeFromBag(${item.id})">X</div>
    </div>`

}





