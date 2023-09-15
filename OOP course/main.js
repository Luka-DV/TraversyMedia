

const book1 = {
    title: "Book one",
    author: "John Doe",
    year: 2013,
    getSummary() {
        console.log(this.title);
        return `${this.title}`
    },
    getAuthor() {
        console.log(this.author)
    }
}

console.log(book1.getSummary());

document.querySelector("h1").addEventListener("click", book1.getSummary.bind(book1));
document.querySelector("h2").addEventListener("click", () => book1.getAuthor());