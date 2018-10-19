const convert = require('convert-units')

try {
    if(isNaN(process.argv[2]) || process.argv[4] !== "to"){
        throw exception; //should cause an error
    }
    console.log(process.argv[2]+" "+process.argv[3]+" are "+convert(process.argv[2]).from(process.argv[3]).to(process.argv[5])+" "+process.argv[5]);
} catch (error) {
    console.log('Invalid parameters');
}