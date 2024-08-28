const getData = async () => {
    const response = await fetch(`https://restcountries.com/v3.1/all?fields=name,capital,currencies`,{
        method:'GET'
    })

const data = await response.json()
console.log(data)
renderTable(data)
}

//Function to render data into the table
function renderTable(data) {
    const dataList = document.getElementById('dataList');
    data.forEach(item => {
        const row = document .createElement('tr');
        row.innerHTML = `
        <td>${item.name.common}</td>
        <td>${item.capital[0]}</td>`
        dataList.appendChild(row);
    });
}
//Call the function to render data
getData()