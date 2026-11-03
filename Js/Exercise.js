//Task 1:// Task 1: Demonstrate object reference, where copyProduct references the same object as Product, so changes made through copyProduct also affect Product.

let Product = {
    name: "Laptop",
    price: 1000,
    model: "Asus VivoBook",
    'serial-Number': 123456789,
}
let copyProduct = Product;
console.log(Product);
copyProduct.model = "Asus TUF Gaming";
console.log(Product);
// Below code is for accessing serial number property of Product object using bracket notation comment all above code and uncomment below code to see the output
// console.log(Product['serial-Number']); 


