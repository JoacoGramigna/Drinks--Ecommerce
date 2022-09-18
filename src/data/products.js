export const productos = [
    {
        id: '1',
        category: 'Fernet',
        description: 'Bebida alcohólica',
        name: 'Fernet Branca',
        image: 'https://http2.mlstatic.com/D_NQ_NP_623492-MLA43961816968_102020-V.jpg',
        stock: 10,
        precio: "1.200",
    },

    {
        id: '2',
        category: 'Fernet',
        description: 'Bebida alcohólica',
        name: 'Fernet Vittone',
        image: 'https://www.delmayoristaacasa.com.ar/wp-content/uploads/2022/09/DSC02459.jpg',
        stock: 8,
        precio: "600",
    },

    {
        id: '3',
        category: 'Vodka',
        description: 'Bebida alcohólica',
        name: 'Absolut Vodka',
        image: 'https://www.espaciovino.com.ar/media/default/0001/54/thumb_53424_default_big.jpeg',
        stock: 6,
        precio: "3.500",
    },

    {
        id: '4',
        category: 'Vodka',
        description: 'Bebida alcohólica',
        name: 'Smirnoff Vodka',
        image: 'http://d3ugyf2ht6aenh.cloudfront.net/stores/835/701/products/vodka-smirnoff-12x7001-b62d04f0676fd35df615329904315011-640-0.png',
        stock: 4,
        precio: "1.400",
    },
]

export const obtenerProductos = new Promise((resolve, reject) => {
    try {
        setTimeout(() => {
            resolve(productos)
        }, 0);
    }
    catch {
        reject(Error)
    }
})