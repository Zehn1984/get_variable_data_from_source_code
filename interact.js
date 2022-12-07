import fs from "fs";
const fsPromises = fs.promises;

export default async function readFile(directoryPath) {
    // Tenta buscar os metadados JSON dos contratos criados
    try {
        const data = await fsPromises.readFile(directoryPath, 'utf8');
        const obj = JSON.parse(data);
        return obj;
    // Caso nao encontre o arquivo, cria um arquivo vazio para nao dar erro, e busca.
    } catch (error) {
        await fsPromises.writeFile(directoryPath, "[]");
        const data = await fsPromises.readFile(directoryPath, 'utf8');
        const obj = JSON.parse(data);
        return obj;
    }
}