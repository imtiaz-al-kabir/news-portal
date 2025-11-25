export const getNews = async (category: string = "", search: string = "") => {
  try {
    const response = await fetch(
      `http://localhost:4000/news?search=${search}&sort=${category}`
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status:${response.status}`);
    }
    const data = await response.json();
    return data;
  } 
  
  catch (error) {
    console.error("eccro fetching form news data", error);
    return [];
  }
};
