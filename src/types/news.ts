const news = {
  _id: "6925af98c506473ee2ee98c9",
  title: "Panova and Olmos Lose in Beijing Doubles Quarterfinals",
  description:
    "Russian Alexandra Panova and Mexican Giuliana Olmos were defeated in the quarterfinals of the Beijing doubles tournament, with a score of 4/6, 4/6.",
  snippet:
    "Alexandra Panova and Giuliana Olmos lost 4/6, 4/6 in the quarterfinals of the doubles competition in Beijing.",
  url: "https://gotennis.ru/read/news/panova_i_olmos_proigrali_v_chetvertfinale_parnyh_sorevnovaniji_v_pekine.html",
  imageUrl:
    "https://images.unsplash.com/photo-1599474924187-334a4ae5bd3c?q=80&w=1983&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  language: "ru",
  published_at: "2024-09-30T13:00:23.000000Z",
  source: "gotennis.ru",
  categories: ["sports"],
};

export interface NewsItem {
  _id: string;
  title: string;
  description: string;
  snippet: string;
  url: string;
  imageUrl: string;
  language: string;
  published_at: string;
  source: string;
  categories: string[];
}

export interface NewsCardProps {
  item: NewsItem;
}
