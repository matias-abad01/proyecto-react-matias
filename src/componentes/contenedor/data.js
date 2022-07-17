//cargar imagenes
const imagenes = require.context('../../assets/img', true);

const ropaDeHombres = [
    {
        id: 1, 
        title: "zapatillas", 
        description: "zapatillas color rojo", 
        price: 7200, 
        pictureUrl: imagenes("./calzados.jpg")},

    {   
        id: 2, 
        title: "campera", 
        description: "campera deportiva", 
        price: 5500, 
        pictureUrl: imagenes("./camperas.jpg")},

    {
        id: 3, 
        title: "pantalones", 
        description: "pantalones jean", 
        price: 3300, 
        pictureUrl: imagenes("./jeans.jpg")}];

export default ropaDeHombres;