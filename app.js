

function productModify(inputId, isIncrese, price, totalId){

    //quantity increment & decrement
    let productQuan = document.getElementById(inputId)
    let productQuanNum = parseInt(productQuan.value)
    if(isIncrese){
        productQuan.value = productQuanNum + 1
    }
    else if(productQuanNum > 0){
        productQuan.value = productQuanNum - 1
    }
    productQuanNum = productQuan.value

    //total price on par product
    let productTotal = document.getElementById(totalId)
    productTotal.innerText = productQuanNum * price

    //subtotal
    let subTotal = document.getElementById('subTotal')
    subTotal.innerText = calculation()

    //tax
    let tax = document.getElementById('tax')
    tax.innerText = taxAmount();

    //total
    let total = document.getElementById('total')
    total.innerText = totalPrice()
}

function getInput(inputId){
    let input = document.getElementById(inputId)
    return parseInt(input.value)
}
function calculation(){
    let phnPrice = getInput('phoneQuantity') * 1200
    let casePrice = getInput('caseQuantity') * 50
    let subTotal = phnPrice + casePrice
    return subTotal
}
function taxAmount(){
    let tax = calculation() * (10/100)
    return tax;
}
function totalPrice(){
    let total = calculation() + taxAmount()
    return total
}

document.getElementById('phnPlus').addEventListener('click', function(){
    productModify('phoneQuantity', true, 1200, 'phnTotal')
})
document.getElementById('phnMinus').addEventListener('click', function(){
    productModify('phoneQuantity', false, 1200, 'phnTotal')
})
document.getElementById('casePlus').addEventListener('click', function(){
    productModify('caseQuantity', true, 50, 'caseTotal')
})
document.getElementById('caseMinus').addEventListener('click', function(){
    productModify('caseQuantity', false, 50, 'caseTotal')
})
