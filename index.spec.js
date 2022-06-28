const add=require("./index")
const assert=require("assert")
try{
    var sum=7;
    assert.equal(sum,add(3,4))
    console.log("test case success")
}
catch(e)
{
 console.log(e);
}

