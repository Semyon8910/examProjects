class Product {
    constructor (productName,price,productType,imgUrl){
        this.productName = productName;
        this.price = price;
        this.productType = productType;
        this.imgUrl = imgUrl;
    }
}

var productList = [];
const addProduct = () => {
    var productName = document.getElementById("productName").value;
    var price = document.getElementById("price").value;
    var productType = document.getElementById("productType").value;
    var imgUrl = document.getElementById("imgUrl").value;
    
    productList.push(new Product(productName,price,productType,imgUrl));

    makeTable();

    document.getElementById("myForm").reset();
}

const makeTable = () => {
    var table = `<tr>
                    <th>Product name</th>
                    <th>Price</th>
                    <th>Product type</th>
                    <th>image</th>
                    <th>action</th>
                </tr>`;
        for (var index=0; index<productList.length; index++) {
            table += `<tr>
                        <td>${productList[index].productName}</td>
                        <td>${productList[index].price}</td>
                        <td>${productList[index].productType}</td>
                        <td><img src="${productList[index].imgUrl}" width="100"</td>
                        <td><input type="button" id="deleteRow" onclick="deleteProduct(${index})"value="delete"</td>
                      </tr>`;
        }
    document.getElementById("myCart").innerHTML = table;
}

const deleteProduct = (index) => {
    productList.splice(index, 1);
    makeTable();
    if (productList.length == 0) {
        table = ``;
        document.getElementById("myCart").innerHTML = table;
    }
}

