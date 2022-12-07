import readFile from "./readFile.js";

async function main() {

    let fileData = await readFile("./interactContract.js");
    fileData = fileData.split(" ");
    // console.table(fileData);
    const varList = [];
    fileData.map((element, i) =>  {
        if (element === "=") {
            // varObj[(i-1)] = fileData[i-1];
            const varObj = new Object();
            varObj.index = i;
            varObj.name = fileData[i-1]; 
            varList.push(varObj);
            
        }        
    })
    console.log(varList);    
}

main();