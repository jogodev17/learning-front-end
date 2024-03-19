import { articles } from "./data";


export function getArticles(query) {
    return articles.filter(article => article.title.toLocaleLowerCase().includes(query));
}