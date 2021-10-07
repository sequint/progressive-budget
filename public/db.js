let db
const request = indexedDB.open('budget', 1)



window.addEventListener('online', checkDatabase)
