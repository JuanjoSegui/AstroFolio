---
title: "Videojuego ColorRows"
publishedAt: 2023-05-24
description: "Videojuego creado en Unity"
slug: "Videojuego ColorRows"
isPublish: true
---

![ref1]

**Videojuego ColorRows**

**Autor:** Juan José Seguí Borja

<a name="_gjdgxs"></a>**Documentos del proyecto: [GitHub**](https://github.com/JuanjoSegui/Linear_Puzzle)**

<a name="_30j0zll"></a>Índice de contenidos

[**1.**](#_1fob9te)[	](#_1fob9te)**Introducción	3****

[**1.1.**](#_3znysh7)[	](#_3znysh7)**Motivación	3**

[**1.2.**](#_2et92p0)[	](#_2et92p0)**Abstract	3**

[**1.3.**](#_tyjcwt)[	](#_tyjcwt)**Objetivos propuestos (generales y específicos)	3**

[**1.4.**](#_3dy6vkm)[	](#_3dy6vkm)**Contexto laboral	3**

[**2.**](#_1t3h5sf)[	](#_1t3h5sf)**Metodología usada	4**

[**3.**](#_4d34og8)[	](#_4d34og8)**Tecnologías y herramientas utilizadas en el proyecto	5**

[**4.**](#_2s8eyo1)[	](#_2s8eyo1)**Estimación de recursos y planificación	6**

[**5.**](#_17dp8vu)[	](#_17dp8vu)**Análisis del proyecto	7**

[**6.**](#_3rdcrjn)[	](#_3rdcrjn)**Diseño del proyecto	8**

[**7.**](#_26in1rg)[	](#_26in1rg)**Despliegue y pruebas	9**

[**8.**](#_lnxbz9)[	](#_lnxbz9)**Conclusiones	10**

[**9.**](#_35nkun2)[	](#_35nkun2)**Vías futuras	11**

[**10.**](#_1ksv4uv)[	](#_1ksv4uv)**Bibliografía/Webgrafía	12**

[**11.**](#_44sinio)[	](#_44sinio)**Anexos	13**

[**11.1.**](#_2jxsxqh)[	](#_2jxsxqh)**Manual de Usuario	13**



1. # <a name="_1fob9te"></a>Introducción 
   Los juegos tipo puzzle han sido una categoría muy popular dentro de la industria de los videojuegos desde sus inicios. Su combinación de desafío mental y jugabilidad accesible los ha convertido en favoritos tanto de jugadores casuales como de jugadores más experimentados. Uno de los juegos tipo puzzle más icónicos y reconocidos de todos los tiempos es sin duda el Tetris, creado en la Unión Soviética en 1984 por el desarrollador de videojuegos ruso Alexey Pajitnov. Desde entonces, el Tetris ha sido adaptado a numerosas plataformas y ha sido objeto de múltiples remakes y reinterpretaciones.

En este proyecto, se desarrollará un juego tipo Puzzle en Unity, una de las plataformas más populares para el desarrollo de videojuegos. El objetivo es crear un juego que ofrezca una experiencia de juego parecida al clásico Tetris, al mismo tiempo que sea completamente diferente al cual se le modifican características y mejoras propias del juego moderno. El juego se diseñará para ser accesible y fácil de jugar para todos los públicos, pero también lo suficientemente desafiante para jugadores más experimentados.




1. ## <a name="_3znysh7"></a>Motivación

El desarrollo de un juego tipo puzzle en Unity tiene varias motivaciones. En primer lugar, el Tetris es uno de los juegos tipo puzzle más reconocidos y queridos en la historia de los videojuegos. Su diseño de juego accesible y desafiante ha mantenido a los jugadores comprometidos durante décadas. En segundo lugar, el desarrollo de este juego es una oportunidad para aprender y practicar habilidades de programación y diseño de videojuegos, especialmente en Unity, una plataforma líder en la industria de los videojuegos. Tercero y no menos importante es más que necesario la comprensión que existe en la lógica de los juegos ya conocidos para así partir de una base firme.  Finalmente, se espera que el juego tenga una buena aceptación entre los jugadores y se convierta en un juego popular y exitoso.

1. ## <a name="_2et92p0"></a>Abstract

Este proyecto consiste en el desarrollo de un juego tipo puzzle en Unity, una de las plataformas de desarrollo de videojuegos más populares. El juego ofrecerá una experiencia de juego fiel al clásico Tetris, al mismo tiempo que se agregan características y mejoras propias del juego moderno. El objetivo es crear un juego accesible y fácil de jugar para todos los públicos, pero lo suficientemente desafiante para jugadores más experimentados. El juego se diseñará para ofrecer una experiencia de juego emocionante y satisfactoria, y se espera que tenga una buena aceptación entre los jugadores.

1. ## <a name="_tyjcwt"></a>Objetivos propuestos 

Objetivos generales:

- Desarrollar un juego tipo Puzzle en Unity.
- Ofrecer una experiencia de juego fiel al clásico Tetris, pero al mismo tiempo que sea diferente e incluya mejoras propias del juego moderno.
- Crear un juego accesible y fácil de jugar para todos los públicos, pero lo suficientemente desafiante para jugadores más experimentados.
- Diseñar el juego para ofrecer una experiencia de juego emocionante y satisfactoria.

Objetivos específicos:

- Diseñar la mecánica del juego, incluyendo las reglas, el control de los elementos y la interacción del jugador con el juego.
- Creación del tablero de juego y de la lógica de este.
- Crear un conjunto de piezas de colores y diseñar su comportamiento dentro del tablero.
- Desarrollar un sistema de puntuación y un sistema de niveles para mantener al jugador entretenido el máximo tiempo posible.



1. ## <a name="_3dy6vkm"></a>Contexto laboral
   ## <a name="_lw7kf23b1ax9"></a>En cuanto al contexto laboral, es importante destacar que la industria de los videojuegos es una de las más pujantes y con mayor crecimiento en la actualidad, generando una gran cantidad de oportunidades de trabajo en diversas áreas, como el diseño, programación, arte y sonido, entre otras. Además, los juegos tipo puzzle, como el popular Tetris, han sido siempre una opción atractiva para los jugadores y desarrolladores por su sencillez y desafío, lo que los convierte en una opción interesante para incursionar en el mundo de los videojuegos. Con este proyecto, se espera no solo crear un juego divertido y entretenido, sino también adquirir conocimientos y habilidades útiles para una posible carrera en el campo de la programación y el desarrollo de videojuegos.![ref2]
1. # <a name="_1t3h5sf"></a>Metodología usada 

Metodología usada en un videojuego convencional:

La creación de un videojuego convencional es un proceso complejo y multidisciplinario que involucra a diferentes equipos de trabajo, desde diseñadores hasta programadores y artistas. Para llevar a cabo este proceso se suelen utilizar diferentes metodologías, como Agile o Waterfall, dependiendo de las necesidades y objetivos del proyecto.

La metodología Agile se centra en la colaboración y la comunicación constante entre los miembros del equipo, lo que permite una mayor flexibilidad en la toma de decisiones y en la adaptación a los cambios. Por otro lado, la metodología Waterfall se basa en una estructura más jerarquizada y secuencial, donde cada fase del proyecto se completa antes de pasar a la siguiente.

En ambos casos, el proceso de desarrollo de un videojuego convencional implica una planificación detallada, la definición de objetivos claros y alcanzables, la creación de prototipos y la realización de pruebas exhaustivas para garantizar la calidad del producto final.

Metodología usada en la creación del juego fue no obstante sobre Kanban al entender que se adapta mejor a un proyecto unipersonal:

En la creación de mi juego tipo puzzle mediante Kanban, utilicé una metodología de desarrollo iterativo que me permitió adaptarme a los cambios y desafíos que surgían durante el proceso. Debido a que este fue un proyecto que realicé como una sola persona, era importante que mi proceso de desarrollo fuera lo más eficiente y flexible posible.

La metodología que utilicé se basó en una serie de ciclos de desarrollo, cada uno de los cuales comenzaba con un objetivo específico. Por ejemplo, en el primer ciclo me concentré en la creación de la estructura básica del juego, incluyendo el diseño de las piezas, la lógica del juego y el tablero. Luego, en ciclos posteriores, me enfoqué en agregar nuevas características, corregir errores y optimizar el rendimiento del juego.

Una de las ventajas de esta metodología fue que me permitió realizar pruebas de juego tempranas y obtener los conocimientos necesarios para la jugabilidad y la funcionalidad del juego. También pude identificar rápidamente problemas y trabajar en soluciones eficaces.

Otro enfoque que utilicé en la metodología de mi proyecto fue la creación de prototipos. En lugar de pasar mucho tiempo diseñando y desarrollando una característica antes de probarla, creé versiones de prueba más simples y rápidas. De esta manera, pude verificar si la característica era viable antes de invertir más tiempo en su desarrollo.

Además, también me aseguré de mantener una documentación dentro del código de forma clara y organizada en todo momento. Esto me permitió mantenerme enfocado en mis objetivos de desarrollo y tener una idea clara de mi progreso.

En resumen, la metodología Kanban que utilicé me permitió desarrollar mi juego tipo puzzle de manera eficiente y eficaz como un proyecto de una sola persona. Me permitió adaptarme a los cambios y desafíos que surgían, al mismo tiempo que mantenía un enfoque claro en mis objetivos de desarrollo.



1. # <a name="_4d34og8"></a>Tecnologías y herramientas utilizadas en el proyecto
   Durante el desarrollo del proyecto, se utilizaron diversas herramientas y tecnologías para lograr su implementación exitosa. A continuación, se describen las principales herramientas utilizadas y cómo se aplicaron en el proceso de desarrollo del juego.

![ref2]

Unity fue la principal herramienta utilizada para el desarrollo del juego. Esta plataforma es ampliamente utilizada en la industria de los videojuegos y ofrece una gran cantidad de herramientas y recursos para crear juegos de alta calidad. Unity es una plataforma de desarrollo de videojuegos multiplataforma que admite diferentes plataformas de hardware y sistemas operativos. Ofrece una interfaz gráfica de usuario intuitiva y fácil de usar que permite a los desarrolladores crear juegos y aplicaciones de alta calidad con una cantidad mínima de programación. Unity también ofrece una amplia gama de herramientas de modelado y animación 3D que facilitaron la creación de los gráficos y las animaciones utilizadas en el juego.


Visual Studio fue la herramienta utilizada para el desarrollo del código fuente del juego. Es un entorno de desarrollo integrado (IDE) de Microsoft que ofrece un gran conjunto de herramientas y características para el desarrollo de software. La integración de Visual Studio con Unity fue particularmente útil, ya que permitió depurar y desarrollar el código fuente de Unity directamente en Visual Studio, no obstante por eso viene por defecto con Unity, se puede usar otro IDE pero siempre es más recomendable el uso de Visual Studio para programar en C#.


En cuanto al lenguaje de programación utilizado en el proyecto, se ha optado por C# debido a su estrecha integración con Unity, lo que permite un desarrollo más rápido y eficiente de la lógica del juego y sus diferentes elementos. Además, C# es un lenguaje orientado a objetos y cuenta con una sintaxis clara y fácil de entender, lo que lo hace ideal para el desarrollo de videojuegos.

En cuanto a las características específicas de C# utilizadas en el proyecto, se ha hecho uso de la programación orientada a objetos para la creación de clases y objetos, la herencia para reutilizar código y la encapsulación para mantener el código organizado y fácil de mantener. Además, se ha utilizado la biblioteca de Unity, que ofrece una gran cantidad de funciones y clases predefinidas, lo que simplifica el proceso de desarrollo y facilita la creación de elementos.


Git fue la herramienta utilizada para la gestión de versiones del proyecto. Git es un sistema de control de versiones de código abierto que permite a los desarrolladores rastrear los cambios en el código fuente a lo largo del tiempo. Git también facilitó la creación del proyecto, ya que permitió tener backups del proyecto funcionando mientras probaba funcionalidades nuevas sin miedo a “romper” el trabajo realizado.


SqLite fue la herramienta utilizada para la gestión de la base de datos del juego. SqLite es un sistema de gestión de bases de datos relacional que ofrece una implementación ligera y eficiente de SQL. SqLite se utilizó para almacenar la información del juego, como la puntuación del jugador, las líneas completadas y la fecha y hora de la partida. La implementación de SqLite también permitió que los datos se guardaran localmente en el dispositivo del jugador, lo que permitió que el juego se utilizara sin conexión a Internet.

En resumen, la combinación de Unity, C# en Visual Studio, Git y SqLite proporcionó una base sólida para el desarrollo del juego. Estas herramientas y tecnologías permitieron que el proceso de desarrollo fuera más eficiente y sencillo.
1. # <a name="_2s8eyo1"></a>Estimación de recursos y planificación 
La planificación y la estimación de recursos son esenciales para cualquier proyecto de software, incluyendo la creación de un videojuego. La planificación implica definir las tareas necesarias para completar el proyecto y estimar el tiempo y los recursos necesarios para llevar a cabo cada tarea.

En la fase de investigación y diseño, se invirtieron alrededor de 20 horas. En esta etapa, se realizaron búsquedas sobre las características que debía tener el juego ColorRows, así como su mecánica, elementos gráficos y la lógica dentro de este.

En la fase de desarrollo, se planificó invertir 150 horas. En esta etapa se incluyó la investigación y documentación, la programación de todas las funciones y mecánicas del juego, así como la creación de los elementos gráficos.

La fase de pruebas y correcciones, tuvo una duración estimada de 10 horas. En esta fase se probaron todas las mecánicas y funcionalidades del juego, se detectaron bastantes errores y se hicieron las correcciones necesarias alargando esta fase mucho más de lo previsto. 

Por último, en la fase de documentación se dedicaron aproximadamente 10 horas para la creación del manual de usuario, el informe final y la recopilación de toda la información necesaria para el proyecto.

Con esto, se logró cumplir con el tiempo estimado para cada fase y el proyecto se entregó en el plazo previsto. Es importante mencionar que se hizo un seguimiento constante del tiempo invertido y se realizaron ajustes en la planificación según las necesidades del proyecto.


En resumen, la planificación y la estimación de recursos son esenciales para cualquier proyecto de software, incluyendo un juego. En mi proyecto de juego tipo tetris, se realizó una planificación cuidadosa y se establecieron objetivos claros para garantizar que se alcanzara el éxito del proyecto.

1. # <a name="_17dp8vu"></a>Análisis del proyecto![ref3]
   Los objetivos del proyecto se establecieron con el fin de crear un juego de tipo puzzle que fuera accesible y entretenido para el público en general. Se pretendía diseñar un juego que fuera fácil de jugar pero que también presenta ciertos desafíos para mantener al usuario interesado. El objetivo principal del juego era proporcionar una experiencia de juego satisfactoria y adictiva.


Para alcanzar este objetivo, se llevó a cabo un análisis detallado de los requisitos del juego. Se definió un conjunto de funcionalidades que se consideraron esenciales para lograr una experiencia de juego satisfactoria. Estos requisitos incluyeron la capacidad de mover las piezas de Tetris en cualquier dirección, rotarlas, eliminar líneas completas de bloques y obtener puntos por hacerlo. También se incluyó una característica de dificultad creciente para aumentar el desafío del juego y mantener la atención del jugador.


Además de los requisitos del juego en sí, también se consideraron los requisitos técnicos necesarios para desarrollar el juego. Se evaluaron diferentes herramientas y tecnologías para determinar las más adecuadas para el proyecto. Se seleccionó Unity como motor de juego debido a su facilidad de uso y su capacidad para trabajar con múltiples plataformas.

![ref2]

En general, el análisis de los objetivos y los requisitos del proyecto fue crucial para garantizar el éxito del juego. Se establecieron objetivos claros y se definieron los requisitos necesarios para cumplir con estos objetivos. Esto permitió que el equipo de desarrollo se enfocará en el diseño y la implementación del juego de manera efectiva y eficiente.


**Análisis de viabilidad técnica:**

Para el desarrollo del proyecto, se realizó un análisis de viabilidad técnica para asegurarnos de que se podrían alcanzar los objetivos establecidos en la planificación. Se evaluó el uso de Unity y C# como tecnologías principales, y se consideró que eran suficientes para la implementación del juego tipo puzzle. Además, se evaluaron mis capacidades técnicas como desarrollador en cuanto a su conocimiento en el uso de Unity, C# y la implementación de mecánicas de juego. Se determinó que había suficiente experiencia y habilidades para llevar a cabo el proyecto.


**Identificación de casos de uso:**

Se identificaron los casos de uso del proyecto para tener una idea clara de cómo funcionaría el juego en su conjunto. En primer lugar, se identificó el caso de uso principal, que es el del jugador moviendo las piezas y completando líneas. Luego, se identificaron casos de uso secundarios, como la creación de un nuevo juego y el registro de puntuaciones en una base de datos. De esta manera, se aseguró que se cubrieran todos los aspectos importantes del juego y se tuviera una comprensión clara de su funcionamiento.


**Diseño de la arquitectura del sistema e interfaz de usuario:**

El diseño de la arquitectura del sistema es un aspecto fundamental del proyecto, ya que define la estructura y organización del código, permitiendo una mejor comprensión, mantenimiento y escalabilidad del juego ColorRows.

![ref4]

Las 3 partes fundamentales dentro del desarrollo:

La parte de LogicaTablero contiene los datos del juego, como las piezas, el tablero y el puntaje, y define la lógica del negocio del juego, como la generación de nuevas piezas y la detección de líneas completas. La parte de Unity se encarga de la presentación visual del juego, incluyendo la interfaz de usuario y la representación gráfica de las piezas y el tablero. Por último, la parte de SquareController recibe los eventos del usuario  actualizando la vista del juego  en consecuencia.

En cuanto a la interfaz de usuario, se diseñó de manera sencilla y minimalista posible, con una paleta de colores atractiva y una disposición clara de los elementos. En vías futuras plantearemos cómo añadir funcionalidades sin perder este minimalismo.

En general, el diseño de la arquitectura del sistema y la interfaz de usuario del juego ColorRows fueron pensados para facilitar su uso y permitir su escalabilidad en el futuro.


Plan de pruebas:

El plan de pruebas y validación del sistema es una parte esencial en el proceso de desarrollo de cualquier software, incluyendo videojuegos. El objetivo es garantizar que el sistema cumpla con las especificaciones y funcione correctamente en diferentes escenarios.

Para el juego ColorRows, el plan de pruebas y validación del sistema incluye pruebas funcionales y de rendimiento. Las pruebas funcionales se centran en asegurar que las diferentes características del juego funcionen correctamente, incluyendo la generación aleatoria de piezas, la detección de colisiones, la eliminación de líneas completas y el aumento de puntos.

![ref5]

Las pruebas de rendimiento se centran en evaluar el desempeño del juego en diferentes situaciones, como el número de piezas en pantalla y la velocidad de incorporación de las piezas. Se realizaron pruebas de rendimiento en diferentes plataformas y dispositivos para garantizar que el juego se ejecute sin problemas en diferentes configuraciones de hardware.

Además, se llevaron a cabo pruebas de usabilidad para evaluar la interfaz de usuario del juego y asegurarse de que sea fácil de entender y utilizar por los usuarios. Se realizarán pruebas de usabilidad en diferentes grupos de usuarios para garantizar que la interfaz sea accesible para todos.

También se realizaron pruebas de compatibilidad para asegurarse de que el juego funcione correctamente en diferentes sistemas operativos.

En resumen, el plan de pruebas y validación del sistema es una parte crítica del proceso de desarrollo del juego ColorRows y garantizará que el juego sea de alta calidad y cumpla con los requisitos y expectativas del usuario.

Durante el proceso de desarrollo del proyecto, identifiqué varios posibles riesgos que podrían afectar la calidad y el éxito del juego. Uno de los mayores riesgos era la posibilidad de que el juego presentara errores o fallos técnicos durante su ejecución, lo que podría afectar negativamente la experiencia del usuario.

Para mitigar este riesgo, realicé pruebas exhaustivas en diferentes etapas del proceso de desarrollo. Probé el juego en diferentes plataformas y dispositivos para asegurarme de que funcionara correctamente y no tuviera problemas de rendimiento.

Otro riesgo identificado fue la posibilidad de que el diseño del juego no fuera atractivo para los usuarios, lo que podría resultar en una baja tasa de interacción y uso. Para mitigar este riesgo, realicé investigaciones de mercado y análisis de tendencias de juegos similares para asegurarme de que el diseño fuera atractivo y se ajustará a las expectativas de los usuarios.

Además, identifiqué la posibilidad de que el juego no fuera compatible con ciertas plataformas o dispositivos, lo que limitaría su accesibilidad. Para mitigar este riesgo, realicé pruebas de compatibilidad en diferentes plataformas y dispositivos para asegurarme de que el juego pudiera ser jugado en la mayoría de los dispositivos populares.

En general, la identificación de estos riesgos y la implementación de planes de mitigación me permitió minimizar los posibles obstáculos y asegurar que el juego fuera de alta calidad y tuviera éxito en el mercado.

El plan de mantenimiento y evolución del sistema tiene como objetivo asegurar la calidad del juego y su correcto funcionamiento a largo plazo. Para ello, se llevarán a cabo diversas acciones, tales como:

Actualizaciones de software: Se buscará mantener actualizado el software utilizado en el desarrollo del juego, así como de sus librerías y plugins, a fin de evitar posibles fallos de compatibilidad y mejorar la seguridad.

Revisiones periódicas: Se realizarán revisiones periódicas del código fuente, identificando y corrigiendo errores o posibles mejoras en la funcionalidad del juego.

Testeo y depuración: Se llevarán a cabo pruebas de testeo y depuración periódicas, con el fin de asegurarse de que el juego sigue funcionando correctamente y sin errores.

Mejoras y actualizaciones: Se incluirán mejoras y actualizaciones al juego, tanto en su funcionalidad como en su interfaz de usuario, para mantener el interés y la satisfacción de los usuarios.

Análisis de métricas: Se realizará un seguimiento y análisis de las métricas del juego, para detectar posibles problemas o áreas de mejora en la experiencia de usuario.

El plan de mantenimiento y evolución del sistema será una tarea constante y a largo plazo, que permitirá asegurar la calidad del juego y la satisfacción de los usuarios a lo largo del tiempo.

La integración de publicidad y monetización en un juego es una decisión importante que debe ser abordada en la etapa de diseño del proyecto. En el caso del juego Tetris, es posible integrar publicidad de diferentes maneras, como mostrar anuncios intersticiales entre los niveles del juego, incluir publicidad en la pantalla de inicio o en la pantalla de game over, o incluso ofrecer una opción para eliminar los anuncios a cambio de una compra dentro de la aplicación.

En cuanto a la monetización, por ejemplo, la posibilidad de ofrecer una versión premium del juego sin anuncios. Es importante tener en cuenta que la monetización no debe afectar negativamente la experiencia del usuario y que la integración de publicidad debe ser lo más sutil posible por lo que hay que tener especial cuidado de no entorpecer la experiencia de usuario aunque este utilice la versión gratuita del juego.

Es importante también considerar la plataforma en la que se va a publicar el juego, ya que cada plataforma tiene sus propias políticas en cuanto a la integración de publicidad y monetización. En cualquier caso, como hemos dicho anteriormente, se debe tener en cuenta que la integración de publicidad y monetización debe ser transparente y no perjudicar la experiencia del usuario.

La distribución del juego es un factor clave para que el proyecto tenga éxito. Para definir la estrategia de distribución de mi juego, he considerado varias opciones. Una de ellas es publicar el juego en la tienda de aplicaciones de Google Play o App Store, cuando el gameplay del juego se adapte a interfaces táctiles, donde los usuarios podrían descargarlo de forma gratuita y luego tener la opción de comprar elementos adicionales en la aplicación (in-app purchases), o la anteriormente mencionada versión sin publicidad.

Otra opción es publicarlo en una plataforma de juegos en línea, donde los usuarios pueden jugar en línea y compartir sus puntuaciones con otros jugadores como Steam o GOG.


También he considerado la posibilidad de vender el juego directamente en mi sitio web. Este método ,aunque en desuso, podría ofrecer descuentos y promociones para atraer a los jugadores y aumentar las ventas.

En resumen, la estrategia de distribución dependerá del público objetivo y las metas de monetización del juego. Es importante considerar todas las opciones disponibles y elegir la que mejor se adapte a las necesidades del proyecto. O incluso publicarlo en todos los lugares posibles para que cada jugador decida dónde prefiere jugar, esto aunque es la forma más difícil tampoco tiene porque hacerse de golpe, se puede invertir el tiempo en adaptar el juego primero a los Marketplace más famosos para luego ir añadiendo a otros más minoritarios.



1. # <a name="_3rdcrjn"></a>Diseño del proyecto 
Para la definición de la arquitectura del software, comencé por identificar los diferentes componentes que conformarán el juego. En primer lugar, se encontraba la lógica del juego, que incluía la generación de piezas, su movimiento e incorporación al tablero de las nuevas casillas, la detección de colisiones y la eliminación de líneas completas.

![ref6]

El primer punto a tratar fue la creación el elemento Tablero, que funcionará como fondo del juego en cuestión y el elemento Main Camera que nos delimita la vista que el usuario tiene de la escena:





Luego, se definieron los componentes de la interfaz de usuario. Para cada una de las piezas se utilizó el mismo elemento base.


El cual llamamos CasillaBlanca, creamos su BoxColider para que interactúe con las demás casillas, le dimos el tamaño deseado y empezamos con la lógica dentro de la casilla para después aplicarla al resto de casillas con otros colores.

Se utilizó C# como lenguaje de programación para implementar la lógica del juego y la interacción con el usuario, y se utilizó Unity como motor de juego para crear y renderizar los gráficos. La estructura del código se organizó en clases y métodos, de acuerdo con los componentes y funciones definidos en la arquitectura del software.

**Diseño de la interfaz de usuario**

En el diseño de la interfaz de usuario, se buscó crear una experiencia visual atractiva y coherente con la temática del juego Tetris. Se optó por un diseño minimalista y sencillo, en el que la atención se centrara en la jugabilidad del juego y en la disposición de las piezas.

![ref7]

El área de juego ocupa la mayor parte de la pantalla y es donde se desarrolla el juego, mientras que el marcador de puntos muestra el puntaje del jugador.

Para el diseño visual, se seleccionaron colores brillantes y alegres para las piezas, y se espaciaron entre sí para dar un mejor efecto visual. Además, se incluyeron animaciones suaves y fluidas para mejorar la experiencia de juego.

En cuanto a la disposición de elementos, se optó por una distribución sencilla y fácil de entender, que permitiera al jugador centrarse en el juego sin distracciones innecesarias. La interfaz fue diseñada pensando en la comodidad y facilidad de uso del usuario, asegurándonos de que la experiencia de juego fuera intuitiva y fácil de entender.

**Definición de la mecánica del juego**

Para la definición de la mecánica del juego, se partió de la mecánica clásica del Tetris, que consiste en controlar la caída de las piezas para completar líneas horizontales sin que las piezas se acumulen en la parte superior de la pantalla, pero cambiando el esquema de este a uno totalmente nuevo. 

Para implementar esta mecánica, se diseñó un sistema de colisiones que detecta cuando una pieza colisiona con otra para que en ningún momento una pieza se superponga con otra al interactuar con ella. Además, se programó un algoritmo que detecta cuando se completa una línea horizontal, eliminándola y otorgando al jugador una cantidad determinada de puntos. 

En resumen, el diseño de la mecánica del juego se basó en la mecánica clásica del Tetris, pero se le agregaron algunas características adicionales para hacerlo más interesante y desafiante. Se buscó que la experiencia de juego sea entretenida y que mantenga al jugador enganchado durante largos períodos de tiempo.

**Diseño de piezas y selección de colores**

En cuanto al diseño de las piezas y la selección de colores, opté por utilizar las piezas mas basicas posibles, un simple cuadrado de diferentes colores, que está. Para asegurarme de que las piezas encajaran correctamente, realicé varias pruebas y ajustes hasta encontrar el tamaño y las dimensiones adecuadas para que las piezas se adacuaran al tablero.

En cuanto a la selección de colores, opté por una paleta de colores brillantes y vibrantes para hacer que el juego fuera más atractivo visualmente. Cada pieza tiene su propio color, lo que facilita al jugador distinguir entre ellas y saber cuál es la siguiente pieza que quiere intercambiar. Además, la elección de colores ayuda a destacar las piezas completas y agradables a la vista.

En resumen, el diseño de las piezas y la selección de colores fueron aspectos importantes en el desarrollo del juego, ya que ayudaron a crear una experiencia visualmente atractiva y atractiva para los jugadores.

**Definición del flujo de navegación del usuario**

Para definir el flujo de navegación del usuario en el juego ColorRows, primero analicé cómo se movería el jugador dentro de la interfaz de usuario y qué acciones realizaría. Luego, diseñe la lógica para que las piezas se intercambiaran por la inmediatamente inferior.


El flujo de navegación del usuario se diseñó para ser intuitivo y fácil de seguir, permitiendo a los jugadores navegar por las diferentes funcionalidades del juego de manera fluida y sin problemas.

Añadí la detección de filas completas, donde todas las casillas en una fila tienen el mismo color, y la lógica para reemplazar las casillas completas con casillas blancas.


Implementé un sistema de puntuación que otorga 100 puntos al jugador cuando completa una fila y suma esos puntos al marcador total.





También se agregaron algunas mecánicas adicionales, como la velocidad creciente de las piezas a medida que se avanza en el juego a partir de los datos proporcionados en la variable Score.


Resolví varios errores y problemas de referencia nula en el proceso de desarrollo, ajustando el código según sea necesario para garantizar que el juego funcione correctamente.

A lo largo del proceso, he trabajado en la depuración y optimización del juego para asegurarme de que funcione sin problemas y ofrezca una experiencia de usuario agradable


**Diseño de la base de datos**

El diseño de la base de datos es una parte crucial en la creación del juego. En nuestro caso, hemos utilizado una base de datos SQLite para almacenar los puntajes de los jugadores. La base de datos se encarga de guardar la información de la fecha de juego, la cantidad de puntos obtenidos y la cantidad de líneas completadas.

Para interactuar con la base de datos desde nuestro juego, hemos creado una clase llamada DatabaseManager. Esta clase se encarga de abrir la conexión con la base de datos, crear las tablas necesarias si no existen y permitir la inserción de datos en las tablas. En nuestro caso, hemos creado métodos para insertar la fecha, la cantidad de puntos y la cantidad de líneas completadas.


La base de datos es una parte fundamental en el diseño del proyecto, ya que permite almacenar la información necesaria para llevar un registro de los puntajes obtenidos por los jugadores. Además, al utilizar una base de datos local, se evita la necesidad de utilizar un servidor externo para el almacenamiento de la información.


1. # <a name="_26in1rg"></a>Despliegue y pruebas
Para el despliegue y pruebas de nuestro juego, lo primero que hemos hecho ha sido realizar pruebas unitarias en las diferentes funcionalidades del juego, asegurándonos de que todo funciona correctamente antes de proceder a su despliegue.

En cuanto al despliegue, hemos utilizado la plataforma de Google Play para subir nuestro juego y hacerlo disponible para su descarga en dispositivos móviles Android. Para ello, hemos tenido que crear una cuenta de desarrollador en Google y seguir los pasos necesarios para publicar la aplicación, tales como configurar los ajustes de la tienda, subir el archivo .apk, establecer la información de la aplicación y proporcionar capturas de pantalla y descripciones.

Además, también hemos realizado pruebas en dispositivos reales para asegurarnos de que el juego funciona correctamente en diferentes tamaños y resoluciones de pantalla, así como en diferentes versiones de Android.

En cuanto a las pruebas de rendimiento, hemos utilizado diferentes herramientas para medir el rendimiento del juego y su estabilidad en diferentes situaciones. Hemos utilizado herramientas de análisis de rendimiento para detectar y solucionar cuellos de botella y mejorar la velocidad de carga y la respuesta del juego.

Por último, hemos recopilado y analizado la retroalimentación de los usuarios para mejorar la experiencia de juego y corregir cualquier problema encontrado.

En resumen, el despliegue y pruebas de nuestro juego ha sido un proceso riguroso que nos ha permitido asegurarnos de que el juego es estable, funciona correctamente y ofrece una experiencia de juego satisfactoria para los usuarios.


1. # <a name="_lnxbz9"></a>Conclusiones 
En conclusión, este proyecto de desarrollo de un juego tipo puzzle en Unity ha sido una experiencia muy enriquecedora en términos de aprendizaje y desarrollo de habilidades. A lo largo del proceso, se ha aplicado una metodología rigurosa y se ha utilizado una variedad de herramientas y tecnologías para asegurar el éxito del proyecto.

Uno de los principales desafíos fue el tiempo limitado disponible para desarrollar el juego, lo que requirió una planificación cuidadosa de los recursos y una buena gestión del tiempo. A pesar de esto, se logró cumplir con los objetivos establecidos y entregar un producto de alta calidad.

Otro aspecto importante que se destaca es la importancia de las pruebas y el despliegue. Las pruebas ayudaron a identificar y corregir errores en el código y aseguraron que el juego funcionara correctamente en diferentes dispositivos y plataformas. El despliegue, por su parte, permitió que el juego fuera accesible al público y generó feedback valioso que se puede utilizar para mejoras futuras.

En general, el proyecto fue una experiencia gratificante que permitió adquirir conocimientos técnicos y habilidades en el desarrollo de videojuegos en Unity. Además, se pudo poner en práctica la metodología de desarrollo ágil y aprender sobre el uso de herramientas de control de versiones y de gestión de proyectos, lo que será muy útil en futuros proyectos.


1. # <a name="_35nkun2"></a>Vías futuras 
En cuanto a las vías futuras del proyecto, existen varias posibilidades para mejorar y expandir el juego. Algunas de estas opciones incluyen:

1\. Incorporar más niveles: Actualmente, el juego cuenta con un único nivel. Se podría trabajar en la creación de más niveles con diferentes patrones de casillas y una dificultad creciente.

2\. Modos de juego adicionales: Se podría trabajar en la creación de nuevos modos de juego que añadan una mayor variedad al juego y lo hagan más entretenido. Por ejemplo, se podría agregar un modo contrarreloj o un modo de competición para dos jugadores.

3\. Mejoras en la interfaz de usuario: A pesar de que la interfaz de usuario del juego es funcional, existen oportunidades para mejorarla. Se podría trabajar en la implementación de una pantalla de inicio más atractiva, una interfaz de usuario más intuitiva y la incorporación de efectos de sonido y música.

4\. Adaptación a diferentes plataformas: Si bien el juego fue desarrollado en Unity, se podría trabajar en la adaptación del juego a diferentes plataformas como móviles o consolas, lo que permitiría llegar a un público más amplio.

En conclusión, hay muchas vías futuras para el proyecto de juego tipo puzzle en Unity. Con el uso de las habilidades y técnicas adquiridas a lo largo del proyecto, se puede mejorar y expandir el juego para hacerlo más entretenido y atractivo para un público cada vez mayor.


1. # <a name="_1ksv4uv"></a>Bibliografía/Webgrafía 
Documentación oficial de Unity: 

https://docs.unity3d.com/Manual/index.html

Documentación oficial de C#: 

https://docs.microsoft.com/es-es/dotnet/csharp/

Tutoriales de Unity y C# en YouTube: 

Curso completo de C# de Pildoras Informaticas

https://www.youtube.com/@pildorasinformaticas

Curso completo de Unity de FreeCodeCamp.org

https://www.youtube.com/watch?v=gB1F9G0JXOo

Foros de desarrollo de videojuegos en Unity: 

https://forum.unity.com/

Libros sobre desarrollo de videojuegos y programación en C#, 

978-6205860106 “Aprende C# con Unity: de principiante a desarrollador de juegos: Conviértete en un desarrollador de juegos experimentado aprendiendo C# con Unity”

979-8510803518 “Introducción a Unity: Desarrollo de videojuegos 2D con Unity”

Documentación de Visual Studio:

https://learn.microsoft.com/es-es/visualstudio/windows/?view=vs-2022

Documentación de SQLite:

https://www.sqlite.org/docs.html






1. # <a name="_44sinio"></a>Anexos
Manual de usuario del juego ColorRows

Introducción

ColorRows es un juego de rompecabezas en el que el jugador debe completar filas de casillas del mismo color. Este manual de usuario le guiará a través de las características del juego y le enseñará cómo jugar y disfrutar de ColorRows.

**Abra ColorRows y empiece a jugar.**

Cómo jugar

El objetivo del juego es completar filas de casillas del mismo color. Las casillas se añadirán desde la parte inferior de la pantalla en una cuadrícula. El jugador debe mover las casillas hacia abajo para encajarlas en la cuadrícula y formar filas completas del mismo color.

Mover casillas: Haga clic en una casilla y esta se moverá hacia abajo para moverla a una nueva posición en la cuadrícula deseada.

Completar filas: Cuando se completa una fila del mismo color, la fila se eliminará y se otorgarán puntos al jugador.

Puntuación: El jugador gana puntos al completar filas. La puntuación aumenta con cada fila completada.

Controles y atajos de teclado

Clic izquierdo del ratón: seleccionar y mover casillas, al hacer clic en la casilla seleccionada esta se intercambiará por la inmediatamente inferior.

Pausar y reanudar el juego

Para pausar el juego, presione la tecla "P" en su teclado. Para reanudar el juego, presione la tecla "P" nuevamente.

Ayuda y soporte

Si necesita ayuda adicional o experimenta problemas técnicos, visite el sitio web oficial de ColorRows para obtener soporte y recursos adicionales.

colorrows.com

¡Disfrute jugando ColorRows y buena suerte completando todas las filas!







