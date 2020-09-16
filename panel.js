let fs = require("fs")
let addresses = JSON.parse(fs.readFileSync("addresses.json"))

addresses.forEach(address => {
	console.log(`${address.address}: ${address.phrase}`)
})
