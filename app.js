const franc = require("franc")
const process = require("process")
const langs = require("langs")
const colors = require("colors")

const input = process.argv.slice(2).join()
console.log(input)

const langCode = franc(input)

const langName = langs.where("3", langCode)

if(langName) {
    console.log(langName.name);
} else {
    console.log("language is not found :(, Please try again with a larger sample".red);
}