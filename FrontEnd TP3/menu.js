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

  // fetch('https://localhost:7191/api/v1/Mercaderia')
  // .then(response => response.json())
  // .then(data => {
  //   console.log(data);

  //   const menuItemsContainer = document.getElementById('menu-items');

  //   // Recorre el array de mercaderías
  //   for (var i = 0; i < data.length; i++) {
  //     const mercaderia = data[i];

  //     const divItem = document.createElement('div');
  //     divItem.className = 'menu-item';

  //     const img = document.createElement('img');
  //     img.id = 'imagen' + (i + 1);
  //     img.alt = 'Plato ' + (i + 1);
  //     img.src = mercaderia.imagen;

  //     const h3 = document.createElement('h3');
  //     h3.textContent = mercaderia.nombre;

  //     const p = document.createElement('p');
  //     p.textContent = mercaderia.descripcion;

  //     const span = document.createElement('span');
  //     span.className = 'price';
  //     span.textContent = '$' + mercaderia.precio;

  //     divItem.appendChild(img);
  //     divItem.appendChild(h3);
  //     divItem.appendChild(p);
  //     divItem.appendChild(span);

  //     menuItemsContainer.appendChild(divItem);
  //   }
  // })
  // .catch(error => {
  //   console.error('Error:', error);
  // });