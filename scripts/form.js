const products = [
    {
        id: "fc-1888",
        name: "flux capacitor",
        averagerating: 4.5
    },
    {
        id: "fc-2050",
        name: "power laces",
        averagerating: 4.7
    },
    {
        id: "fs-1987",
        name: "time circuits",
        averagerating: 3.5
    },
    {
        id: "ac-2000",
        name: "low voltage reactor",
        averagerating: 3.9
    },
    {
        id: "jj-1969",
        name: "warp equalizer",
        averagerating: 5.0
    }
];

const productName = document.getElementById("productName");

// populate the option list
document.addEventListener("DOMContentLoaded", function () {
    products.forEach(product => {
        // create element 'option' of select
        const productOption = document.createElement("option");
        // assign the values
        productOption.value = product.id;
        productOption.textContent = product.name;
        // add to the select input
        productName.appendChild(productOption);
    });
});