const OrdenGenerada = (nombre, apellido, direccion, pais, region, ciudad, postal, email, telefono, cart, total) => {
    return {
        buyer: {
            nombre: nombre,
            apellido: apellido,
            direccion: direccion,
            pais: pais,
            region: region,
            ciudad: ciudad,
            postal: postal,
            email: email,
            telefono: telefono,
        },
        items: cart
        ,
        total: total,
        createdAt: new Date().toLocaleString()
    }
}

export default OrdenGenerada;