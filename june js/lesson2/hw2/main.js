// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль

let languages = [`English`,`Spanish`,`French`,`German`,`Ukrainian`,`Italian`,`Arabic`,`Cantonese`,`Tagalog`,`Punjabi`]
    console.log(languages[0])
    console.log(languages[1])
    console.log(languages[2])
    console.log(languages[3])
    console.log(languages[4])
    console.log(languages[5])
    console.log(languages[6])
    console.log(languages[7])
    console.log(languages[8])
    console.log(languages[9])

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.

let book1 = {
    title: `Harry Poter`,
    pagecount: 300,
    genre: `fantasy`,
}
console.log(book1)

let book2 = {
    title: `Sherlock Holms`,
    pagecount: 511,
    genre: `detective fiction`,
}
console.log(book2)

let book3 = {
    title: `Death Note`,
    pagecount: 108,
    genre: `Psychological thriller`,
}
console.log(book3)

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - масив. Кожен автор має поля name,age

let objectone = {
    title: `Harry Poter`,
    pagecount: 300,
    genre: `fantasy`,
    authors: [
        {
            name: `Mikle`,
            age: 24,
        }
    ]

}

let objecttwo = {
    title: `Sherlock Holms`,
    pagecount: 511,
    genre: `detective fiction`,
    authors: [
        {
            name: `Mikle`,
            age: 24
        }
    ]
}

let objectthree = {
    title: `Death Note`,
    pagecount: 108,
    genre: `Psychological thriller`,
    authors: [
        {
            name: `Mikle`,
            age: 24
        }
    ]
}

// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача

let array = [
    {name: `Andry`, username: `vfgsdfsd`, password: `fsdfsfds`},
    {name: `Sasha`, username: `fhjsddjf`, password: `gllglgb`},
    {name: `Oleg`, username: `fksgvcbj`, password: `qwertyuyu`},
    {name: `Oksana`, username: `gdkgmvxcv`, password: `gkdkgdvl`},
    {name: `Mari`, username: `vfgsdfsd`, password: `hlfgkjhkh1112`},
    {name: `Stas`, username: `vfgsdfsd`, password: `gdkgdfgg`},
    {name: `Max`, username: `vfgsdfsd`, password: `hgodruru`},
    {name: `Vova`, username: `vfgsdfsd`, password: `fkslfpfo`},
    {name: `Kate`, username: `vfgsdfsd`, password: `jausutrkdg`},
    {name: `Julia`, username: `vfgsdfsd`, password: `ooootjgj`}
]
console.log(array[0].password)
console.log(array[1].password)
console.log(array[2].password)
console.log(array[3].password)
console.log(array[4].password)
console.log(array[5].password)
console.log(array[6].password)
console.log(array[7].password)
console.log(array[8].password)
console.log(array[9].password)

