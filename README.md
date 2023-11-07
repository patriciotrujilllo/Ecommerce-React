# Fake Store-Ecommerce
## Instalación

Instalar las dependencias.

```sh
npm i
prueba
```

## Introducción

Pagina Ecommerce utilizando la api de Fake Store , se puede realizar busqueda por titulo, ademas de diferentes filtros. Los productos se pueden añadir a un carrito de compra donde se puede escoger la cantidad a comprar.

## Funcionalidad
- **Vizualizacion de productos:** Se muestra una lista de productos de la Api Fake Store.
- **Busqueda de libros:** Se puede realizar la busqueda de productos por titulo.
- **Filtrado de los productos:** Se puede filtrar por precio, de un rango de $0 hasta $2000 dolares y filtrado por categoria, donde filtras por las distintas categorias que poseen los productos.
- **Descripción del Producto:** Al hacer click sobre algun producto este te redirige a una pagina con la descripción del producto, precio y la posibilidad de agregar el producto al carrito en diferentes cantidades.
- **Agregar a Carrito de Compra:** Cada producto tiene un icono para agregar el producto al carrito, al agregargo el icono cambia y te permite remover el producto al volver a selecionarlo.
- **Carrito de Compra:** Se agrego un carrito de compra, al accionar el icono correspondiente de carrito este despliega los productos agregados y permite ir agregando o quitando productos ademas de tener una vizualización de los precios y el total a pagar.
- **Cabecera:** La cabecera esta disponible en todas las paginas, por lo tanto el carrito y la busqueda estaran disponibles
- **Sincronización de Estado:** Los filtros, busquedas, y el carrito de compra estan guardados en estados globales(useContext), para poder ser utilizado en diferentes partes de la aplicacion web.
- **Persistencia de Datos:** La aplicación permite la persistencia datos de los productos en el carrito de compra en el almacenamiento local del navegador(localStorage). Al recargar la página, los productos del carrito se mantienen.
- **Despliegue:** [Fake Store](https://fake-store-swart.vercel.app/)
