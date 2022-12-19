import fsPromises from 'fs/promises';
import path from 'path'

export const readJSONFile = async (url: string) => {
  try {
    const filePath = path.join(process.cwd(), url);
    const jsonData = await fsPromises.readFile(filePath);
    const data = JSON.parse(jsonData.toString());

    return data;
  } catch (error) {
    console.log('Read error: ', error);
  }
}