let bagitem;

onload()
function onload() {

    let bagitemstr = localStorage.getItem('bagitem')
    bagitem = bagitemstr ? JSON.parse(bagitemstr) : [];
    dispalypage()
    displayBagIcon()

}
function addToBag(itemId) {
    bagitem.push(itemId)
    localStorage.setItem('bagitem', JSON.stringify(bagitem))
    displayBagIcon()
}


function displayBagIcon() {
    let bagIconElement = document.querySelector(".bag-item-count");

    if (bagitem.length > 0) {
        bagIconElement.innerHTML = bagitem.length;
    }



}





function dispalypage() {

    let items_container_elements = document.querySelector(".items-container")
    if (!items_container_elements) {
        return;
    }

    let innerHtml = ''
    items.forEach(item => {
        innerHtml += ` <div class="item-container">
    <img class="item-img" src="${item.image}" alt="">
    <div class="ratting">
        ${item.rating.stars} ⭐| ${item.rating.count}
    </div>
    
    <div class="company-name">
    ${item.company}
    
        
    </div>
    
    <div class="item-name">
    ${item.item_name}
        
    </div>
    
    <div class="prising">
        <span class="current-price"> Rs ${item.current_price}</span>
        <span class="original-price"> Rs ${item.original_price}</span>
        <span class="discount"> (${item.discount_percentage}% OFF)</span>
    </div>
    
    <button class="btn-add-bag" onclick="addToBag(${item.id})">add to bag</button>
    </div>`
    })



    items_container_elements.innerHTML = innerHtml;

}
