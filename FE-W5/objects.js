var book = {
    name: 'The The Deathly Hallows',
    authors: ['Antioch Peverell', 'Cadmus Peverell'],
    'publication year': 1100,
    publisher:'Harry Potter',
    'change name': function ( newName ) {
        this.name = newName;
    },
    'add authors': function ( newAuthors ) {
        this.authors[this.authors.length] = newAuthors;
    }
}

console.log(book);

book["change name"]('The Tale of the Three Brothers');
book["add authors"]('Ignotus Peverell');
console.log(book);