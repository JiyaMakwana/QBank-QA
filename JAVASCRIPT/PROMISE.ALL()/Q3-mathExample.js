// Return:
// getPrice → 100
// getTax → 20
// getDiscount → 10

// Calculate:
// total = price + tax - discount
// 👉 Use Promise.all
async function getPrice() {
    return 100;
}
async function getTax() {
    return 20;
}
async function getDiscount() {
    return 10;
}

async function load() {
    let [price,tax,discount]=await Promise.all([getPrice(), getTax() , getDiscount()]);
    let total=price+tax-discount;
    console.log(total);
}
load();