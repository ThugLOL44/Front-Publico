fetch('https://localhost:7191/api/v1/Mercaderia')
  .then(response => response.json())
  .then(data =>  {
    console.log(data);


    const primeraMercaderia = data[5];


    const url = primeraMercaderia.imagen;
    

    const imagenElemento = document.getElementById('imagen1');
    imagenElemento.src = url;
  })
  .catch(error => {
    console.error('Error:', error);
  });