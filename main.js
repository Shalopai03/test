function get_all_resource() {
	// получаем данные

	fetch('https://dummyjson.com/products')
		.then(response => response.json())
		.then(data => {
			const tableBody = document
				.getElementById('productsTable')
				.getElementsByTagName('tbody')[0]
			data.forEach(products => {
				const row = tableBody.insertRow()
				row.insertCell(0).textContent = products.id
				row.insertCell(1).textContent = products.title
				row.insertCell(2).textContent = products.price
				row.insertCell(3).textContent = products.rating
			})
		})
		.catch(error => console.error('Ошибка:', error))
}

get_all_resource()

function toggleTab(element) {
	let tabId = element.dataset.tab || element.closest('.tab-content').id // определяем нажимаемую вкладку

	let tabContent = document.getElementById(`tab-${tabId}`)

	tabContent.style.display =
		tabContent.style.display === 'block' ? 'none' : 'block' // вкл/выкл вкладки
}
