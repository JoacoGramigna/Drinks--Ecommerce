const OrdenGenerada = (nombre, email, telefono, cart, total) => {
    return{
        buyer:{
            nombre:nombre,
            email:email,
            telefono: telefono,
        },
        items: cart
        ,
        total: total,
        createdAt: new Date().toLocaleString()
    }
}

export default OrdenGenerada;