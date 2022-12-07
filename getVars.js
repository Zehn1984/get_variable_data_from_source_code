import readFile from "./readFile.js";

async function main() {

    let fileData = await readFile("./interact.js");
    fileData = fileData.split(" ");

    const nomeVarArr = []
    fileData.map((element, i) =>  {
        if (element === "const" || element === "let" || element === "var") {
            nomeVarArr.push(fileData[i+1])
        }
    })

    console.log(nomeVarArr)
    
}

main()