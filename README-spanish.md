# Frontend Mentor - Manage landing page solution

This is a solution to the [Manage landing page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/manage-landing-page-SLXqC6P5). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents


  - [El desafío](#el-desafío)
  - [Links](#links)
  - [Mi proceso](#mi-proceso)
  - [Creado con](#creado-con)
  - [Lo que aprendí](#lo-que-aprendí)
  - [Lo que sigue](#lo-que-sigue)
  - [Recursos útiles](#recursos-utiles)
  - [Autor](#autor)


### El desafío

Los usuarios deben ser capaces de:

- Ver el diseño óptimo para el sitio según el tamaño de pantalla de su dispositivo
- Ver los diferentes hover states para todos los elementos interactivos en la página
- Ver los testimoniales en un slider horizontal
- Recibir un mensaje de error cuando se envíe el `formulario` de suscripción al boletín si:
   - El campo `input` está vacío
   - La dirección de correo electrónico no tiene el formato correcto



### Links

- Solution URL: [Solution URL](https://your-solution-url.com)
- Live Site URL: [Live site URL](https://managelandingchallenge.netlify.app/)

## Mi proceso

Como siempre lo pirmero que hice fue revisar las plantillas de los distintos diseños para poder comenzar a crear el HTML, después de terminar de crear la estructura básica comencé con el código Css para los dispositivos móviles. Tuve problemas con las imagenes de fondo, no se ajustaban automáticamente , y al cambiar su altura o ancho se deformaban por lo que decidí crearlas yo mismo ya que eran figuras básicas y no suponían mucho problema. Una vez terminado el diseño para dispositivos móviles realicé los ajustes necesarios para el diseño de escritorio.

Al finalizar todo el diseño comencé con la parte de JavaScript, empezando con la navegación y la verificación del correo y, por último, la parte de los testimoniales. Para ser honesto esto fue lo que más tiempo me consumió, el hacer los botones de la navegación y que solo uno tuviera el color de fondo distinto.

La parte más difícil fue hacer que solo el botón seleccionado tuviera el color diferente y al cambiar a otro se quitara. Pero después de varios intentos, buscar información y un pequeño descanso pude encontrar la solución.


### Creado con

- HTML5 semántico
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- JavaScript


### Lo que aprendí

Al no ser capaz de usar de manera correcta las imagenes de fondo proporcionadas tomé la decisión de crearlas con puro HTML5 y Css lo cual me sirvió para reforzar mi conocimento al usar posiciones relativas y abosulutas.

Pude poner en práctica mis habilidades de JavaScript y aprendí a usar de mejor manera los array methods, en especial el forEach.

```html
<h1>Mi solución para las imagenes svg</h1>

    <div class="header__bg"></div> este div sustituye la imagen de fondo del header
    <div class="about-us__image"></div> Este div sustituye la imagen de fondo de la sección about us
```
```css
/*##########    Para revisar conocer los ajustes de los demás dispositivos revisar el archivo CSS*/

.header { 
    padding: 3rem 0 0 0;
    overflow-x: hidden; /*Es importante agregar esta propiedad para que no se desborde el contenido*/
    position: relative;
}
.header__bg { /*Los estilos para el diseño móvil*/
    width: 25rem;
	height: 60rem;
	right: -7.5rem;
	transform: rotate(35deg);
	top: -22rem;
	border-bottom-right-radius: 15rem; 
	border-bottom-left-radius: 15rem;
	position: absolute;
	background-color: var(--lightOrange);
	opacity: 0.1;
}

/*Para la segunda imagen bg es prácticamente lo mismo*/
.about-us {
    position: relative;
}

.about-us__image {
    height: 40rem;
    width: 50%;
    background-color: var(--lightOrange);
    opacity: .2;
    position: absolute;
    right: -13rem;
    border-top-right-radius: 10rem;
    border-top-left-radius: 10rem;
    transform: rotate(225deg);
    top: -25rem;
    display: none;
}
```

### Lo que sigue

Debo aprender a cambiar los estilos de las imagenes SVG ya que no fuí capaz de hacerlo en esta ocasión, ya que no siempre podré recrear la imagen con puro HTML y Css. Tamnbién practicaré más la parte de JavaScript, si bien soy capaz de escribir código aún debo practicar ya que no soy todavía capaz de escribir la solución más simple y efectiva.

### Recursos útiles

- [Recurso 1](https://responsively.app/) - Esta app sirve para ver los cambios que realices a tu diseño en tiempo real en varios dispositivos a la vez, ¡Es muy útil!
- [Recurso 2](https://openai.com/blog/chatgpt) - No estaba 100% seguro de mi código JavaScript en la parte de la creación de los botones de los testimoniales así que decidí pedirle un consejo a la IA y me dió una solución más simple de la que yo había escrito, realmente es útil.



## Autor

- Frontend Mentor - [@DanVillanueva30](https://www.frontendmentor.io/profile/DanVillanueva30)

