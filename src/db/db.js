import * as SQLite from "expo-sqlite"

const db = SQLite.openDatabase("db.db")

function querySql(query, args) {
    return new Promise((resolve, reject) => {
        db.transaction(
            (tx) => {
                tx.executeSql(query, args, 
                    (_, data) => {
                        resolve(data)
                    }, 
                    (_, err) => {
                        reject(err)
                    })
            }
        )
    })
}

export function loadDatabase() {
    return querySql("create table if not exists books (id integer primary key not null, title text)", [])
}

export function getBooks() {
    return querySql("select * from books", null)
}

export function insertBook(title) {
    return querySql("insert into books(title) values(?)", [title])
}