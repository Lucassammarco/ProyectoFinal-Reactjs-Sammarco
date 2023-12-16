const products = [
    {
        id: '1',
        name: 'Mosca',
        price: 1500,
        category: 'senuelo',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJlipOkk9yIt_FqtKaMijMbAjZXw_E7-b1Og&usqp=CAU',
        stock: 25,
        descroption: 'descripcion señuelo'

    },
    {
        id: '2',
        name: 'reel',
        price: 2000,
        category: 'reel',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8XxH6_H7i2WqxzWPIPmBRKh-dH_TFOsexww&usqp=CAU',
        stock: 22,
        descroption: 'descripcion señuelo'

    },
    {
        id: '3',
        name: 'Caña Fly Cast',
        price: 20000,
        category: 'cana',
        img: 'data:image/jpeg;base64,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',
        stock: 23,
        descroption: 'descripcion señuelo'

    }
]

export const getProducts = () => {
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve(products)
        },500)
    })
}

export const getProductById = (productId) => {
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === productId))
        }, 500)
    })
}

export const getProductByIdCategory = (category) => {

    return new Promise(resolve => {

        setTimeout(() => {

            resolve(products.filter(product => category === product.category))

        }, 500)

    })

}