let article: readonly [number, string, boolean] = [30, "Title One", true];
article = [31, "Title Two", false];
console.log(article);
const [id, title, published] = article;
console.log(id);
console.log(title);
console.log(published);