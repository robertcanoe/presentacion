- Componente "MiNombre". Debes indicar tu nombre, apellidos y cuenta de red social. Cada vez que se pase el ratón por encima cambiará de color de forma aleatoria (al menos 10 posibilidades). Siempre se notará el cambio, nunca se repetirá el color. Usa una clase para cambiar de colores. Cada clase tendrá al menos dos colores (de texto, de fondo...)
- Componente "Toggle" que muestra un botón. Mostrará "on" si está encendido y "off" si está apagado. Inicialmente estará apagado. Cada estado se muestra en un color distinto.
- Componente "Cliqueando". Mostrará el número de veces que se ha clicado en un botón que incrementa un contador. Mostrará el valor del contador en una caja de texto. 
    - Si el contador es 0, mostrará "No has clicado aún" en color rojo.
    - Si el contador es 1, mostrará "Has clicado 1 vez" en color amarillo.
    - y si el contador es mayor que 1, mostrará "Has clicado X veces" en color verde.
    - al entrar el ratón en la caja de texto se resetea el contador
- Componente "Contando" que muestra un contador que incrementa en 1, 10, 100 y 1000. Está compuesto de varios componentes "Button". "Button" es un botón que incrementa el contador.
- Componente "Holi" que muestra Hola X, ¿cómo estás?. En caso de no recibir nombre, mostrará "Hola. No te conozco". Usa renderizado condicional con && Usa destructuring al recibir el nombre. Muestra uno con nombre y otro sin nombre.
- Componente "DespliegueEnViernes" que consiste en un textarea que cambia de color a rojo si contiene las palabras "despliegue" o "deploy" junto con "viernes" escrita de cualquier forma: mayúsculas, minúsculas, etc, en cualquier orden. En otro caso, siempre vuelve a negro. Si aparece en rojo también se añade la url clicable "https://youtu.be/Vhmek8362Fc". Al desaparecer el rojo también desaparece la url. 
- Componente "CuentaFuegos" que muestra un botón que al hacer click suma un fuego al contador, muestra el número de fuegos y una imagen por cada fuego.    
- Componente "Destino" que muestra un select con las ciudades y una imagen de la ciudad seleccionada.
- Componente "ImagenCiudad" que muestra la imagen de la ciudad indicada, todas del mismo tamaño. Las imágenes se encuentran en la carpeta public. Forma parte del componente "Destino"
- Componente "Reloj" que muestre la hora actual en formato hh:mm:ss
 


Recuerda aplicar de forma correcta y actualizada todo lo aprendido durante el curso.
- Renderizado condicional
- Usa el operador ternario y &&
- Destructuring en la recepción de las props
- Uso de key para las listas
- Enlaza aquí la documentación que indica dónde colocar las imágenes.
- Evita el uso de if/else, case, for clásico... Recuerda que React es un lenguaje declarativo
- Ordena cada apartado de forma visual.
- ...
- Da un formato elegante.
- Enlaza en cada uno de los componentes de arriba el código fuente del componente.