const Insurance =artifacts.require("Insurance");
contract("Insurance", async function(accounts) {


it(
    "should add product", async function(){
     let instance = await Insurance.deployed()
     // web3.utils.toWei('7' , 'ether') for price
     await instance.addProduct(242, "name", web3.utils.toWei('7' , 'ether')),{from: accounts}
    });
});