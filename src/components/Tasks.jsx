export const GenresTask = () => {
    return (
        <h1 >
            1. Собрать в массив все жанры фильмов (без повторения)
        </h1>
    )
}

export const ActorsTask = () => {
    return (
        <h1 >
            2. Собрать в массив всех актеров всех фильмов (без повторения)
        </h1>
    )
}

export const RatingTask = () => {
    return (
        <h1 >
           3. Отсортировать фильмы по рейтингу по убыванию
        </h1>
    )
}

export const NewArrayTask = () => {
    return (
        <h1 >
           4. Создать новый массив, где объекты фильмов будут состоять из следующих полей:
id, title, released, plot
        </h1>
    )
}

export const FilterMoviesByYearTask = () => {
    return (
        <h1 >
           5. Создать функцию, которая бы принимала массив фильмов и число. А результатом этой функции должен быть отфильтрованный массив, с фильмами где число равно году выхода фильма.
        </h1>
    )
}

export const FilterMoviesByNameTask = () => {
    return (
        <h1 >
           6. Создать функцию, которая бы принимала массив фильмов и строку. А результатом этой функции должен быть новый отфильтрованный массив, с фильмами, где строка входит в название фильма.
        </h1>
    )
}

export const FilterMoviesByPlotTask = () => {
    return (
        <h1 >
            7. Создать функцию, которая бы принимала массив фильмов и строку. А результатом этой функции должен быть отфильтрованный массив, с фильмами где строка входит в название фильма или в его сюжет.
        </h1>
    )
}

// export const FilterMoviesArrayStringTask = () => {
//     return (
//         <h1 >
//             8. Создать функцию, которая бы принимала 3 параметра: 1)массив фильмов , 2) строка(название поля, например 'title') и строку/число(значение поля "Black Widow"). А результатом
//         этой функции должен быть отфильтрованный массив, где параметры 2 и 3 равны в объекте фильма. Например: передаем (films, 'title', 'Black Widow') и на выходе получаем фильм с id=1 если передаем (films, 'year', 2011) , то получаем фильм с id=2
//         </h1>
//     )
// }

