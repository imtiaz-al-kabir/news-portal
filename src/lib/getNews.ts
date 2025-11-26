export const getNews = async (category: string = "", search: string = "") => {
  try {
    const response = await fetch(
      `https://news-portal-server-liart.vercel.app/news?search=${search}&sort=${category}`
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
