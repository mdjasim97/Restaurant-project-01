const getReadsBookStorage = () => {
    const readBookStorage = localStorage.getreview("reads-book");
    if (readBookStorage) {
        return JSON.parse(readBookStorage)
    }
    return []
}

const saveReadBooks = (id) => {
    const readBookStore = getReadsBookStorage()
    const exits = readBookStore.find(booksId => booksId === id)

    if (!exits) {
        readBookStore.push(id)
        localStorage.setreview("reads-book", JSON.stringify(readBookStore))
    }
}


export { getReadsBookStorage, saveReadBooks }