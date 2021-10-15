# Repuestos Rino

El desarrollo del sitio se llevó a cabo haciendo foco en la creación de un diseño práctico, accesible e interactivo con la finalidad de brindar una rápida respuesta a los usuarios.
Cada sección fue pensada con el objetivo de ofrecer dinamismo y asegurar el cumplimiento de las acciones y funcionalidades que proporcionan un sitio óptimo, personalizado y de fácil mantenimiento.
La integración del mismo con la plataforma Sanity proporcionan un carácter autoadministrable de alto grado y, de la combinación con el sitio de Mercado Libre, resulta una potente herramienta de comercio.

## Administración con Sanity ⚙️

- **Producto** Sección de carga de productos

  --_Nombre_: Nombre de producto

  --_Slug_: Funciona como id del producto, basta con presionar "Generate" una vez ingresado el nombre

  --_Categoría_: Referencia a categoría del producto

  --_Imagen_: Carga de imágen del producto

  --_Marca_: Referencia a marca del producto

  --_Motores_: Listado de referencias a los motores a los que el producto es aplicable

  --_Link_: Link a Mercado Libre, en caso de dejar en blanco, el sitio no redireccionará a ninguna URL

- **Categoría** Sección de carga de categorías

  --_Nombre_: Nombre de categoría

  --_Slug_: Funciona como id de la categoría, basta con presionar "Generate" una vez ingresado el nombre

  --_Imagen_: Carga de imágen de la categoría

  --_Destacada_: Se indica si se encuentra o no en el apartado de categorías destacadas (el sitio recibirá hasta 3)

- **Marca** Sección de carga de marcas

  --_Nombre_: Nombre de marca

  --_Slug_: Funciona como id de la marca, basta con presionar "Generate" una vez ingresado el nombre

  --_Imagen_: Carga de imágen de la marca

  --_Destacada_: Se indica si se encuentra o no en el apartado de marcas destacadas

- **Motor** Sección de carga de motores

  --_Nombre_: Nombre del motor

  --_Slug_: Funciona como id del motor, basta con presionar "Generate" una vez ingresado el nombre

  --_Marca_: Marca fabricante del motor

- **Carousel** Sección de carga de imágenes del carrusel

  --_Nombre_: Nombre de imágen

  --_Slug_: Funciona como id de la imágen, basta con presionar "Generate" una vez ingresado el nombre

  --_Imagen_: Carga de imágen

  --_Orden_: Se indica el orden de la imágen en el carrusel, siempre en referencia a las otras imágenes

- **Destacados** Sección para determinar aparición o no de los apartados de destacados en el sitio

  --_Nombre_: Nombre de apartado de destacados (Marcas en Categoría, Categorías en Productos o Categorías en Home)

  --_Destacada_: Se indica si aparecerá o no en el sitio

- **Dato** Sección de carga de datos útiles de todo tipo

  --_Mensaje por WhatsApp_: Debe redactarse el mensaje automático que se generará al usuario al solicitar cotización para un producto. La expresión {producto} será reemplazada por el nombre del producto en cuestión

  --_Google Maps_: Debe ingresarse etiqueta iframe brindada por Google Maps al solicitar compartir una ubicación

  --_Correo electrónico receptor_: Dirección de correo electrónico al cual lleguen los mensajes de contacto enviados a través del formulario

  --_Correo electrónico emisor_: Dirección de correo electrónico que figurará como emisora de los mensajes de contacto enviados a través del formulario

  --_Teléfono_: Teléfono de contacto donde se generará el mensaje de WhatsApp al pedir cotización. También se vera reflejado en la sección de contacto.

## Despliegue 📦

El deploy del sitio se realizó en heroku, basta con acceder al mismo desde el GitHub correspondiente, y cualquier modificación que se realice, se vera reflejada en un nuevo deploy en breves segundos.

## Construido con 🛠️

- El sitio fue desarrollado en ReactJS, usando sass como preprocesador para el estilado.
- El servidor fue creado con NodeJs, Express.

## Autores ✒️

- **Eduardo Martín Legname** - _Diseño_
- **Fabricio Capiglioni Dómene** - _Desarrollo_
- **Agustín Andreacchi** - _Desarrollo_
