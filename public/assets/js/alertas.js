
// Alerta 1: prueba
Swal.fire({
    title: "Guarin es gei",
    text: "Deje de ser gei",
    icon: "warning",
    //width:'30%',
})


// Alerta de confirmar venta
Swal.fire({
    //Contenido de la alerta 
    title: "Registro exitoso",
    text: "Se ha registrado una venta",
    icon: "success",
    confirmButtonText:"Cofirmar",
    timer: 5000,
    timerProgressBar: true,

    // Estilos de las alertas (Botones)
    // width:'90%',
    // customClass: {} Añadir clases del css a la alerta
    showConfirmButton: false,
    confirmButtonColor:'#118dd5',
    confirmButtonAriaLabel:'Confirmar',
})


//Confirmar eliminar algun elemento

Swal.fire({
    title: '¿Estas seguro?',
    text: "¿Seguro que desea eleminar este registro?",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, delete it!'
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire(
        'Deleted!',
        'Your file has been deleted.',
        'success'
      )
    }
  })


