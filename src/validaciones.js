const validaciones =[
    {
        descripcion: 'string de al menos 2 caracters',
        fn: pelicula => pelicula.titulo && pelicula.titulo.length > 3,
    },
    {
        descripcion: 'la duracion mayor a 0',
        fn: pelicula => pelicula.duracion && pelicula.duracion > 0,
    },
    {
        descripcion: 'rating entre 0 y 10',
        fn: pelicula =>  pelicula.rating > 0 && pelicula.rating <=10,
    }
]

module.exports =  {validaciones}