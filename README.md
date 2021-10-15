# Repuestos Rino

El desarrollo del sitio se llevó a cabo haciendo foco en la creación de un diseño práctico, accesible e interactivo con la finalidad de brindar una rápida respuesta a los usuarios.
Cada sección fue pensada con la finalidad de ofrecer dinamismo y asegurar el cumplimiento de las acciones y funcionalidades que proporcionan un sitio óptimo, personalizado y de fácil mantenimiento.
La integración del mismo con la plataforma Sanity proporcionan un carácter autoadministrable de alto grado y, de la combinación con el sitio de Mercado Libre, resulta una potente herramienta de comercio.

## Administración con Sanity ⚙️

- **Producto** Sección de carga de productos
  _*Nombre*: Nombre de producto
  __Slug_: Funciona como id del producto, basta con presionar "Generate" una vez ingresado el nombre
  _*Categoría*: Referencia a categoría del producto
  __Imagen_: Carga de imágen del producto
  _*Marca*: Referencia a marca del producto
  __Motores_: Listado de referencias a los motores a los que el producto es aplicable \*_Link_: Link a Mercado Libre, en caso de dejar en blanco, el sitio no redireccionará a ninguna URL

- **Categoría** Sección de carga de categorías
  _*Nombre*: Nombre de categoría
  __Slug_: Funciona como id de la categoría, basta con presionar "Generate" una vez ingresado el nombre
  _*Imagen*: Carga de imágen de la categoría
  __Destacada_: Se indica si se encuentra o no en el apartado de categorías destacadas (el sitio recibirá hasta 3)

- **Marca** Sección de carga de marcas
  _*Nombre*: Nombre de marca
  __Slug_: Funciona como id de la marca, basta con presionar "Generate" una vez ingresado el nombre
  _*Imagen*: Carga de imágen de la marca
  __Destacada_: Se indica si se encuentra o no en el apartado de marcas destacadas (el sitio recibirá hasta 3)

- **Motor** Sección de carga de motores
  _*Nombre*: Nombre del motor
  __Slug_: Funciona como id del motor, basta con presionar "Generate" una vez ingresado el nombre \*_Marca_: Marca fabricante del motor

- **Carousel** Sección de carga de imágenes del carrusel
  _*Nombre*: Nombre de imágen
  __Slug_: Funciona como id de la imágen, basta con presionar "Generate" una vez ingresado el nombre
  _*Imagen*: Carga de imágen
  __Orden_: Se indica el orden de la imágen en el carrusel, siempre en referencia a las otras imágenes

- **Destacados** Sección para determinar aparición o no de los apartados de destacados en el sitio
  _*Nombre*: Nombre de apartado de destacados (Marcas en Categoría, Categorías en Productos o Categorías en Home)
  __Destacada_: Se indica si aparecerá o no en el sitio

- **Dato** Sección de carga de datos útiles de todo tipo
  _*Mensaje por WhatsApp*: Debe redactarse el mensaje automático que se generará al usuario al solicitar cotización para un producto. La expresión {producto} será reemplazada por el nombre del producto en cuestión
  __Google Maps_: Debe ingresarse etiqueta iframe brindada por Google Maps al solicitar compartir una ubicación
  _*Correo electrónico receptor*: Dirección de correo electrónico al cual lleguen los mensajes de contacto enviados a través del formulario
  __Correo electrónico emisor_: Dirección de correo electrónico que figurará como emisora de los mensajes de contacto enviados a través del formulario \*_Teléfono_: Teléfono de contacto donde se generará el mensaje de WhatsApp al pedir cotización. También se vera reflejado en la sección de contacto.

## Despliegue 📦

El deploy del sitio se realizó en heroku, basta con acceder al mismo desde el GitHub correspondiente, y cualquier modificación que se realice, se vera reflejada en un nuevo deploy en breves segundos.

## Construido con 🛠️

- El sitio fue desarrollado en ReactJS, usando sass como preprocesador para el estilado.
- El servidor fue creado con NodeJs, Express.

## Autores ✒️

- **Eduardo Martín Legname** - _Diseño_
- **Fabricio Capiglioni Dómene** - _Desarrollo_
- **Agustín Andreacchi** - _Desarrollo_
