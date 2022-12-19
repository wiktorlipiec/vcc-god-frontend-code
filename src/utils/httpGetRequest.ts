export const httpGetRequest = async (url: string) => {
  try {
    const response = await fetch(url);
    const data = await response.json();

    return data;
  } catch (error) {
    console.log('Fetch error: ', error);
  }
}