import { articles } from "./data"

const keys = ['title', 'description', 'publishDate'];

export const getArticles = (query) => {
    return articles.filter(article => keys.some(key => article[key].toLowerCase().includes(query)))
}