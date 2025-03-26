async function getPopularProducts() {
    try {
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();
        const productList = document.getElementById('product-list');
        const jsonOutput = document.getElementById('json-output');
        productList.innerHTML = '';

        data.sort((a, b) => b.rating.count - a.rating.count).slice(0, 10).forEach(product => {
            productList.innerHTML += `
                <div class="bg-gray-100 p-4 rounded-lg shadow-md text-left">
                    <h2 class="font-bold text-lg">${product.title}</h2>
                    <img src="${product.image}" alt="${product.title}" class="w-full h-32 object-contain my-2">
                    <p class="text-gray-600">Fiyat: $${product.price}</p>
                    <p class="text-gray-500">Talep Sayısı: ${product.rating.count}</p>
                </div>
            `;
        });

        jsonOutput.textContent = JSON.stringify(data, null, 2);
    } catch (error) {
        document.getElementById('product-list').innerHTML = 'Bir hata oluştu. Lütfen tekrar deneyin';
        document.getElementById('json-output').textContent = '';
    }
}