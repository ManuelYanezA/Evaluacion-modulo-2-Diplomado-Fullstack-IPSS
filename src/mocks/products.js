import pikachu from '../assets/pikachu.png';

export const products = [
    {
        id: 1,
        nombre: "Camiseta de Algodón",
        precio: "$9.990",
        imageURL: pikachu,
        isDestacado: true,
        onAddToCart: () => alert("Producto agregado al carrito"),
        onSeeMore: () => alert("Mostrando más detalles del producto")
    },
    {
        id: 2,
        nombre: "Camiseta de Lino",
        precio: "$11.990",
        imageURL: pikachu,
        isDestacado: false,
        onAddToCart: () => alert("Producto agregado al carrito"),
        onSeeMore: () => alert("Mostrando más detalles del producto")
    },
    {
        id: 3,
        nombre: "Camiseta de Seda",
        precio: "$14.990",
        imageURL: pikachu,
        isDestacado: false,
        onAddToCart: () => alert("Producto agregado al carrito"),
        onSeeMore: () => alert("Mostrando más detalles del producto")
    },
    {
        id: 4,
        nombre: "Camiseta de Poliéster",
        precio: "$7.990",
        imageURL: pikachu,
        isDestacado: false,
        onAddToCart: () => alert("Producto agregado al carrito"),
        onSeeMore: () => alert("Mostrando más detalles del producto")
    },
    {
        id: 5,
        nombre: "Camiseta de Lana",
        precio: "$19.990",
        imageURL: pikachu,
        isDestacado: true,
        onAddToCart: () => alert("Producto agregado al carrito"),
        onSeeMore: () => alert("Mostrando más detalles del producto")
    },
    {
        id: 6,
        nombre: "Camiseta de Rayón",
        precio: "$12.990",
        imageURL: pikachu,
        isDestacado: false,
        onAddToCart: () => alert("Producto agregado al carrito"),
        onSeeMore: () => alert("Mostrando más detalles del producto")
    },
    {
        id: 7,
        nombre: "Camiseta de Spandex",
        precio: "$8.990",
        imageURL: pikachu,
        isDestacado: false,
        onAddToCart: () => alert("Producto agregado al carrito"),
        onSeeMore: () => alert("Mostrando más detalles del producto")
    },
    {
        id: 8,
        nombre: "Camiseta de Mezcla de Algodón",
        precio: "$10.990",
        imageURL: pikachu,
        isDestacado: false,
        onAddToCart: () => alert("Producto agregado al carrito"),
        onSeeMore: () => alert("Mostrando más detalles del producto")
    },
    {
        id: 9,
        nombre: "Camiseta de Denim",
        precio: "$15.990",
        imageURL: pikachu,
        isDestacado: false,
        onAddToCart: () => alert("Producto agregado al carrito"),
        onSeeMore: () => alert("Mostrando más detalles del producto")
    },
    {
        id: 10,
        nombre: "Camiseta de Viscosa",
        precio: "$13.990",
        imageURL: pikachu,
        isDestacado: false,
        onAddToCart: () => alert("Producto agregado al carrito"),
        onSeeMore: () => alert("Mostrando más detalles del producto")
    }
];
