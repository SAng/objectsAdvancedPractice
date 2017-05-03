var salesTaxRates = {
  AB: 0.05,
  BC: 0.12,
  SK: 0.10
};

var companySalesData = [
  {
    name: "Telus",
    province: "BC",
    sales: [ 100, 200, 400 ]
  },
  {
    name: "Bombardier",
    province: "AB",
    sales: [ 80, 20, 10, 100, 90, 500 ]
  },
  {
    name: "Telus",
    province: "SK",
    sales: [ 500, 100 ]
  }
];

function sum(array) {
  var result = 0
  for (var n = 0; n < array.length; n++) {
    result += array[n]
  }
  return result
}

function calculateSalesTax(array, rate) {
  var result = {}
  for (var i = 0; i < array.length; i++) {
    var name = array[i].name
    var province = array[i].province
    var sales = array[i].sales
    var taxrate = rate[province]
    result[name] = {totalSales: sum(sales), totalTaxes: (sum(sales) * taxrate)}
  }
  return result
}


console.log(calculateSalesTax(companySalesData, salesTaxRates))