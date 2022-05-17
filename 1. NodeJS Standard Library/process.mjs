import process from "process";

process.addListener("exit", (codeExit)=> {
    console.log(`NodeJS exit dengan code ${codeExit}`)
})

console.log(process.version);
console.table(process.argv);
console.table(process.report);
console.table(process.env);

process.exit(1)

console.log("muncul")