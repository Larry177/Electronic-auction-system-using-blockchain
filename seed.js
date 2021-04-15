 Eutil = require('ethereumjs-util');
 EcommerceStore = artifacts.require("./EcommerceStore.sol");
 module.exports = function(callback) {
 current_time = Math.round(new Date() / 1000);
 amt_1 = web3.toWei(1, 'ether');
 EcommerceStore.deployed().then(function(i) {i.addProductToStore('iphone 5', 'Cell Phones & Accessories', 'Qmd286K6pohQcTKYqnS1YhWrCiS4gz7Xi34sdwMe9USZ7u', 'QmUJQ8o137VSmVZc9QRfT2CVsbTgZcoyD3S5NKdnyBQtqN', current_time, current_time + 200, 2*amt_1, 0).then(function(f) {console.log(f)})});
 EcommerceStore.deployed().then(function(i) {i.addProductToStore('iphone 5s', 'Cell Phones & Accessories', 'Qmd286K6pohQcTKYqnS1YhWrCiS4gz7Xi34sdwMe9USZ7u', 'QmUJQ8o137VSmVZc9QRfT2CVsbTgZcoyD3S5NKdnyBQtqN', current_time, current_time + 400, 3*amt_1, 1).then(function(f) {console.log(f)})});
 EcommerceStore.deployed().then(function(i) {i.addProductToStore('iphone 6', 'Cell Phones & Accessories', 'Qmd286K6pohQcTKYqnS1YhWrCiS4gz7Xi34sdwMe9USZ7u', 'QmUJQ8o137VSmVZc9QRfT2CVsbTgZcoyD3S5NKdnyBQtqN', current_time, current_time + 14, amt_1, 0).then(function(f) {console.log(f)})});
 EcommerceStore.deployed().then(function(i) {i.addProductToStore('iphone 6s', 'Cell Phones & Accessories', 'Qmd286K6pohQcTKYqnS1YhWrCiS4gz7Xi34sdwMe9USZ7u', 'QmUJQ8o137VSmVZc9QRfT2CVsbTgZcoyD3S5NKdnyBQtqN', current_time, current_time + 86400, 4*amt_1, 1).then(function(f) {console.log(f)})});
 EcommerceStore.deployed().then(function(i) {i.addProductToStore('iphone 7', 'Cell Phones & Accessories', 'Qmd286K6pohQcTKYqnS1YhWrCiS4gz7Xi34sdwMe9USZ7u', 'QmUJQ8o137VSmVZc9QRfT2CVsbTgZcoyD3S5NKdnyBQtqN', current_time, current_time + 86400, 5*amt_1, 1).then(function(f) {console.log(f)})});
 EcommerceStore.deployed().then(function(i) {i.addProductToStore('Jeans', 'Clothing, Shoes & Accessories', 'Qmd286K6pohQcTKYqnS1YhWrCiS4gz7Xi34sdwMe9USZ7u', 'QmUJQ8o137VSmVZc9QRfT2CVsbTgZcoyD3S5NKdnyBQtqN', current_time, current_time + 86400 + 86400 + 86400, 5*amt_1, 1).then(function(f) {console.log(f)})});
 EcommerceStore.deployed().then(function(i) {i.productIndex.call().then(function(f){console.log(f)})});
}
