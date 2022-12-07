import readFile from "./readFile.context.js";
import fs from "fs";
const fsPromises = fs.promises;

export default async function modifyFile(fileName) {

    const fileData = await readFile(fileName);
    const fileDataSplittedInLines = fileData.split("\n");
    const varList = [];
    fileDataSplittedInLines.map((line, i) => {
        const lineSplittedInWords = line.split(" ");
        lineSplittedInWords.map((word, index) => {
            if(word === "=") {
                const varObj = new Object();
                varObj.line = i;
                varObj.name = lineSplittedInWords[index-1]; 
                varList.push(varObj);            
            }
        })
    })

    fileDataSplittedInLines.map((line, i) => {
        varList.map((varObj) => {
            if(varObj.line === i) {
                fileDataSplittedInLines[i] = `${fileDataSplittedInLines[i]}\nconsole.log(${varObj.name});`
            }
        })
    })

    const newFileData = fileDataSplittedInLines.join("\n");

    const newFileName = fileName.replace(".js", "_MODIFIED.js")

    await fsPromises.writeFile(newFileName, newFileData);

    return varList;
    // console.log(newFileData);
}

modifyFile("../arquivoTeste.js");