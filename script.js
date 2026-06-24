const products = [
{
id:1,
name:"Samsung Galaxy M35",
brand:"Samsung",
price:22000,
rating:4.5
},
{
id:2,
name:"Samsung Galaxy A55",
brand:"Samsung",
price:32000,
rating:4.3
},
{
id:3,
name:"iPhone 15",
brand:"Apple",
price:70000,
rating:4.8
},
{
id:4,
name:"iPhone 14",
brand:"Apple",
price:60000,
rating:4.6
},
{
id:5,
name:"Redmi Note 13",
brand:"Xiaomi",
price:18000,
rating:4.2
},
{
id:6,
name:"Redmi 13C",
brand:"Xiaomi",
price:12000,
rating:4.0
}
];

const productContainer = document.getElementById("products");
const brandFilter = document.getElementById("brandFilter");
const ratingFilter = document.getElementById("ratingFilter");
const priceFilter = document.getElementById("priceFilter");

function displayProducts(productList){

    productContainer.innerHTML = "";

    productList.forEach(product => {

        const card = document.createElement("div");
        card.classList.add("card");

        card.innerHTML = `
            <h3>${product.name}</h3>
            <p><b>Brand:</b> ${product.brand}</p>
            <p><b>Price:</b> ₹${product.price}</p>
            <p><b>Rating:</b> ${product.rating}</p>
        `;

        productContainer.appendChild(card);

    });

}

function filterProducts(){

    const selectedBrand = brandFilter.value;
    const selectedRating = parseFloat(ratingFilter.value);
    const selectedPrice = priceFilter.value;

    const filteredProducts = products.filter(product => {

        const brandMatch =
        selectedBrand === "All" ||
        product.brand === selectedBrand;

        const ratingMatch =
        product.rating >= selectedRating;

        let priceMatch = true;

        if(selectedPrice === "20000"){
            priceMatch = product.price < 20000;
        }
        else if(selectedPrice === "50000"){
            priceMatch = product.price >= 20000 &&
                         product.price <= 50000;
        }
        else if(selectedPrice === "50001"){
            priceMatch = product.price > 50000;
        }

        return brandMatch && ratingMatch && priceMatch;

    });

    displayProducts(filteredProducts);

}

brandFilter.addEventListener("change", filterProducts);
ratingFilter.addEventListener("change", filterProducts);
priceFilter.addEventListener("change", filterProducts);

displayProducts(products);