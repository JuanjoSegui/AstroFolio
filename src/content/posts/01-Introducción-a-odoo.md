---
title: "Curso completo Odoo"
publishedAt: 2024-01-01
description: "Curso de desarrollo en Odoo"
slug: "El poder de Odoo a tu alcance"
isPublish: true
---

**Módulo 1: Introducción a Odoo**

**1. Introducción a Odoo:**

Odoo, un sistema integral de planificación de recursos empresariales (ERP), ha evolucionado como una solución versátil y poderosa para la gestión empresarial. Desde su concepción como un conjunto de aplicaciones básicas hasta convertirse en un ERP completamente integrado, Odoo ha revolucionado la forma en que las empresas abordan sus procesos operativos.

Historia y Trayectoria:

Odoo se originó en Bélgica en el año 2005 como TinyERP y se ha transformado continuamente para adaptarse a las cambiantes necesidades empresariales. Con el tiempo, ha madurado en un software de código abierto que abarca una amplia gama de módulos, desde ventas y compras hasta recursos humanos, inventario y más.

Versatilidad y Modularidad:

Una de las características distintivas de Odoo es su enfoque modular, permitiendo a las empresas elegir y personalizar solo los módulos que necesitan. Esto proporciona flexibilidad para adaptarse a diferentes sectores y tamaños de empresas, desde pequeñas startups hasta grandes corporaciones.

Funcionalidades Destacadas:

Odoo abarca diversas funciones empresariales, incluyendo la gestión de clientes, proveedores, inventario, ventas, compras y más. La integración completa de estos módulos brinda una visión unificada y coherente de todas las operaciones comerciales, mejorando la eficiencia y la toma de decisiones.

Comunidad Activa y Soporte:

La comunidad global de Odoo, compuesta por desarrolladores, usuarios y expertos, contribuye al desarrollo y mejora continua del software. Además, existe una amplia documentación y recursos de soporte, lo que hace que Odoo sea accesible y respaldado por una red sólida.


**Módulo 2. Sistemas Linux**

2\.2. Comandos Básicos:

En este módulo, nos sumergiremos en la interacción con sistemas Linux, un entorno operativo ampliamente utilizado para implementar Odoo y otros servicios empresariales. Familiarizarse con los comandos básicos de Linux es esencial para administrar y mantener eficientemente un servidor Odoo. Aquí, destacamos algunos comandos fundamentales:

ls - Listar Contenido de Directorio:

ls: Muestra el contenido del directorio actual.

ls -l: Proporciona detalles, incluyendo permisos, propietario y fecha de modificación.

cd - Cambiar Directorio:

cd <directorio>: Se desplaza al directorio especificado.

cd ..: Retrocede un nivel en la estructura de directorios.

pwd - Directorio Actual:

pwd: Muestra la ruta completa del directorio actual.

cp - Copiar Archivos o Directorios:

cp <origen> <destino>: Copia archivos o directorios.

mv - Mover o Renombrar Archivos:

mv <origen> <destino>: Mueve o renombra archivos.

rm - Eliminar Archivos o Directorios:

rm <archivo>: Elimina archivos.

rm -r <directorio>: Elimina directorios de forma recursiva.

mkdir - Crear Directorio:

mkdir <nombre\_directorio>: Crea un nuevo directorio.

nano o vim - Editores de Texto en Terminal:

nano <archivo> o vim <archivo>: Abre un editor de texto en la terminal.

top - Monitor de Recursos:

top: Muestra información en tiempo real sobre el uso de recursos del sistema.

ps - Procesos en Ejecución:

ps aux: Lista todos los procesos en ejecución.


2\.3. Conexión SSH:

La conexión SSH (Secure Shell) es una herramienta esencial para administrar y configurar servidores Linux de forma remota de manera segura. Permite el acceso a la línea de comandos de un servidor desde otro dispositivo a través de una conexión cifrada. A continuación, se describen los pasos básicos para establecer una conexión SSH:

Conexión al Servidor:

ssh usuario@direccion\_ip: Conecta al servidor remoto a través de SSH.

Ejemplo: ssh user@192.168.1.1

Autenticación con Clave Pública (Opcional):

Para mayor seguridad, se puede configurar la autenticación mediante claves públicas y privadas.

Generar claves: ssh-keygen -t rsa

Copiar clave al servidor: ssh-copy-id usuario@direccion\_ip

Desconexión del Servidor:

exit o Ctrl + D: Cierra la conexión SSH actual.

Transferencia de Archivos con SCP:

scp <archivo\_local> usuario@direccion\_ip:<directorio\_destino>: Copia archivos de local a remoto.

Ejemplo: scp archivo.txt user@192.168.1.1:/home/user

Reenvío de Puertos (Túneles SSH):

ssh -L <puerto\_local>:<direccion\_ip\_destino>:<puerto\_destino> usuario@direccion\_ip: Establece un túnel SSH para redirigir puertos.

Uso de Alias y Configuraciones:

Se pueden configurar alias y ajustes en ~/.ssh/config para simplificar conexiones y establecer configuraciones personalizadas.

2\.4. Transferencia de Archivos SFTP:

La Transferencia de Archivos a través del Protocolo SFTP (Secure File Transfer Protocol) proporciona una forma segura de transferir archivos entre sistemas, similar a FTP, pero con una capa de seguridad adicional. A continuación, se describen los conceptos básicos de la transferencia de archivos SFTP:

Conexión SFTP:

sftp usuario@direccion\_ip: Inicia una sesión interactiva de SFTP en el servidor remoto.

Ejemplo: sftp user@192.168.1.1

Comandos Básicos SFTP:

put <archivo\_local>: Sube un archivo al servidor remoto.

get <archivo\_remoto>: Descarga un archivo desde el servidor remoto.

ls: Lista los archivos y directorios en el directorio remoto.

cd <directorio\_remoto>: Cambia al directorio remoto especificado.

pwd: Muestra el directorio de trabajo remoto actual.

exit o quit: Cierra la sesión SFTP.

Transferencia de Directorios Recursivamente:

put -r <directorio\_local>: Sube un directorio y su contenido al servidor remoto.

get -r <directorio\_remoto>: Descarga un directorio y su contenido desde el servidor remoto.

Uso de Autenticación por Clave:

Al igual que con SSH, SFTP admite la autenticación mediante claves públicas y privadas.

Transferencia de Archivos Binarios o Texto:

El modo de transferencia predeterminado es binario, pero se puede cambiar a texto con el comando ascii.

2\.5. Sistemas de Control de Versiones GIT:

Un Sistema de Control de Versiones (VCS) como GIT es esencial para el desarrollo de software colaborativo, permitiendo el seguimiento de cambios en el código fuente a lo largo del tiempo. A continuación, se detallan aspectos fundamentales sobre GIT:

Instalación de GIT:

En sistemas basados en Debian/Ubuntu: sudo apt-get install git o sudo snap install git

En sistemas basados en Red Hat/Fedora: sudo yum install git

En sistemas basados en Windows: Descargar e instalar desde[ ](https://git-scm.com/)<https://git-scm.com/>

Configuración Inicial:

Configurar nombre de usuario y correo electrónico:

git config –global user.name “Tu Nombre”

git config –global user.email “Tu@Email.com”

Creación de Repositorio GIT:

Iniciar un nuevo repositorio:

git init

Clonar un Repositorio Existente:

Clonar un repositorio remoto a nivel local:

git clone URL\_del\_repositorio

Comandos Básicos:

git add <archivo>: Añadir cambios al área de preparación.

git commit -m "Mensaje del commit": Confirmar cambios con un mensaje descriptivo.

git status: Verificar el estado actual del repositorio.

git log: Mostrar el historial de commits.

Ramas (Branches):

git branch: Listar ramas locales.

git branch <nombre\_rama>: Crear una nueva rama.

git checkout <nombre\_rama>: Cambiar a una rama específica.

git merge <nombre\_rama>: Fusionar cambios de una rama a otra.

Colaboración Remota:

git remote add origin URL\_del\_repositorio\_remoto: Vincular el repositorio local a uno remoto.

git push -u origin master: Empujar cambios locales al repositorio remoto.

git pull origin master: Obtener y fusionar cambios desde el repositorio remoto.

2\.6. Herramientas de Trabajo:

La eficiencia en el desarrollo de software con Odoo en entornos Linux se ve potenciada por diversas herramientas. A continuación, se describen algunas esenciales:

Entornos Virtuales (Virtual Environments):

Permiten aislar y gestionar dependencias de proyectos.

Crear un entorno virtual:python3 -m venv nom

python3 -m venv nombre\_entorno

Activar el entorno virtual:

En Linux: source nombre\_entorno/bin/activate

En Windows: .\nombre\_entorno\Scripts\activate

Editor de Texto o IDE:

Utilizar un editor eficiente como Visual Studio Code, PyCharm, o Atom.

Extensiones y complementos específicos para Python y Odoo pueden mejorar la productividad.

Depuración con PDB:

La biblioteca estándar pdb permite depurar código Python.

Insertar import pdb; pdb.set\_trace() en el código para detener la ejecución y depurar interactivamente.

Documentación con Sphinx:

Sphinx facilita la generación de documentación para proyectos Odoo.

Instalación: pip install sphinx

Crear documentación: sphinx-quickstart

Gestión de Dependencias con Pip:

Utilizar pip para instalar y gestionar bibliotecas de Python.

Instalación: pip install nombre\_paquete

Crear un archivo requirements.txt para listar dependencias.

Pruebas Unitarias con Pytest:

Pytest es una biblioteca popular para realizar pruebas unitarias en Python.

Instalación: pip install pytest

Ejecutar pruebas: pytest nombre\_archivo\_pruebas.py

Control de Versiones con GIT:

GIT se utiliza para el seguimiento de cambios y colaboración en proyectos.

Ver detalles en el apartado 2.5. Sistemas de Control de Versiones GIT.

Shell y Scripts Bash:

Conocer comandos básicos y escribir scripts bash para automatizar tareas.

Ejecutar scripts: ./nombre\_script.sh

Seguridad y Firewall:

Configurar iptables o ufw para gestionar reglas de firewall.

Garantizar que solo los puertos necesarios estén abiertos.

Monitorización con htop:

htop proporciona una interfaz gráfica para monitorear el rendimiento del sistema y los procesos en ejecución.

Instalación: sudo apt-get install htop


**Módulo 3. Python para Odoo**


3\.3. Tipos Básicos:

Python, como lenguaje de programación, incluye varios tipos de datos fundamentales que son esenciales para cualquier desarrollo, incluido el trabajo con Odoo. A continuación, se detallan algunos de los tipos básicos:

**3.3.1. Números, Cadenas, Booleanos**

Números:

\# Enteros (int): Representan números enteros.

entero = 42

\# Flotantes (float): Representan números decimales.

decimal = 4,2


\# Cadenas de Texto (str):

\# Secuencia de caracteres Unicode.

\# Definición con comillas simples o dobles.

texto = 'Hola, Odoo!'

\# Booleanos (bool):

\# Representan valores de verdad (True o False).

verdadero ==  True

falso == False


3\.4. Operadores:

Los operadores en Python son símbolos especiales que realizan operaciones en operandos. Aquí se describen algunos tipos de operadores comunes:

#Operadores Aritméticos:

#Permiten realizar operaciones matemáticas.

suma = 3 + 5

resta = 10 - 7

multiplicacion = 2 \* 4

division = 15 / 3

modulo = 10 % 3  # Devuelve el resto de la división

potencia = 2 \*\* 3  # 2 elevado a la 3 la 3

#Operadores de Comparación:

#Comparan dos valores y devuelven un resultado booleano (True o False).

igual = (5 == 5)

diferente = (3 != 7)

mayor\_que = (8 > 3)

menor\_que = (2 < 6)

mayor\_igual = (10 >= 10)

menor\_igual = (4 <= 9)

#Operadores Lógicos:

#Realizan operaciones lógicas entre expresiones booleanas.

and\_logico = True and False

or\_logico = True or False

not\_logico = not True

#Operadores de Pertenencia:

#Verifican si un valor está presente en una secuencia.

lista = [1, 2, 3]

pertenece = 2 in lista

no\_pertenece = 4 not in listasta

#Operadores de Identidad:

#Comprueban si dos objetos son el mismo objeto en memoria.

a = [1, 2, 3]

b = a

misma\_identidad = a is b

diferente\_identidad = a is not listaa


3\.5. Variables:

En Python, las variables son utilizadas para almacenar datos. Aquí se presentan conceptos básicos sobre variables:

Declaración de Variables:

\# En Python, no es necesario declarar el tipo de variable. El tipo se asigna automáticamente según el valor asignado.

numero = 10  # Integer (entero)

texto = "Hola, mundo!"  # String (cadena de caracteres)

decimal = 3.14  # Float (decimal)

booleano = True  # Boolean (booleano)

Convenciones de Nombres:

Se siguen convenciones para nombrar variables.

Los nombres son sensibles a mayúsculas y minúsculas.

mi\_variable = "Ejemplo"

otraVariable = 42


\# Reasignación de Variables:

\# Puedes cambiar el valor de una variable.

x = 5

x = x + 1  # Ahora, x es 6


\# Operaciones con Variables:

\# Se pueden realizar operaciones con variables.

a = 10

b = 20

suma = a + b


\# Impresión de Variables:

\# Para imprimir el valor de una variable.

nombre = "Juan"

print("Hola, " + nombre)

\# Ámbito de Variables:

\# El ámbito de una variable define su alcance, ya sea local o global.

variable\_global = 100

def ejemplo\_funcion():

`    `variable\_local = 50

`    `print(variable\_global)  # Puede acceder a la variable global

`    `print(variable\_local)

ejemplo\_funcion()

3\.6. Colecciones:

En Python, las colecciones son estructuras que permiten almacenar y organizar múltiples elementos. Las colecciones básicas incluyen:

Listas:

\# Una lista es una colección ordenada y modificable. Se define usando corchetes [].

mi\_lista = [1, 2, 3, "Hola", True]

Acceso a elementos:

primer\_elemento = mi\_lista[0]

Métodos comunes:

mi\_lista.append(4)     # Agrega un elemento al final

mi\_lista.remove("Hola")  # Elimina un elemento

mi\_lista.reverse()    # Invierte el orden de los elementos

mi\_lista.sort()       # Ordena los elementos

mi\_lista.pop(0)       # Elimina un elemento por índice

mi\_lista.clear()      # Elimina todos los elementos

Tuplas:

\# Una tupla es una colección ordenada e inmutable. Se define usando paréntesis ().

mi\_tupla = (1, 2, 3, "Hola", True)

Acceso a elementos:

primer\_elemento = mi\_tupla[0]

\# Al ser inmutable, no se pueden agregar ni eliminar elementos una vez creada.

\# Sin embargo, se pueden convertir a listas y viceversa.

Diccionarios:

\# Un diccionario es una colección no ordenada de pares clave-valor. Se define usando llaves {}.

mi\_diccionario = {"nombre": "Juan", "edad": 25, "ciudad": "Ejemplo"}

Acceso a elementos:

nombre = mi\_diccionario["nombre"]

Métodos comunes:

mi\_diccionario["ocupacion"] = "Desarrollador"  # Agrega un nuevo par clave-valor

del mi\_diccionario["edad"]  # Elimina un elemento por clavemento por clav

Conjuntos:

\# Un conjunto es una colección no ordenada y sin elementos duplicados. Se define usando llaves {}.

mi\_conjunto = {1, 2, 3, 4, 5}

Operaciones comunes:

mi\_conjunto.add(6)  # Agrega un elemento al conjunto

mi\_conjunto.remove(3)  # Elimina un elemento del conjunto



3\.7. Control de Flujo:

En Python, las estructuras de control de flujo permiten ejecutar instrucciones de manera condicional o repetitiva. Las principales estructuras son:


Condicionales (if, elif, else):

\# Permiten ejecutar bloques de código basados en condiciones.

if condicion:

`    `# Código si la condición es verdadera

elif otra\_condicion:

`    `# Código si la otra condición es verdadera

else:

`    `# Código si ninguna condición es verdadera




Bucles (for, while):

\# Permiten ejecutar bloques de código repetidamente.

\# Bucle for con una lista

for elemento in lista:

`    `# Código a ejecutar para cada elemento

\# Bucle while con una condición

while condicion:

`    `# Código a ejecutar mientras la condición sea verdadera




Control de Flujo Especial:

break: #Sale de un bucle antes de que se complete.

continue: #Salta a la siguiente iteración de un bucle.

pass: #No hace nada y se utiliza como marcador de posición.

for i in range(5):

`    `if i == 3:

`        `break  # Sale del bucle cuando i es igual a 3

`    `elif i == 1:

`        `continue  # Salta a la siguiente iteración cuando i es igual a 1

`    `else:

`        `pass  # No hace nada




Manejo de Excepciones (try, except):

\# Permite manejar errores de manera controlada.

try:

`    `# Código que puede generar un error

except TipoDeError as e:

`    `# Código a ejecutar si se produce el error


3\.8. Herramientas Integradas:

Python ofrece varias herramientas integradas que simplifican y mejoran el desarrollo de código. Algunas de ellas son:

Listas de Comprensión:

\# Permiten crear listas de manera concisa.

\# Forma convencional de crear una lista

cuadrados = []

for num in range(5):

`    `cuadrados.append(num\*\*2)

\# Usando lista de comprensión

cuadrados = [num\*\*2 for num in range(5)]




Funciones Lambda:

\# Son funciones anónimas de una sola línea.

\# Función convencional

def cuadrado(x):

`    `return x\*\*2

\# Función lambda equivalente

cuadrado\_lambda = lambda x: x\*\*2




Map, Filter y Reduce:

\# Funciones de orden superior que operan sobre listas.

\# Map: aplica una función a cada elemento de la lista

cuadrados = list(map(lambda x: x\*\*2, [1, 2, 3]))

\# Filter: filtra elementos de la lista según una condición

pares = list(filter(lambda x: x % 2 == 0, [1, 2, 3, 4]))

\# Reduce: aplica una función acumulativa a la lista

suma = reduce(lambda x, y: x + y, [1, 2, 3, 4])




Comprensiones de Conjuntos y Diccionarios:

\# Similar a las listas de comprensión, pero para conjuntos y diccionarios.

\# Conjunto de cuadrados

cuadrados\_set = {num\*\*2 for num in range(5)}

\# Diccionario de cuadrados

cuadrados\_dict = {num: num\*\*2 for num in range(5)}


3\.8.1. Listas de Comprensión:

En Python, las listas de comprensión son una forma concisa y expresiva de crear listas. Permiten generar listas de manera más compacta en comparación con los enfoques tradicionales. La sintaxis general de una lista de comprensión es la siguiente:

nueva\_lista = [expresion  for  elemento in iterable if condicion ]

Donde:

- expresion: es la expresión que define los elementos de la nueva lista.
- elemento: toma cada elemento del iterable especificado.
- iterable: es una secuencia o colección sobre la cual se itera.
- condicion (opcional): define una condición para incluir el elemento en la nueva lista.

Ejemplo de lista de comprensión para generar una lista de cuadrados de los números del 0 al 4:

cuadrados = [num\*\*2 for num in range(5)]

\# Resultado: [0, 1, 4, 9, 16]

Este enfoque es más conciso que el uso de bucles tradicionales y hace que el código sea más legible, especialmente en situaciones donde se busca aplicar una operación simple a cada elemento de una secuencia.

3\.8.2. Funciones Lambda:

Las funciones lambda, también conocidas como funciones anónimas, son pequeñas funciones definidas sin un nombre. Son útiles cuando necesitas una función por un corto período y no es necesario darle un nombre formal. La sintaxis general de una función lambda es:

lambda argumentos: expresion

- lambda: palabra clave que indica que estás creando una función lambda.
- argumentos: lista de parámetros que la función puede tomar.
- expresion: expresión que define la operación que la función realizará.

Ejemplo de función lambda que suma dos números:

suma = lambda x, y: x + y

\# Uso de la función lambda

resultado = suma(3, 5)

\# Resultado: 8

Las funciones lambda son útiles en situaciones donde necesitas una función rápida para realizar una tarea específica, como en la aplicación de funciones a listas o en la definición de funciones de orden superior.

3\.9. Programación Orientada a Objetos:

La programación orientada a objetos (POO) es un paradigma de programación que utiliza objetos, que son instancias de clases, para diseñar y estructurar el código. En Python, todo es un objeto, lo que significa que cada entidad del lenguaje, como números, cadenas y funciones, son objetos con sus propias propiedades y métodos.

Conceptos clave:

Clases y Objetos:

Clase: Es un "molde" para crear objetos. Define atributos y comportamientos comunes a todos los objetos que se crean a partir de ella.

Objeto: Es una instancia de una clase. Representa una entidad con características específicas.

\# Ejemplo de clase y objeto

class Perro:

`    `def \_\_init\_\_(self, nombre, edad):

`        `self.nombre = nombre

`        `self.edad = edad

\# Creación de un objeto

mi\_perro = Perro(nombre="Fido", edad=3)

Herencia:

\# Permite que una clase herede atributos y métodos de otra. La clase que hereda se llama subclase, y la clase de la que se hereda se llama superclase.

\# Ejemplo de herencia

class Animal:

`    `def comer(self):

`    `print("Comiendo...")

class Perro(Animal):

def ladrar(self):

`    `print("¡Guau!")

\# Creación de un objeto de la subclase

mi\_perro = Perro()

mi\_perro.comer() # Método heredado

mi\_perro.ladrar() # Método propio de la subclase

Métodos:

\# Funciones asociadas a objetos. Pueden ser métodos de instancia (operan en una instancia específica) o métodos de clase (operan en la clase).

\# Ejemplo de método de instancia

class Circulo:

`    `def \_\_init\_\_(self, radio):

`        `self.radio = radio

`    `def calcular\_area(self):

`        `return 3.14 \* self.radio \*\* 2

\# Creación de un objeto y llamada a un método

mi\_circulo = Circulo(radio=5)

area = mi\_circulo.calcular\_area()

Estos conceptos proporcionan una base sólida para entender la programación orientada a objetos en Python y son fundamentales al trabajar con Odoo, que utiliza este enfoque para modelar sus entidades y lógica de negocio.

3\.9.1. Clases y Objetos:

En Python, las clases son la piedra angular de la programación orientada a objetos (POO). Las clases proporcionan una forma de encapsular datos y comportamientos relacionados en un solo lugar. Aquí hay una descripción detallada de cómo trabajar con clases y objetos:

Definición de una Clase:

\# Para definir una clase en Python, utilizamos la palabra clave class. Aquí hay un ejemplo simple:

class Persona:

` `def \_\_init\_\_(self, nombre, edad):

` `self.nombre = nombre

` `self.edad = edad


La función \_\_init\_\_ es un método especial llamado constructor, que se ejecuta automáticamente cuando se crea un nuevo objeto de la clase. self hace referencia a la instancia actual de la clase.

Creación de Objetos:

\# Una vez que hemos definido una clase, podemos crear objetos de esa clase. Cada objeto es una instancia única de la clase.

\# Crear objetos de la clase Persona

persona1 = Persona(nombre="Juan", edad=30)

persona2 = Persona(nombre="María", edad=25)


Atributos y Métodos:

Atributos: Son variables que almacenan datos relacionados con la clase. En el ejemplo anterior, nombre y edad son atributos de la clase Persona.

Métodos: Son funciones que están asociadas a la clase. Pueden realizar operaciones en los datos de la clase. El método \_\_init\_\_ es un ejemplo de un método.

Acceso a Atributos y Métodos:
Para acceder a los atributos y métodos de un objeto, utilizamos la notación de punto (.).

\# Acceder a atributos

print(persona1.nombre) # Salida: Juan

print(persona2.edad) # Salida: 25

\# Llamar a métodos

persona1.cumplir\_anios() # Suponiendo que haya un método 'cumplir\_anios' en la clase




En este ejemplo, se asume que hay un método cumplir\_anios en la clase Persona.

Herencia:
La herencia permite que una clase herede atributos y métodos de otra clase. Esto facilita la reutilización de código y la creación de una jerarquía de clases.

class Estudiante(Persona):

` `def \_\_init\_\_(self, nombre, edad, curso):

` `super().\_\_init\_\_(nombre, edad) # Llama al constructor de la clase padre

` `self.curso = curso


En este caso, la clase Estudiante hereda de la clase Persona.

El encapsulamiento es un principio de POO que consiste en ocultar los detalles internos de una clase y exponer solo lo que es necesario. En Python, los atributos y métodos pueden tener niveles de visibilidad como público, protegido o privado.

class MiClase:

` `def \_\_init\_\_(self):

` `self.atributo\_publico = 42

` `self.\_atributo\_protegido = "Hola"

` `self.\_\_atributo\_privado = [1, 2, 3]


En este ejemplo, atributo\_publico es público, \_atributo\_protegido es protegido y \_\_atributo\_privado es privado.

El entendimiento de estos conceptos es esencial para trabajar efectivamente con Odoo, ya que Odoo utiliza extensivamente la programación orientada a objetos para modelar y gestionar los datos y la lógica de negocio.

**3.9.2. Herencia:**

La herencia es un concepto clave en programación orientada a objetos que permite que una clase adquiera los atributos y métodos de otra clase, facilitando la reutilización de código y la creación de una jerarquía de clases. Aquí se detallan los aspectos esenciales de la herencia en Python:

Definición de Clases Padres:

\# En el contexto de herencia, la clase de la que se heredan las características se denomina "clase padre" o "superclase". Aquí hay un ejemplo simple:

class Animal:

` `def \_\_init\_\_(self, nombre):

` `self.nombre = nombre

` `def hacer\_sonido(self):

` `pass # Este método será implementado por las clases hijas


Creación de Clases Hijas:

\# Las clases que heredan de otra clase se denominan "clases hijas" o "subclases". Pueden heredar atributos y métodos de la clase padre y también pueden tener sus propios atributos y métodos.

class Perro(Animal):

` `def hacer\_sonido(self):

` `return "Guau"


En este ejemplo, la clase Perro hereda de la clase Animal.

Uso de la Función super:

\# La función super() se utiliza para llamar a un método de la clase padre desde la clase hija. Esto es útil cuando queremos extender el comportamiento de un método en la clase hija.

class Gato(Animal):

` `def hacer\_sonido(self):

` `sonido\_animal = super().hacer\_sonido()

` `return f"{sonido\_animal} y Maullar"

Aquí, super().hacer\_sonido() llama al método hacer\_sonido de la clase Animal.

Sobreescritura de Métodos:

\# Una clase hija puede proporcionar su propia implementación de un método que hereda de la clase padre. Este proceso se conoce como "sobreescritura de métodos".

class Pajaro(Animal):

` `def hacer\_sonido(self):

` `return "Pío"

En este caso, la clase Pajaro sobreescrive el método hacer\_sonido heredado de Animal.

Herencia Múltiple:

\# Python permite la herencia múltiple, lo que significa que una clase puede heredar de más de una clase. Sin embargo, debe usarse con precaución, ya que puede llevar a complejidades en el código.

class Mascota(Perro, Gato):

` `pass

\# En este ejemplo, la clase Mascota hereda de las clases Perro y Gato

3\.9.3. Métodos:

En programación orientada a objetos, los métodos son funciones asociadas a un objeto específico. Aquí se detallan los aspectos esenciales de los métodos en Python:

Definición de Métodos:

Los métodos son funciones definidas dentro de una clase y se utilizan para realizar operaciones específicas relacionadas con los objetos de esa clase. Aquí hay un ejemplo simple:


class Vehiculo:

` `def acelerar(self):

` `print("Acelerando...")


En este ejemplo, acelerar es un método de la clase Vehiculo.

Invocación de Métodos:
Los métodos se llaman sobre objetos específicos de una clase. Aquí hay cómo se invocaría el método acelerar:

mi\_coche = Vehiculo()

mi\_coche.acelerar()

En este caso, se crea una instancia de la clase Vehiculo llamada mi\_coche, y luego se invoca el método acelerar en esa instancia.

Métodos con Parámetros:
Los métodos pueden aceptar parámetros, que son valores que se pasan al método para que los utilice en su lógica interna.

class Calculadora:

` `def sumar(self, a, b):

` `return a + b

En este ejemplo, el método sumar acepta dos parámetros, a y b, y devuelve su suma.

Métodos de Clase y Métodos Estáticos:

Métodos de Clase: Son métodos que trabajan con la clase y no con instancias particulares. Se definen utilizando el decorador @classmethod.

class MiClase:

` `@classmethod

` `def metodo\_de\_clase(cls):

` `print(f"Método de clase llamado en {cls}")

Métodos Estáticos: Son métodos que no acceden ni modifican el estado de la clase ni del objeto. Se definen utilizando el decorador @staticmethod.

class Utilidades:

` `@staticmethod

` `def saludar():

` `print("¡Hola!")

Métodos Mágicos (Dunder Methods):
Son métodos especiales en Python que tienen doble guion bajo al principio y al final de su nombre (por ejemplo, \_\_init\_\_). Estos métodos son llamados automáticamente en ciertos eventos.

class Persona:

` `def \_\_init\_\_(self, nombre):

` `self.nombre = nombre

` `def \_\_str\_\_(self):

` `return f"Persona: {self.nombre}"

En este ejemplo, \_\_init\_\_ se llama automáticamente al crear una nueva instancia, y \_\_str\_\_ se llama cuando se intenta convertir el objeto a una cadena.

Los métodos son esenciales en la programación orientada a objetos, ya que encapsulan el comportamiento y las operaciones asociadas a los objetos de una clase. En el desarrollo de módulos en Odoo, se utilizan métodos extensivamente para implementar la lógica de negocio.

3\.10. Entrada y Salida de Ficheros:

En programación, la manipulación de archivos es una tarea común. Aquí se exploran las operaciones básicas de entrada y salida de archivos en Python:

Abrir un Archivo:
Para abrir un archivo en Python, se utiliza la función open(). Es importante cerrar el archivo después de usarlo para liberar recursos.

\# Abre un archivo para lectura

with open('archivo.txt', 'r') as archivo\_lectura:

` `contenido = archivo\_lectura.read()

` `print(contenido)

En este ejemplo, se abre el archivo archivo.txt en modo de lectura ('r') y se lee su contenido.

Modos de Apertura de Archivos:

'r': Lectura (por defecto).

'w': Escritura (crea un archivo nuevo o sobrescribe uno existente).

'a': Anexar (añade contenido al final del archivo).

'b': Modo binario.

'x': Crea un archivo nuevo y falla si ya existe.

Lectura y Escritura de Archivos de Texto:

with open('archivo.txt', 'r') as archivo\_lectura:

` `contenido = archivo\_lectura.read()

` `print(contenido)

with open('nuevo\_archivo.txt', 'w') as archivo\_escritura:

` `archivo\_escritura.write('Hola, mundo!')

En este ejemplo, se lee el contenido de archivo.txt y se escribe una nueva línea en nuevo\_archivo.txt.

Lectura y Escritura de Archivos Binarios:

with open('imagen.jpg', 'rb') as imagen\_lectura:

` `datos\_imagen = imagen\_lectura.read()

with open('copia\_imagen.jpg', 'wb') as imagen\_escritura:

` `imagen\_escritura.write(datos\_imagen)

Aquí, se leen y escriben datos binarios, útil para archivos como imágenes.

Manejo de Archivos con el Context Manager (with):
El uso del gestor de contexto with garantiza que el archivo se cierre correctamente después de su uso, incluso si ocurre una excepción.

with open('archivo.txt', 'r') as archivo:

` `contenido = archivo.read()

` `# Realizar operaciones con el contenido

Operaciones con Líneas:

with open('archivo.txt', 'r') as archivo:

` `lineas = archivo.readlines() # Obtiene todas las líneas como una lista

` `for linea in lineas:

` `print(linea.strip()) # Elimina los espacios en blanco alrededor de cada línea

Aquí, se leen todas las líneas del archivo y se imprime cada línea sin espacios adicionales.

La manipulación de archivos es crucial en Odoo para tareas como la lectura y escritura de datos desde y hacia archivos CSV, XML o cualquier otro formato utilizado en el intercambio de datos y la integración con otros sistemas.

3\.11. Módulos y Paquetes:

En Python, los módulos y paquetes son herramientas fundamentales para organizar y estructurar código. Aquí se exploran estos conceptos:

Módulos:

Un módulo en Python es simplemente un archivo de Python que contiene funciones, variables y clases.

Facilita la organización y reutilización del código.

Se importa utilizando la palabra clave import.

\# Ejemplo de módulo (archivo mi\_modulo.py)

def saludar(nombre):

` `return f'Hola, {nombre}!'

\# Importar y usar el módulo

import mi\_modulo

mensaje = mi\_modulo.saludar('Usuario')

print(mensaje)

Paquetes:

Un paquete es una colección de módulos organizados en un directorio.

Incluye un archivo especial llamado \_\_init\_\_.py que indica que el directorio debe tratarse como un paquete.

Facilita la gestión de proyectos más grandes.

mi\_paquete/

├── \_\_init\_\_.py

├── modulo1.py

├── modulo2.py

└── subpaquete/

` `├── \_\_init\_\_.py

` `└── modulo3.py

\# Importar y usar módulos desde un paquete

from mi\_paquete import modulo1

from mi\_paquete.subpaquete import modulo3

mensaje1 = modulo1.saludar('Usuario1')

mensaje3 = modulo3.otro\_saludo('Usuario2')

print(mensaje1)

print(mensaje3)

Importaciones Específicas:

Puedes importar funciones o clases específicas en lugar de importar todo el módulo.

\# Importar solo la función saludar desde mi\_modulo

from mi\_modulo import saludar

mensaje = saludar('Usuario')

print(mensaje)

Alias en Importaciones:

Puedes asignar alias a módulos o funciones para facilitar su uso.

\# Importar con alias

import mi\_modulo as mm

mensaje = mm.saludar('Usuario')

print(mensaje)

Importación de Todo (\*):

Importar todas las funciones y variables de un módulo.

\# Importar todo desde un módulo (evitar en general, puede causar conflictos de nombres)

from mi\_modulo import \*

mensaje = saludar('Usuario')

print(mensaje)

Los módulos y paquetes son esenciales en el desarrollo de software modular y organizado. En el contexto de Odoo, el código se organiza en módulos y se implementa como aplicaciones, lo que facilita la gestión y expansión del sistema ERP.


**Módulo 4.Odoo 15 - Funcional y Manejo**

4\.3. Configuraciones Generales:

En Odoo, las configuraciones generales son fundamentales para personalizar el sistema según las necesidades específicas de la empresa. A continuación, se detallan los aspectos clave de la configuración general en Odoo:

Acceso a la Configuración:

Ingresar al modo desarrollador (Settings -> Activate the Developer Mode).

Acceder a las opciones de configuración desde el menú Settings (Configuración).

Datos de la Empresa:

Establecer la información básica de la empresa como el nombre, dirección y detalles de contacto.

Configuración de Usuarios:

Administrar usuarios y asignar roles y permisos.

Crear nuevas cuentas de usuario y establecer contraseñas.

Configuración Regional:

Establecer la zona horaria y el formato de fecha y hora adecuados.

Idioma:

Seleccionar el idioma principal del sistema, lo que afectará a la interfaz de usuario y a la presentación de datos.

Moneda:

Configurar la moneda principal utilizada en la empresa y establecer tasas de cambio si es necesario.

Contabilidad:

Configurar detalles contables como cuentas contables, impuestos y reglas de facturación.

Inventario:

Configurar las unidades de medida, ubicaciones de inventario y otras opciones relacionadas con la gestión de inventario.

Ventas y Compras:

Configurar opciones específicas de ventas y compras, como plazos de pago, condiciones de entrega y métodos de envío.

Notificaciones por Correo Electrónico:

Configurar la información del servidor de correo saliente para permitir notificaciones por correo electrónico.

Automatizaciones y Procesos Programados:

Configurar tareas automatizadas, como envíos automáticos de correo electrónico o procesos programados.

Otros Ajustes Específicos del Negocio:

Realizar ajustes adicionales según las necesidades específicas de la empresa, como campos personalizados o flujos de trabajo.

Guardar Configuraciones:

Guardar todos los cambios realizados para aplicar las configuraciones.

Configurar adecuadamente estos elementos es esencial para adaptar Odoo a las particularidades y requisitos específicos de cada empresa, garantizando así un uso eficiente y personalizado del sistema ERP.

4\.4. Copias de Seguridad:

La realización de copias de seguridad es una práctica crucial para garantizar la integridad y la seguridad de los datos en Odoo. Aquí se presentan las pautas y pasos clave para la gestión efectiva de copias de seguridad en Odoo:

Acceso a las Configuraciones de Copia de Seguridad:

Ingresar al modo desarrollador (Settings -> Activate the Developer Mode).

Acceder a las configuraciones de copia de seguridad desde el menú Settings (Configuración) -> General Settings (Configuración General).

Configuración de Copias de Seguridad Automáticas:

Establecer la frecuencia y la programación de las copias de seguridad automáticas.

Configurar la retención de copias de seguridad antiguas para evitar el consumo excesivo de espacio en disco.

Ubicación de Almacenamiento:

Especificar la ubicación en la que se almacenarán las copias de seguridad.

Puede ser una carpeta local en el servidor o un almacenamiento externo, como un servicio de almacenamiento en la nube.

Tipos de Datos a Incluir en la Copia de Seguridad:

Seleccionar los tipos de datos que se incluirán en la copia de seguridad, como bases de datos, archivos adjuntos, configuraciones, etc.

Copia de Seguridad Manual:

Realizar copias de seguridad manuales cuando sea necesario, especialmente antes de realizar cambios importantes en el sistema.

Restauración de Copias de Seguridad:

Familiarizarse con el proceso de restauración de copias de seguridad en caso de pérdida de datos o problemas técnicos.

Pruebas Periódicas de Restauración:

Realizar pruebas periódicas de restauración para asegurarse de que las copias de seguridad sean válidas y se puedan recuperar correctamente.

Notificaciones Automáticas:

Configurar notificaciones automáticas para informar sobre el estado de las copias de seguridad, especialmente si alguna operación falla.

Almacenamiento Externo:

Considerar la posibilidad de utilizar servicios de almacenamiento en la nube para almacenar copias de seguridad, proporcionando redundancia y accesibilidad remota.

Protección de Contraseñas:

Asegurarse de que las copias de seguridad estén protegidas por contraseñas seguras para evitar accesos no autorizados.

Realizar y gestionar copias de seguridad de manera regular y eficiente es esencial para la continuidad del negocio y la prevención de pérdida de datos críticos.

4\.5. Gestión de Usuarios:

La gestión efectiva de usuarios en Odoo es esencial para garantizar la seguridad, la colaboración y la asignación adecuada de roles y permisos. Aquí se detallan aspectos clave de la gestión de usuarios en Odoo:

Creación de Usuarios:

Acceder al módulo de configuración de usuarios desde el menú principal.

Crear nuevos usuarios proporcionando información básica como nombre, dirección de correo electrónico y contraseña.

Asignación de Roles y Grupos:

Asignar roles y grupos a cada usuario según sus responsabilidades y funciones en la organización.

Los roles y grupos determinan los permisos de acceso a diferentes módulos y funciones de Odoo.

Definición de Permisos:

Revisar y ajustar los permisos para cada usuario y grupo.

Los permisos controlan el acceso a funciones específicas, registros y acciones dentro de Odoo.

Gestión de Contraseñas:

Establecer políticas de contraseñas sólidas para garantizar la seguridad de las cuentas de usuario.

Fomentar el cambio periódico de contraseñas y la utilización de contraseñas seguras.

Control de Acceso:

Configurar reglas de control de acceso para restringir el acceso a ciertos registros o datos sensibles.

Garantizar que cada usuario tenga acceso solo a la información necesaria para sus responsabilidades.

Auditoría de Acceso:

Utilizar las herramientas de auditoría de Odoo para realizar un seguimiento de las acciones realizadas por los usuarios.

La auditoría proporciona un registro detallado de cambios y actividades en el sistema.

Desactivación de Usuarios:

Desactivar cuentas de usuario cuando un empleado deja la organización o ya no necesita acceso.

La desactivación evita el acceso no autorizado y garantiza la integridad de los datos.

Notificaciones y Mensajes Internos:

Configurar notificaciones y mensajes internos para facilitar la comunicación entre usuarios dentro de Odoo.

Estos canales ayudan en la colaboración y el intercambio de información.

Personalización de Vistas por Usuario:

Aprovechar la capacidad de personalizar vistas y paneles según las preferencias individuales de cada usuario.

Formación Continua:

Proporcionar formación continua a los usuarios para familiarizarlos con nuevas funciones y actualizaciones de Odoo.

La gestión de usuarios en Odoo es un componente fundamental para optimizar el rendimiento y garantizar un entorno de trabajo eficiente y seguro.

4\.6. Grupos y Seguridad:

Los grupos y la gestión de seguridad en Odoo desempeñan un papel crucial en la configuración de permisos y accesos. Aquí se detallan los aspectos clave de la gestión de grupos y seguridad en Odoo:

Definición de Grupos:

Crear grupos que representen diferentes conjuntos de funciones o responsabilidades en la organización.

Ejemplos de grupos pueden incluir "Usuario Básico", "Gerente de Ventas" o "Administrador del Sistema".

Asignación de Roles a Grupos:

Asignar roles específicos a cada grupo para definir las capacidades y acciones permitidas.

Los roles determinan el acceso a módulos y funciones dentro de Odoo.

Configuración de Permisos:

Ajustar los permisos para cada grupo según las necesidades.

Los permisos controlan qué acciones y registros pueden ver o modificar los miembros de un grupo.

Herencia de Grupos:

Utilizar la herencia de grupos para establecer una jerarquía de permisos.

Los usuarios que pertenecen a un grupo superior también heredan los permisos de los grupos inferiores.

Gestión de Accesos:

Configurar reglas de acceso para restringir el acceso a ciertos registros o datos específicos.

Establecer condiciones para garantizar un acceso controlado y seguro.

Control de Creación, Edición y Eliminación:

Determinar quién tiene permisos para crear, editar o eliminar registros en diferentes módulos.

Los roles y grupos permiten un control granular sobre las acciones permitidas.

Seguridad a Nivel de Campo:

Implementar seguridad a nivel de campo para restringir el acceso a ciertos campos dentro de un registro.

Esto es útil para proteger información sensible.

Gestión de Grupos por Proyecto:

Organizar grupos según proyectos o departamentos para facilitar la administración y el mantenimiento.

Asegurar que los usuarios tengan los permisos necesarios para sus tareas específicas.

Auditoría de Grupos y Accesos:

Utilizar las herramientas de auditoría de Odoo para revisar y monitorear los cambios en la configuración de grupos y permisos.

La auditoría proporciona un seguimiento detallado de las modificaciones.

La correcta configuración de grupos y seguridad en Odoo es esencial para garantizar que los usuarios tengan acceso solo a la información y funciones necesarias para realizar sus tareas.

4\.8. Gestión de Productos:

La gestión de productos en Odoo es un componente fundamental, especialmente para empresas que manejan inventarios y venden productos. Aquí se describen los aspectos clave de la gestión de productos en Odoo:

Catálogo de Productos:

Crear y mantener un catálogo completo de productos.

Incluir detalles como nombre, descripción, categoría, referencia interna, y más.

Variantes de Producto:

Gestionar productos con variantes, como diferentes tamaños, colores o configuraciones.

Configurar las variantes para un seguimiento preciso del inventario.

Unidades de Medida y Pesos:

Definir unidades de medida para productos.

Establecer pesos para cálculos de envío y gestión de inventario.

Precio de Venta y Costo:

Establecer precios de venta para productos.

Registrar costos asociados, permitiendo un análisis de márgenes de beneficio.

Gestión de Inventario:

Registrar las cantidades disponibles en stock para cada producto.

Realizar ajustes de inventario según sea necesario.

Seguimiento de Movimientos de Stock:

Registrar y rastrear los movimientos de stock, como recepciones de productos, transferencias internas y entregas a clientes.

Obtener una visión detallada del historial de movimientos.

Imágenes y Archivos Adjuntos:

Adjuntar imágenes y documentos relevantes a cada producto.

Facilitar la identificación y presentación del producto.

Productos Relacionados:

Establecer relaciones entre productos relacionados.

Facilitar la venta cruzada y proporcionar recomendaciones a los clientes.

Configuradores de Productos:

Utilizar configuradores para productos personalizados o configurables por el cliente.

Ofrecer opciones y variantes específicas según las preferencias del cliente.

Gestión de Proveedores:

Asociar proveedores a productos para facilitar la gestión de aprovisionamiento.

Registrar información como precios de compra y plazos de entrega.

Estrategias de Reabastecimiento:

Establecer reglas de reabastecimiento automático para mantener niveles de inventario óptimos.

Optimizar la gestión de stock y evitar falta de existencias.

La gestión eficiente de productos en Odoo contribuye a una operación fluida y precisa, desde la entrada de productos en stock hasta la entrega a clientes.

4\.9. Gestión de Clientes y Proveedores:

La gestión de clientes y proveedores es esencial en Odoo para establecer y mantener relaciones comerciales efectivas. Este módulo aborda los aspectos clave de la gestión de clientes y proveedores:

Registro de Clientes:

Crear perfiles detallados de clientes con información como nombre, dirección, contacto y detalles fiscales.

Facilitar la identificación y comunicación con clientes.

Registro de Proveedores:

Registrar información completa sobre proveedores, incluyendo datos de contacto, dirección y detalles fiscales.

Establecer una base de datos centralizada de proveedores.

Historial de Transacciones:

Mantener un historial detallado de transacciones con clientes y proveedores.

Registrar ventas, compras, pagos y cobros para un seguimiento completo.

Límites de Crédito:

Establecer límites de crédito para clientes y realizar un seguimiento de las transacciones dentro de esos límites.

Evitar riesgos financieros al gestionar límites de crédito.

Categorización:

Categorizar clientes y proveedores para una segmentación eficiente.

Facilitar la aplicación de estrategias específicas basadas en categorías.

Seguimiento de Pagos y Cobros:

Registrar y realizar un seguimiento de los pagos recibidos de clientes.

Gestionar cobros y plazos de pago con clientes y proveedores.

Documentación Adjunta:

Adjuntar documentos relevantes a perfiles de clientes y proveedores.

Almacenar contratos, facturas y otros documentos relacionados.

Comunicación Integrada:

Facilitar la comunicación a través de herramientas integradas como correos electrónicos y mensajes internos de Odoo.

Mejorar la eficiencia en la gestión de relaciones comerciales.

Estadísticas y Reportes:

Obtener informes estadísticos sobre transacciones, saldos pendientes y comportamiento de compra.

Facilitar la toma de decisiones basada en datos.

Integración con Otros Módulos:

Conectar la gestión de clientes y proveedores con módulos relacionados, como ventas, compras e inventario.

Garantizar una integración fluida y una visión completa del ciclo comercial.

La gestión efectiva de clientes y proveedores en Odoo contribuye a una relación comercial sólida y eficiente, optimizando procesos y mejorando la satisfacción del cliente.

4\.10. Oportunidades y Ventas:

La gestión de oportunidades y ventas en Odoo es crucial para impulsar el crecimiento y la rentabilidad de un negocio. Este módulo se enfoca en los aspectos clave de la gestión de oportunidades y el proceso de ventas:

Registro de Oportunidades:

Capturar y registrar oportunidades de ventas potenciales en el sistema.

Seguimiento de oportunidades desde la identificación hasta el cierre.

Gestión de Clientes Potenciales:

Clasificar y gestionar clientes potenciales para identificar oportunidades de conversión.

Establecer estrategias específicas para la conversión de clientes potenciales en clientes reales.

Ciclo de Ventas:

Definir y seguir un proceso estructurado para las actividades de ventas.

Etapas claves como prospección, presentación, negociación y cierre.

Cotizaciones y Propuestas:

Generar cotizaciones y propuestas para clientes basadas en sus necesidades.

Facilitar la presentación de ofertas claras y detalladas.

Registro de Pedidos:

Registrar y gestionar pedidos de clientes de manera eficiente.

Facilitar el seguimiento del estado de los pedidos.

Integración con Inventario:

Conectar el módulo de ventas con el inventario para una gestión coordinada.

Mantener actualizados los niveles de stock y facilitar la planificación de entregas.

Seguimiento Postventa:

Realizar un seguimiento postventa para evaluar la satisfacción del cliente.

Gestionar cualquier problema o consulta postventa de manera efectiva.

Estadísticas y Reportes:

Generar informes y análisis sobre el desempeño de las oportunidades y las ventas.

Evaluar métricas clave como conversiones, ingresos y tendencias de ventas.

Automatización de Ventas:

Implementar la automatización en el seguimiento de oportunidades y acciones de ventas.

Mejorar la eficiencia mediante la programación de actividades y recordatorios.

Integración con Marketing:

Conectar con estrategias de marketing para la generación efectiva de oportunidades.

Maximizar la eficacia de las campañas de marketing y su impacto en las ventas.

La gestión efectiva de oportunidades y ventas en Odoo contribuye al crecimiento sostenible del negocio y a la satisfacción del cliente, optimizando cada etapa del proceso de ventas.

4\.11. Gestión de Compras y Stock:

La gestión de compras y stock es esencial para asegurar la disponibilidad de productos, controlar los niveles de inventario y garantizar la satisfacción del cliente. Este módulo aborda los aspectos cruciales de la gestión de compras y el control de stock en Odoo:

Proceso de Compras:

Configuración de proveedores y condiciones de compra.

Registro de solicitudes de cotización y evaluación de ofertas.

Órdenes de Compra:

Generación de órdenes de compra para adquirir productos de proveedores.

Seguimiento del estado de las órdenes de compra y su cumplimiento.

Recepción y Validación:

Recepción de productos comprados y validación de la conformidad.

Registro de posibles discrepancias y gestión de devoluciones.

Gestión de Proveedores:

Mantenimiento de registros actualizados de proveedores.

Evaluación del rendimiento de los proveedores y toma de decisiones basada en datos.

Control de Stock:

Registro y seguimiento de los niveles de inventario.

Configuración de alertas para niveles bajos de stock y reabastecimiento.

Ubicación y Almacenes:

Organización eficiente de productos en ubicaciones y almacenes.

Facilitar la gestión de múltiples ubicaciones y transferencias internas.

Rastreo de Productos:

Implementación de sistemas de rastreo para productos.

Seguimiento de lotes, números de serie o cualquier otra característica específica.

Valoración de Inventarios:

Métodos de valoración de inventario (FIFO, LIFO, promedio ponderado).

Generación de informes financieros relacionados con el inventario.

Gestión de Costos:

Asignación y seguimiento de costos asociados a la compra y almacenamiento.

Análisis de costos para la toma de decisiones informada.

Integración Contable:

Conexión con módulos contables para una contabilidad precisa.

Generación de asientos contables relacionados con las operaciones de compras y stock.

La gestión efectiva de compras y stock en Odoo garantiza una cadena de suministro eficiente, control de costos y niveles de inventario optimizados para satisfacer las demandas del mercado y las expectativas del cliente.

4\.12. Facturando Cobros y Pagos:

Este módulo se centra en la gestión de facturación, cobros y pagos en Odoo, aspectos fundamentales para el control financiero y la transparencia en las transacciones comerciales. Aquí se abordan las principales funcionalidades relacionadas con la facturación de ventas, el registro de pagos y cobros, así como la generación de informes financieros:

Facturación de Ventas:

Configuración de condiciones de pago y plazos para clientes.

Generación de facturas de ventas de forma manual o automática desde órdenes de venta.

Registro de Cobros:

Seguimiento de los pagos recibidos de los clientes.

Integración con métodos de pago variados (transferencias, tarjetas, etc.).

Gestión de Pagos:

Registro y seguimiento de los pagos realizados a proveedores.

Integración con cuentas bancarias y métodos de pago.

Conciliación Bancaria:

Comparación y conciliación de transacciones financieras con registros internos.

Identificación y corrección de discrepancias entre registros y extractos bancarios.

Generación de Informes Financieros:

Estado de resultados, balance general, flujo de efectivo, entre otros.

Informes detallados de ingresos, gastos, cuentas por cobrar y cuentas por pagar.

Gestión de Impuestos:

Configuración de tasas impositivas y reglas fiscales.

Automatización del cálculo de impuestos en facturas y pagos.

Cuentas por Cobrar y Pagar:

Seguimiento de saldos pendientes con clientes y proveedores.

Gestión de vencimientos y recordatorios automáticos.

Reconciliación Automática:

Proceso automático de conciliación entre transacciones internas y extractos bancarios.

Ahorro de tiempo y reducción de errores en la gestión financiera.

Configuración Contable:

Enlace con el módulo contable para garantizar la coherencia financiera.

Personalización de cuentas contables y categorías.

Integración con Procesos de Negocio:

Conexión con otros módulos de Odoo, como ventas, compras e inventario.

Flujo de trabajo integrado desde la venta hasta el cobro, y desde la compra hasta el pago.

La gestión efectiva de la facturación, cobros y pagos en Odoo contribuye a una contabilidad precisa, decisiones financieras informadas y relaciones sólidas con clientes y proveedores.








**Módulo 5. Odoo 15 -Técnico Fase 1)**

5\.1. Materiales para el Desarrollador en Odoo:

En esta sección, se proporcionan los recursos y materiales esenciales para cualquier desarrollador que desee trabajar con Odoo. Estos materiales son fundamentales para entender la arquitectura de Odoo, establecer un entorno de desarrollo y acceder a información técnica crucial:

Documentación Oficial:

Acceso a la documentación técnica oficial de Odoo, que incluye guías detalladas, referencia de API y manuales.

Información actualizada sobre las versiones más recientes de Odoo y sus características.

Código Fuente:

Disponibilidad del código fuente de Odoo para explorar la implementación interna y realizar modificaciones según las necesidades del proyecto.

Acceso a la plataforma de código abierto de Odoo en GitHub.

Foros y Comunidad:

Participación en los foros de la comunidad Odoo para obtener soporte técnico, compartir experiencias y aprender de otros desarrolladores.

Colaboración con la comunidad global de Odoo.

Módulos Existentes (OCA):

Exploración de los módulos desarrollados por la comunidad de Odoo (OCA - Odoo Community Association).

Uso de módulos existentes como referencia y punto de partida para el desarrollo.

Recursos de Desarrollo Web:

Herramientas y recursos específicos para el desarrollo web en Odoo, incluyendo la utilización de QWeb para la creación de vistas y plantillas.

Entorno de Desarrollo:

Configuración de un entorno de desarrollo local para Odoo, utilizando herramientas como Docker o scripts de instalación.

Instalación de Odoo en modo desarrollador para facilitar la creación y prueba de módulos.

Módulos de Ejemplo:

Módulos de ejemplo que ilustran las mejores prácticas de desarrollo en Odoo.

Ejemplos de código para entender la implementación de funcionalidades específicas.

Actualizaciones y Versiones:

Mantenimiento de un flujo constante de actualización sobre nuevas versiones y características de Odoo.

Adaptación a cambios en las versiones y mejora continua del conocimiento técnico.

Acceder a estos materiales proporciona a los desarrolladores los recursos necesarios para construir y mantener aplicaciones personalizadas sobre la plataforma Odoo de manera efectiva y eficiente.

5\.2. Instalación de Odoo con Docker-compose:

La instalación de Odoo con Docker-compose es una forma eficiente de gestionar la configuración y ejecución de múltiples contenedores. Aquí se presentan los pasos para instalar Odoo utilizando Docker-compose:

Instalación de Docker-compose:

Asegúrese de tener Docker-compose instalado en su sistema. Puede seguir las instrucciones oficiales de Docker para la instalación en su sistema operativo específico.

Creación de un Archivo docker-compose.yml:

Cree un archivo llamado docker-compose.yml en un directorio de su elección. Puede utilizar un editor de texto para crear el archivo con el siguiente contenido de ejemplo:

yaml

version: "3"

services:

`  `web:

`    `image: odoo:16.0

`    `depends\_on:

`      `- db

`    `ports:

`      `- "8069:8069"

`    `volumes:

`      `- odoo-web-data:/var/lib/odoo

`      `- ./config:/etc/odoo

`      `- ./Dev\_addons:/mnt/extra-addons

`      `- ./log:/var/log/odoo

`    `environment:

`      `HOST: db

`      `USER: odoo

`      `PASSWORD: odoo

`  `db:

`    `image: postgres:latest

`    `environment:

`      `POSTGRES\_USER: odoo

`      `POSTGRES\_PASSWORD: odoo

`      `POSTGRES\_DB: postgres

`      `PGDATA: /var/lib/postgresql/data/pgdata

`    `volumes:

`      `- odoo-db-data:/var/lib/postgresql/data/pgdata

volumes:

`  `odoo-db-data:

`  `odoo-web-data:


Este archivo de ejemplo define un servicio llamado "odoo" que utiliza la imagen de Odoo versión 15.0, expone el puerto 8069 y vincula un archivo de configuración odoo.conf.

Creación del Archivo de Configuración odoo.conf:

Cree un archivo llamado odoo.conf en el mismo directorio que el archivo docker-compose.yml. Puede utilizar un editor de texto para configurar los parámetros necesarios. Ejemplo:

ini

[options]

; Nombre de la base de datos

dbname = nombre\_de\_base\_de\_datos

; Contraseña de administrador

admin\_passwd = contraseña\_admin

; Puerto de escucha de Odoo

http\_port = 8069

Ejecución de Docker-compose:

Abra una terminal, navegue al directorio que contiene los archivos docker-compose.yml y odoo.conf, y ejecute el siguiente comando:

docker-compose up -d

Este comando inicia los contenedores según la configuración proporcionada en el archivo docker-compose.yml.

Acceso a Odoo a través del Navegador:

Abra su navegador web y vaya a http://localhost:8069. Debería ver la interfaz de inicio de sesión de Odoo.

Utilice las credenciales proporcionadas en el archivo de configuración (odoo.conf) para iniciar sesión.

5\.4. Instalación de Odoo Enterprise On Premise:


La instalación de Odoo Enterprise On Premise implica el uso de la versión comercial de Odoo y se realiza en su propio servidor local o en las instalaciones de su empresa. Aquí se presentan los pasos generales para llevar a cabo esta instalación:

Adquisición de la Licencia de Odoo Enterprise:

Obtenga una licencia de Odoo Enterprise desde el sitio web oficial de Odoo o a través de un socio autorizado.

Descarga de la Versión Enterprise:

Después de adquirir la licencia, descargue la versión de Odoo Enterprise desde el sitio web de Odoo. Este archivo generalmente se proporciona en formato tar.gz.

Descompresión del Archivo:

Descomprima el archivo descargado en el directorio de su elección utilizando el siguiente comando (asegúrese de tener instalada la herramienta tar):

tar -xvzf nombre\_del\_archivo.tar.gz



Configuración del Archivo de Configuración:

Navegue al directorio recién creado y configure el archivo de configuración odoo.conf con los parámetros específicos de su entorno. Este archivo es crucial para la correcta configuración de Odoo. Aquí hay un ejemplo de configuración básica:

[options]

; Nombre de la base de datos

dbname = nombre\_de\_base\_de\_datos

; Contraseña de administrador

admin\_passwd = contraseña\_admin

; Puerto de escucha de Odoo

http\_port = 8069

Ejecución del Servicio Odoo:

Inicie el servicio Odoo utilizando el siguiente comando en el directorio donde extrajo los archivos:

./odoo-bin -c odoo.conf

Esto ejecutará Odoo con la configuración proporcionada en el archivo odoo.conf.

Acceso a Odoo a través del Navegador:

Abra su navegador web y vaya a http://localhost:8069. Debería ver la interfaz de inicio de sesión de Odoo.

Utilice las credenciales proporcionadas en el archivo de configuración (odoo.conf) para iniciar sesión.

Con estos pasos, habrá instalado y configurado Odoo Enterprise On Premise. Tenga en cuenta que la instalación de la versión Enterprise requiere una licencia válida para acceder a todas las funciones y características proporcionadas por esta edición.

5\.6. Parámetros más Importantes en odoo.conf:

El archivo odoo.conf es esencial para la configuración y ejecución de Odoo. Aquí se destacan algunos de los parámetros más importantes que se pueden configurar en este archivo:

dbfilter:

Este parámetro permite filtrar las bases de datos a las que puede acceder Odoo. Si se establece un valor para dbfilter, solo las bases de datos que cumplen con el filtro estarán disponibles.

dbfilter = ^nombre\_prefijo\_base\_datos\_

db\_name:

Define el nombre de la base de datos que Odoo utilizará. Este es el nombre de la base de datos predeterminada si no se proporciona en la URL al acceder a Odoo.

db\_name = nombre\_base\_datos

admin\_passwd:

Especifica la contraseña del usuario administrador de Odoo. Este usuario tiene privilegios elevados y puede realizar configuraciones y ajustes en la aplicación.

admin\_passwd = contraseña\_admin

addons\_path:

Indica la ruta de los módulos de Odoo (addons). Puede incluir varias rutas separadas por comas. Asegúrese de incluir la ruta correcta a sus módulos personalizados.

addons\_path = /ruta/a/odoo/addons,/ruta/a/sus/modulos/personalizados

logfile:

Especifica la ubicación del archivo de registro de Odoo. Este archivo registra eventos, errores y mensajes importantes relacionados con el funcionamiento de Odoo.

logfile = /ruta/del/archivo/odoo.log

log\_level:

Define el nivel de detalle del registro. Los valores pueden ser debug, info, warn, error o critical.

log\_level = info

http\_port:

Indica el puerto en el que Odoo escuchará las conexiones HTTP. El valor predeterminado es 8069.

http\_port = 8069

workers:

Establece el número de trabajadores para el servidor Odoo. Ajustar este valor puede mejorar el rendimiento en entornos de producción.

workers = 2

limit\_memory\_hard:

Define el límite máximo de memoria física que puede consumir Odoo antes de que se reinicie. Es útil para evitar problemas de memoria en servidores con recursos limitados.

limit\_memory\_hard = 2684354560

limit\_memory\_soft:

Establece un límite más suave para el consumo de memoria.

limit\_memory\_soft = 2147483648

Estos son solo algunos ejemplos de los parámetros más importantes que se pueden configurar en el archivo odoo.conf. Ajuste estos valores según las necesidades y requisitos específicos de su implementación de Odoo.

**5.7. Preparación del Entorno de Desarrollo para Odoo (Estos pasos NO son necesarios con Docker):**

Antes de comenzar a desarrollar con Odoo, es esencial tener un entorno de desarrollo configurado correctamente. Aquí se describen los pasos básicos para preparar el entorno de desarrollo:

Instalación de Dependencias:

Asegúrese de tener todas las dependencias necesarias instaladas, como Python, PostgreSQL, pip, y otros. Utilice el siguiente comando para instalar algunas de las dependencias:

bash

Copy code

sudo apt-get install python3 python3-pip python-dev python3-dev libxml2-dev libxslt1-dev zlib1g-dev libsasl2-dev libldap2-dev build-essential libssl-dev libffi-dev libmysqlclient-dev libjpeg-dev libpq-dev libjpeg8-dev liblcms2-dev libblas-dev libatlas-base-dev

Instalación de PostgreSQL:

Odoo utiliza PostgreSQL como base de datos. Instale PostgreSQL y cree un usuario y una base de datos para Odoo:

bash

Copy code

sudo apt-get install postgresql

sudo su - postgres

createuser --createdb --username postgres --no-createrole --no-superuser --pwprompt odoo

Configuración del Editor de Código:

Elija un editor de código que le resulte cómodo para desarrollar en Python y XML. Algunas opciones populares son Visual Studio Code, PyCharm o Sublime Text.

Clonación del Repositorio de Odoo:

Clona el repositorio oficial de Odoo desde GitHub. Esto te proporcionará el código fuente de Odoo para trabajar:

bash

Copy code

git clone https://www.github.com/odoo/odoo --depth 1 --branch 15.0 --single-branch .

Entorno Virtual:

Es una buena práctica utilizar entornos virtuales para aislar las dependencias de los diferentes proyectos. Crea y activa un entorno virtual:

bash

Copy code

python3 -m venv venv

source venv/bin/activate

Instalación de Dependencias de Python:

Instala las dependencias de Python para Odoo utilizando el archivo requirements.txt del repositorio:

bash

Copy code

pip3 install -r requirements.txt

Configuración de Odoo:

Crea una copia del archivo de configuración odoo.conf:

bash

Copy code

cp odoo.conf.sample odoo.conf

Edita odoo.conf según tus necesidades, configurando la conexión a la base de datos, la contraseña del administrador, etc.

Inicialización de la Base de Datos:

Inicializa la base de datos de Odoo ejecutando el siguiente comando desde la raíz del proyecto:

bash

Copy code

./odoo-bin -c odoo.conf -d nombre\_base\_datos --addons-path=addons -i base

Estos pasos básicos te proporcionarán un entorno de desarrollo funcional para comenzar a trabajar con Odoo. Personaliza la configuración según tus requisitos específicos y preferencias de desarrollo.

5\.8. OCA (Odoo Community Association):

La OCA, o Asociación Comunitaria de Odoo, es una organización sin ánimo de lucro que promueve la colaboración y el desarrollo de módulos adicionales para Odoo. Aquí se describen los aspectos clave relacionados con la OCA:

Propósito de la OCA:

La OCA se dedica a fomentar el desarrollo colaborativo y la mejora continua de Odoo. Proporciona un espacio donde los desarrolladores, usuarios y empresas pueden colaborar para crear y mantener módulos adicionales.

Contribuciones a la OCA:

Cualquier persona o empresa puede contribuir al repositorio de la OCA. Las contribuciones pueden incluir nuevos módulos, mejoras a módulos existentes, corrección de errores, documentación, y más.

Repositorios de la OCA:

La OCA organiza sus contribuciones en diversos repositorios, cada uno centrado en un tema específico. Por ejemplo, hay repositorios para contabilidad, comercio electrónico, recursos humanos, etc.

Uso de Módulos de la OCA:

Muchos desarrolladores y empresas utilizan los módulos de la OCA para extender las funcionalidades de Odoo. Estos módulos son de código abierto y están disponibles para su uso gratuito.

Instalación de Módulos de la OCA:

Puedes instalar los módulos de la OCA en tu instancia de Odoo utilizando varias formas, como la clonación directa desde los repositorios de la OCA o a través de la herramienta de gestión de módulos de Odoo.

Colaboración y Comunidad:

La OCA fomenta la colaboración y la comunicación entre los miembros de la comunidad de Odoo. Se utilizan foros, reuniones y otros medios para discutir ideas, resolver problemas y planificar futuras contribuciones.

Importancia de la OCA para Desarrolladores:

Los desarrolladores de Odoo a menudo encuentran en la OCA un recurso valioso para compartir conocimientos, aprender de otros expertos y colaborar en proyectos que beneficien a toda la comunidad.

Participación en la OCA:

Si estás interesado en contribuir, puedes unirte a la OCA, explorar los repositorios disponibles y participar en las discusiones. La participación activa es bienvenida y contribuirá al desarrollo continuo de Odoo.

En resumen, la OCA desempeña un papel crucial en la expansión y mejora de Odoo, proporcionando un marco organizativo para la colaboración comunitaria en el desarrollo de módulos adicionales.

5\.9. Documentación técnica Oficial Odoo:

La documentación técnica oficial de Odoo es una herramienta esencial para los desarrolladores que buscan comprender y trabajar con las capacidades técnicas del sistema. A continuación, se describen los aspectos clave de la documentación técnica de Odoo:

Portal de Documentación de Odoo:

Odoo mantiene un portal de documentación oficial que abarca varios aspectos del sistema. La sección técnica proporciona información detallada sobre el desarrollo de módulos, la creación de informes, la personalización de vistas y más.

Contenido de la Documentación Técnica:

La documentación técnica abarca temas como el desarrollo de módulos en Python, la creación de vistas personalizadas utilizando XML, el uso del ORM (Object-Relational Mapping) de Odoo, la creación de informes con QWeb, y otros aspectos técnicos relacionados con la plataforma.

Guías y Tutoriales:

La documentación incluye guías paso a paso y tutoriales que ayudan a los desarrolladores a comprender y aplicar conceptos específicos. Estos recursos son útiles para aprender nuevas funcionalidades y técnicas de desarrollo.

Referencia de API:

La documentación proporciona una referencia detallada de la API de Odoo, lo que permite a los desarrolladores conocer las clases, métodos y estructuras de datos disponibles para la creación de módulos y la personalización del sistema.

Compatibilidad con Versiones:

La documentación se actualiza regularmente para reflejar las características y cambios en las versiones más recientes de Odoo. Esto asegura que los desarrolladores tengan acceso a información precisa y relevante.

Acceso Gratuito:

La documentación técnica oficial de Odoo está disponible de forma gratuita en línea, lo que facilita su acceso para cualquier desarrollador que desee aprender o profundizar en aspectos técnicos del sistema.

Soporte Comunitario:

Además de la documentación oficial, la comunidad de Odoo también contribuye con recursos adicionales, foros de discusión y tutoriales. Estos recursos complementan la documentación oficial y brindan una perspectiva diversa sobre el desarrollo en Odoo.

Usabilidad Internacional:

La documentación técnica está disponible en varios idiomas, lo que facilita su comprensión para desarrolladores de diferentes regiones del mundo.


**Módulo 6. Odoo 15 -Técnico Fase 2)**

6\.1. El Menú Técnico:

En Odoo, el Menú Técnico es una sección especial que proporciona herramientas y utilidades destinadas a los desarrolladores y administradores del sistema. Aquí se detallan los aspectos clave del Menú Técnico en Odoo:

Acceso al Menú Técnico:

Para acceder al Menú Técnico, el usuario debe tener privilegios de acceso. Estos privilegios suelen ser asignados a usuarios con roles específicos, como el rol de administrador.

Ubicación en la Interfaz de Usuario:

El Menú Técnico generalmente se encuentra en la interfaz de usuario de Odoo, proporcionando un acceso rápido a herramientas avanzadas sin tener que recurrir a la línea de comandos o a configuraciones complejas.

Herramientas Principales:

El Menú Técnico alberga varias herramientas esenciales para el desarrollo y la administración del sistema, como:

Modelos: Permite explorar y administrar los modelos de datos de Odoo.

Vistas: Proporciona acceso a la configuración y diseño de las vistas de usuario.

Acciones: Ofrece opciones para gestionar acciones, tanto en la interfaz como en el código.

Informes: Facilita la creación y modificación de informes y documentos.

Seguridad: Permite gestionar aspectos de seguridad, como roles y permisos.

Traducciones: Facilita la gestión de traducciones y términos utilizados en la interfaz.

Exploración de Modelos:

Una característica fundamental del Menú Técnico es la capacidad de explorar y analizar los modelos de datos en Odoo. Los desarrolladores pueden examinar las tablas de la base de datos, conocer las relaciones entre los modelos y realizar operaciones relacionadas con los datos.

Desarrollo de Módulos:

Desde el Menú Técnico, los desarrolladores pueden crear y gestionar módulos. Esto incluye la creación de nuevas vistas, modelos y otros componentes personalizados que extienden las funcionalidades de Odoo.

Configuración Avanzada:

El Menú Técnico permite realizar configuraciones avanzadas que van más allá de las opciones disponibles en el Menú Principal. Esto incluye ajustes precisos en la lógica del sistema, vistas personalizadas y la gestión detallada de informes.

Herramientas de Depuración:

Para facilitar el proceso de desarrollo, el Menú Técnico proporciona herramientas de depuración que permiten a los desarrolladores rastrear y solucionar problemas en el código.

Entorno de Desarrollo Integrado (IDE):

Algunas versiones de Odoo incluyen un entorno de desarrollo integrado que se puede acceder desde el Menú Técnico. Este entorno proporciona herramientas adicionales para escribir, probar y depurar código de manera eficiente.

6\.1.1. Revisión de las Herramientas Técnicas desde la GUI de Odoo:

Dentro del Menú Técnico de Odoo, la sección de "Revisión de Herramientas Técnicas" proporciona una interfaz gráfica de usuario (GUI) que facilita a los desarrolladores y administradores el acceso y uso de diversas herramientas esenciales. Aquí se detallan los aspectos clave de esta revisión:

Ubicación y Acceso:

La sección "Revisión de Herramientas Técnicas" se encuentra típicamente dentro del Menú Técnico de Odoo, accesible para usuarios con privilegios específicos, como roles de desarrollo o administración.

Vistas de Datos:

La GUI permite a los usuarios explorar y gestionar los modelos de datos de Odoo. Pueden revisar las tablas de la base de datos, comprender las relaciones entre los modelos y realizar operaciones relacionadas con los datos, todo ello de manera visual y amigable.

Configuración de Vistas:

Los desarrolladores pueden acceder a las configuraciones de vistas directamente desde la interfaz gráfica. Esto incluye la capacidad de modificar y personalizar las vistas de usuario sin tener que recurrir a la edición manual de archivos de configuración.

Acciones y Flujo de Trabajo:

La revisión de herramientas técnicas proporciona acceso a las acciones y al flujo de trabajo dentro de Odoo. Los usuarios pueden gestionar las acciones disponibles en la interfaz de usuario y definir flujos de trabajo personalizados.

Herramientas de Seguridad:

La GUI facilita la gestión de aspectos de seguridad, como roles, permisos y reglas de acceso. Los administradores pueden definir quién tiene acceso a qué partes del sistema.

Exploración de Traducciones:

Desde la interfaz gráfica, los usuarios pueden explorar y gestionar las traducciones utilizadas en Odoo. Esto es crucial para asegurar una experiencia de usuario localizada y adaptada a diferentes idiomas.

Herramientas de Depuración:

La revisión de herramientas técnicas incluye herramientas de depuración que permiten a los desarrolladores rastrear problemas en el código y realizar ajustes en tiempo real.

Entorno de Desarrollo Integrado (IDE):

Algunas versiones de Odoo ofrecen un entorno de desarrollo integrado accesible desde la interfaz gráfica. Esto proporciona un espacio para escribir, probar y depurar código de manera más eficiente.

6\.2. Creando un Módulo desde Cero:

Crear un módulo desde cero en Odoo es esencial para personalizar y extender las funcionalidades del sistema. Aquí se describen los pasos básicos para crear un módulo desde cero:

Estructura del Módulo:

Un módulo en Odoo sigue una estructura específica de archivos y carpetas. Se crea un directorio para el módulo con un nombre único y se incluyen archivos clave como \_\_manifest\_\_.py y carpetas como models, views, y security.

Archivo \_\_manifest\_\_.py:

Este archivo es fundamental y contiene metadatos del módulo, como el nombre, la versión, la descripción y las dependencias. También especifica la ubicación de otros archivos esenciales.

\# Ejemplo básico de \_\_manifest\_\_.py

{

` `'name': 'Mi Módulo Personalizado',

` `'version': '1.0',

` `'summary': 'Breve descripción del módulo',

` `'description': 'Descripción detallada del módulo',

` `'author': 'Tu Nombre',

` `'depends': ['base'],

` `'data': [

` `'security/ir.model.access.csv',

` `'views/mi\_vista.xml',

` `],

` `'installable': True,

}

Definición de Modelos (models):

Se define la lógica del negocio y la estructura de datos creando clases de modelos en el directorio models. Estas clases extienden models.Model y definen campos, métodos y relaciones.

\# Ejemplo básico de definición de modelo

from odoo import models, fields

class MiModelo(models.Model):

` `\_name = 'mi.modulo.modelo'

` `\_description = 'Descripción del modelo'

` `name = fields.Char(string='Nombre', required=True)

` `descripcion = fields.Text(string='Descripción')


Definición de Vistas (views):

Las vistas controlan cómo se presenta la información al usuario. Se crean archivos XML en el directorio views para definir la interfaz de usuario y las vistas de lista, formulario, árbol, etc.

`    `<!-- Ejemplo básico de vista de formulario -->

<record id="view\_mi\_modelo\_form" model="ir.ui.view">

`    `<field name="name">mi.modelo.form</field>

`    `<field name="model">mi.modulo.modelo</field>

`    `<field name="arch" type="xml">

`        `<form>

`            `<group>

`                `<field name="name"/>

`                `<field name="descripcion"/>

`            `</group>

`        `</form>

`    `</field>

</record>


Seguridad (security):

Se pueden definir reglas de acceso y permisos en el directorio security. El archivo ir.model.access.csv especifica qué roles pueden acceder a qué modelos.

id,name,model\_id:id,group\_id:id,perm\_read,perm\_write,perm\_create,perm\_unlink

access\_mi\_modelo,access\_mi\_modelo,model\_mi\_modelo,,1,1,1,1

` `Actualización e Instalación:

Después de crear el módulo, se actualiza la lista de módulos en Odoo y se instala el nuevo módulo. Esto se puede hacer desde la interfaz gráfica o utilizando comandos en el entorno de desarrollo.

\# Comando para actualizar e instalar el módulo

odoo -d nombre\_bd -u nombre\_modulo

Pruebas y Depuración:

Se realizan pruebas exhaustivas para asegurarse de que el módulo funciona como se espera. Se utiliza el entorno de desarrollo integrado (IDE) y las herramientas de depuración de Odoo para corregir errores y mejorar la funcionalidad.

6\.3. Guías de Estilo:

Las guías de estilo en Odoo se refieren a las convenciones y prácticas recomendadas para escribir código de manera consistente y legible. Seguir guías de estilo facilita la colaboración entre desarrolladores y mejora la mantenibilidad del código. Aquí hay algunas pautas generales relacionadas con las guías de estilo en Odoo:

PEP 8:

Odoo, al igual que Python en general, sigue las PEP 8 (Python Enhancement Proposal 8), que son las guías de estilo oficiales para el código Python. Esto incluye recomendaciones sobre la indentación, el espaciado, el uso de mayúsculas y minúsculas, entre otros.

Nombrado Descriptivo:

Es importante dar nombres descriptivos a las clases, funciones, campos y variables. Esto ayuda a comprender rápidamente el propósito de cada elemento en el código.

\# Ejemplo de nombres descriptivos

class MiModelo(models.Model):

`    `\_name = 'mi.modelo'

`    `\_description = 'Descripción de Mi Modelo'

def calcular\_total(self):

`    `# lógica del método


Comentarios Significativos:

Incluir comentarios donde sea necesario para explicar el propósito de ciertas líneas de código o decisiones de diseño. Sin embargo, se debe evitar el exceso de comentarios obvios.


\# Evitar comentarios obvios

x = x + 1  # Incrementar x en 1

\# Comentario significativo

if condicion:

`    `# Realizar acción si la condición es verdadera

`    `realizar\_accion()



Estructura de Código:

Mantener una estructura de código clara y organizada. Agrupar funciones relacionadas, utilizar espacios en blanco para mejorar la legibilidad y seguir una estructura coherente en el código.

\# Ejemplo de estructura de código

class MiModelo(models.Model):

`    `\_name = 'mi.modelo'

`    `\_description = 'Descripción de Mi Modelo'

`    `def metodo\_1(self):

`        `# lógica del método 1

`    `def metodo\_2(self):

`        `# lógica del método 2


Evitar Comentarios en Exceso:

Esforzarse por escribir código autoexplicativo que no dependa en exceso de comentarios. Los buenos nombres de variables y funciones son preferibles a comentarios excesivos.

\# Evitar comentarios excesivos

\# Definir una función que calcule el total

def calcular\_total():

`    `# lógica del método


Revisión de Código:

Fomentar la revisión de código entre los miembros del equipo para garantizar que el código cumpla con las guías de estilo y siga las mejores prácticas.

6\.4. Librerías e Imports:

En Odoo, al igual que en el desarrollo de software en Python en general, la gestión adecuada de librerías e imports es esencial para garantizar un código limpio y eficiente. Aquí se describen algunas prácticas relacionadas con las librerías e imports en Odoo:

Imports Explícitos:

Se debe utilizar la forma de importación explícita en lugar de importar todo desde un módulo. Esto mejora la claridad del código y evita posibles conflictos de nombres.

\# Evitar importar todo desde un módulo

\# from odoo import models, fields, api

\# Importar de forma explícita

from odoo import models, fields, api

Orden de Imports:

Mantener un orden lógico en los imports. Por lo general, se comienzan con imports de Python estándar, seguidos de librerías externas y, finalmente, imports de Odoo.

\# Ejemplo de orden de imports

import datetime

import math

from external\_library import some\_function

from odoo import models, fields, api

Evitar Imports No Utilizados:

Eliminar cualquier import que no se utilice en el código. Los imports no utilizados pueden dificultar la comprensión del código y potencialmente introducir errores.

\# Evitar imports no utilizados

\# from odoo import exceptions # Import no utilizado

from odoo import models, fields, api

Imports Relativos:

Utilizar imports relativos cuando sea posible, especialmente al trabajar en módulos específicos de Odoo. Esto ayuda a mantener la portabilidad del código.

\# Ejemplo de import relativo

from . import some\_module # Import relativo al mismo paquete

Evitar Aliasing Excesivo:

Limitar el uso de alias para evitar confusión en el código. Los nombres de las librerías o módulos deben ser lo más descriptivos posible.

\# Evitar alias excesivo

\# import odoo.models as om # Alias confuso

from odoo import models, fields, api

Revisión Regular:

Realizar revisiones regulares de imports para garantizar que se cumplan las prácticas y para eliminar imports no utilizados.

6\.5. Models Fields Atributos:

En Odoo, al definir modelos (clases) que representan tablas de bases de datos, los atributos de campo juegan un papel crucial en la configuración del comportamiento y la apariencia de esos campos. Aquí se describen algunos atributos comunes utilizados en los campos de modelos en Odoo:

String:

El atributo string se utiliza para proporcionar una etiqueta descriptiva para el campo. Esta etiqueta se mostrará en la interfaz de usuario de Odoo.

name = fields.Char(string="Nombre")



Help:

El atributo help proporciona una descripción adicional o ayuda para el campo. Este texto se muestra cuando se pasa el cursor sobre el campo en la interfaz de usuario.

description = fields.Text(string="Descripción", help="Breve descripción del campo")



Required:

required se utiliza para especificar si un campo es obligatorio al crear o modificar un registro. Si se establece en True, el campo debe tener un valor.

email = fields.Char(string="Correo Electrónico", required=True)



Readonly:

readonly se utiliza para hacer que un campo sea de solo lectura. Cuando se establece en True, el campo no se puede modificar a través de la interfaz de usuario.

age = fields.Integer(string="Edad", readonly=True)



Default:

default permite establecer un valor predeterminado para un campo. Este valor se asignará automáticamente al crear un nuevo registro.

status = fields.Selection(string="Estado", selection=[('draft', 'Borrador'), ('done', 'Hecho')], default='draft')



Compute:

compute se utiliza para especificar una función que calculará dinámicamente el valor del campo en función de otros campos del modelo.

total\_amount = fields.Float(string="Monto Total", compute="\_compute\_total\_amount")

@api.depends('quantity', 'unit\_price')

def \_compute\_total\_amount(self):

` `for record in self:

` `record.total\_amount = record.quantity \* record.unit\_price


Inverse:

inverse se utiliza en combinación con compute para permitir la actualización bidireccional de campos calculados.

@api.depends('total\_amount')

def \_compute\_total\_amount(self):

` `for record in self:

` `record.total\_amount = record.quantity \* record.unit\_price

def \_inverse\_total\_amount(self):

` `for record in self:

` `record.unit\_price = record.total\_amount / record.quantity



String Attribute for Selection:

En campos de selección, el atributo selection se utiliza para proporcionar opciones como pares de valores de tuplas.

gender = fields.Selection(string="Género", selection=[('male', 'Masculino'), ('female', 'Femenino')])



Estos atributos son fundamentales para personalizar y controlar el comportamiento de los campos en los modelos de Odoo, permitiendo una adaptación precisa a los requisitos específicos del negocio.

6\.6. Herencia Python y XML:

En Odoo, la herencia es una característica poderosa que permite extender y modificar tanto el comportamiento como la apariencia de los modelos y vistas existentes. La herencia se puede realizar tanto en el código Python como en las vistas XML.

Herencia en Python:

La herencia en Python permite extender la funcionalidad de una clase existente para crear una nueva clase que herede sus atributos y métodos. En Odoo, esto se utiliza comúnmente para extender los modelos existentes. Aquí hay un ejemplo:


from odoo import models, fields, api

class CustomResPartner(models.Model):

`    `\_inherit = 'res.partner'

`    `custom\_field = fields.Char(string="Campo Personalizado")

`    `@api.model

`    `def custom\_method(self):

`        `# Implementación personalizada del método

`        `pass



En este ejemplo, CustomResPartner hereda del modelo base res.partner y agrega un nuevo campo llamado custom\_field y un método personalizado custom\_method.

Herencia en XML:

La herencia en XML se utiliza para modificar las vistas existentes o crear nuevas vistas basadas en las ya existentes. Puede agregar, quitar o modificar elementos en una vista existente. Aquí hay un ejemplo de herencia de una vista de formulario:

`    `<record id="view\_res\_partner\_form\_custom" model="ir.ui.view">

`        `<field name="name">res.partner.form.custom</field>

`        `<field name="model">res.partner</field>

`        `<field name="inherit\_id" ref="base.view\_partner\_form"/>

`        `<field name="arch" type="xml">

`            `<xpath expr="//field[@name='name']" position="after">

`                `<field name="custom\_field" 

string="Campo Personalizado"/>

`            `</xpath>

`        `</field>

`    `</record>

En este ejemplo, se hereda la vista de formulario base base.view\_partner\_form del modelo res.partner, y se agrega un nuevo campo llamado custom\_field después del campo existente name.

La herencia en Python y XML proporciona flexibilidad para personalizar y extender la funcionalidad de Odoo según las necesidades específicas del negocio.

6\.7. ORM Framework:

El ORM (Object-Relational Mapping) en Odoo es un marco que facilita la interacción con la base de datos utilizando objetos en lugar de consultas SQL directas. Odoo utiliza su propio ORM llamado models que se basa en el ORM de Python llamado SQLAlchemy.

El ORM de Odoo facilita la creación, búsqueda, actualización y eliminación de registros en la base de datos utilizando modelos de Python. Aquí se detallan algunas de las operaciones comunes del ORM en Odoo:

Operaciones CRUD:

- Create (Crear):

new\_record = self.env['mi.modelo'].create({'campo': 'valor'})

- Read (Leer):

record = self.env['mi.modelo'].browse(record\_id)

- Update (Actualizar):

record.write({'campo': 'nuevo\_valor'})

- Delete (Eliminar):

record.unlink()

Operaciones de Búsqueda:

- Búsqueda Simple:

records = self.env['mi.modelo'].search([('campo', '=', 'valor')])

- Búsqueda Avanzada:

domain = [('campo1', '=', 'valor1'), ('campo2', '!=', 'valor2')]

records = self.env['mi.modelo'].search(domain)

Operaciones de Lectura:

- Lectura de un Campo:

value = record.campo

- Lectura de Múltiples Campos:

values = record.read(['campo1', 'campo2'])

El ORM de Odoo abstrae gran parte de la complejidad de las consultas SQL directas, permitiendo a los desarrolladores interactuar con la base de datos de una manera más orientada a objetos y Pythonic. Esto mejora la legibilidad del código y facilita el mantenimiento.

6\.7.1. default\_get:

En Odoo, el método default\_get se utiliza para predefinir valores predeterminados para los campos al crear un nuevo registro. Este método se define en el modelo y se invoca automáticamente cuando se crea un nuevo registro, estableciendo valores predeterminados para los campos.

Ejemplo de cómo se implementa el método default\_get en un modelo:

from odoo import models, fields, api

class MiModelo(models.Model):

`    `\_name = 'mi.modelo'

`    `name = fields.Char(string='Nombre')

`    `date = fields.Date(string='Fecha')

`    `@api.model

`    `def default\_get(self, fields):

`        `defaults = super(MiModelo, self).default\_get(fields)

`        `# Establecer valores predeterminados para los campos

`        `defaults['name'] = 'Valor predeterminado'

`        `defaults['date'] = fields.Date.today()

`        `return defaults


En este ejemplo, al crear un nuevo registro de mi.modelo, el campo name se predefinirá con el valor 'Valor predeterminado', y el campo date se predefinirá con la fecha actual.

El método default\_get toma una lista de campos (fields) como argumento y devuelve un diccionario con los valores predeterminados para esos campos. Este método es útil para simplificar la creación de registros al proporcionar valores por defecto.

6\.7.2. create:

El método create en Odoo se utiliza para crear nuevos registros en un modelo específico. Este método toma un diccionario de valores de campo como argumento y devuelve una instancia del nuevo registro creado.

Ejemplo de cómo se utiliza el método create:

from odoo import models, fields

class MiModelo(models.Model):

`    `\_name = 'mi.modelo'

`    `name = fields.Char(string='Nombre')

`    `description = fields.Text(string='Descripción')

\# Crear un nuevo registro usando el método create

nuevo\_registro = MiModelo.create({

`    `'name': 'Nuevo Nombre',

`    `'description': 'Descripción del nuevo registro',

})



En este ejemplo, se crea un nuevo registro en el modelo mi.modelo con los valores especificados para los campos name y description. El método create simplifica el proceso de creación de registros al encapsular la lógica necesaria para interactuar con la base de datos Odoo.

Es importante señalar que, al utilizar el método create, se deben proporcionar valores para los campos obligatorios del modelo, de lo contrario, se generará un error.



6\.7.3. write:

El método write en Odoo se utiliza para actualizar los valores de los campos en uno o varios registros existentes en un modelo. Toma un diccionario de valores de campo como argumento y actualiza los registros correspondientes con los nuevos valores proporcionados.

Ejemplo de cómo se utiliza el método write:


from odoo import models, fields

class MiModelo(models.Model):

`    `\_name = 'mi.modelo'

`    `name = fields.Char(string='Nombre')

`    `description = fields.Text(string='Descripción')

\# Supongamos que ya existe un registro con id=1 en el modelo

registro\_existente = MiModelo.browse(1)

\# Actualizar los valores del registro existente usando el método write

registro\_existente.write({

`    `'name': 'Nuevo Nombre',

`    `'description': 'Nueva descripción',

})



En este ejemplo, se obtiene un registro existente con browse utilizando su ID y luego se utiliza el método write para actualizar los valores de los campos name y description. El método write simplifica la tarea de modificar registros existentes en Odoo.

Es importante mencionar que, al utilizar el método write, se deben respetar las restricciones de acceso y seguridad definidas en el modelo. Además, este método también puede actualizar varios registros a la vez si se utiliza en una colección de registros (conjunto de registros filtrados).

6\.7.4. unlink:

El método unlink en Odoo se utiliza para eliminar uno o varios registros de un modelo. Toma como argumento una lista de IDs de registros que se desean eliminar.

Ejemplo de cómo se utiliza el método unlink:


from odoo import models

class MiModelo(models.Model):

`    `\_name = 'mi.modelo'

\# Supongamos que ya existe un registro con id=1 en el modelo

registro\_existente = MiModelo.browse(1)

\# Eliminar el registro existente usando el método unlink

registro\_existente.unlink()




En este ejemplo, se obtiene un registro existente con browse utilizando su ID y luego se utiliza el método unlink para eliminar ese registro.

Es importante tener en cuenta que el método unlink puede recibir una lista de IDs para eliminar varios registros a la vez. Además, al utilizar este método, se deben respetar las restricciones de acceso y seguridad definidas en el modelo.

Eliminar registros con el método unlink es una operación irreversible y debe realizarse con precaución.

6\.7.5. searching browsing:

En Odoo, la búsqueda y navegación son operaciones fundamentales para recuperar registros de la base de datos. Aquí hay una explicación de estos conceptos:

- Searching (Búsqueda): Es el proceso de encontrar registros que cumplen con ciertos criterios de búsqueda. Puedes realizar búsquedas utilizando el método search en un modelo. El método search devuelve una lista de IDs que cumplen con los criterios de búsqueda. Aquí hay un ejemplo:

from odoo import models

class MiModelo(models.Model):

`   `\_name = 'mi.modelo'

\# Buscar registros donde el campo 'nombre' sea igual a 'Ejemplo'

registros\_encontrados = MiModelo.search([('nombre', '=', 'Ejemplo')])

\# Ahora registros\_encontrados contiene los IDs de los registros que cumplen con el criterio

Browsing (Navegación): Una vez que tienes los IDs de los registros que deseas, puedes utilizar la navegación para obtener instancias completas de esos registros. Esto se hace con el método browse. Aquí hay un ejemplo:

from odoo import models

class MiModelo(models.Model):

`    `\_name = 'mi.modelo'

\# Supongamos que registros\_encontrados es una lista de IDs obtenida mediante la búsqueda

registros\_completos = MiModelo.browse(registros\_encontrados)

\# Ahora registros\_completos contiene instancias completas de los registros encontrados

Estos dos conceptos son esenciales para realizar operaciones de lectura en Odoo. Puedes utilizar búsquedas para filtrar los registros y luego navegar para obtener los datos completos de esos registros.

6\.7.6. Decoradores:

En Python, los decoradores son una forma elegante y poderosa de extender o modificar el comportamiento de funciones o métodos sin modificar directamente su código. En el contexto de Odoo y su ORM (Object-Relational Mapping), los decoradores se utilizan para personalizar el comportamiento de los métodos de los modelos.

Aquí hay un ejemplo de cómo se pueden usar decoradores en Odoo:


from odoo import models, fields, api

class MiModelo(models.Model):

`    `\_name = 'mi.modelo'

`    `name = fields.Char(string='Nombre', required=True)

`    `@api.model

`    `def create(self, values):

`        `# Personalizar la lógica de creación del registro

`        `# Puedes agregar lógica adicional antes o después de la creación

`        `nuevo\_registro = super(MiModelo, self).create(values)

`        `# Hacer algo más con el nuevo registro si es necesario

`        `return nuevo\_registro

En este ejemplo, @api.model es un decorador que indica que el método create es un método de modelo. El decorador @api.model es solo uno de los muchos decoradores disponibles en Odoo, y cada uno tiene un propósito específico.

Al utilizar decoradores, puedes personalizar el comportamiento de los métodos del modelo para adaptarse a tus necesidades sin tener que modificar directamente el código fuente del núcleo de Odoo. Esto facilita la actualización de Odoo a versiones más recientes, ya que tus personalizaciones están separadas en tus propios módulos.

6\.7.7. Eventos onchange:

En Odoo, los eventos onchange permiten ejecutar código cuando el valor de un campo cambia en el formulario de vista. Estos eventos son útiles para realizar acciones inmediatas en respuesta a cambios en los datos del modelo sin tener que guardar el registro.

Ejemplo de cómo se utiliza el evento onchange:


from odoo import models, fields, api

class MiModelo(models.Model):

`    `\_name = 'mi.modelo'

`    `name = fields.Char(string='Nombre', required=True)

`    `descripcion = fields.Text(string='Descripción')

`    `precio = fields.Float(string='Precio')

`    `@api.onchange('precio')

`    `def \_onchange\_precio(self):

`        `if self.precio > 100:

`            `self.descripcion = 'Producto de alta calidad'

`        `else:

`            `self.descripcion = 'Producto estándar'



En este ejemplo, hemos definido el método \_onchange\_precio y lo hemos decorado con @api.onchange('precio'). Esto significa que el método se ejecutará automáticamente cada vez que el valor del campo precio cambie en el formulario de vista.

Dentro del método \_onchange\_precio, verificamos el valor del campo precio y actualizamos el campo descripcion en consecuencia. Este es solo un ejemplo simple; puedes realizar cualquier lógica personalizada en el evento onchange según tus necesidades específicas.

6\.7.8. Odoo API XML-RPC:

Odoo proporciona una interfaz XML-RPC que permite la comunicación con el sistema desde aplicaciones externas. XML-RPC es un protocolo ligero basado en XML que se utiliza para intercambiar información entre sistemas.

Para utilizar la API XML-RPC de Odoo, puedes seguir estos pasos:

Configurar la Interfaz XML-RPC:

Asegúrate de que la interfaz XML-RPC esté habilitada en tu instancia de Odoo. Puedes hacerlo desde la interfaz web de Odoo yendo a Configuración técnica -> Configuración del sistema y marcando la opción "Permitir interfaz de servicios web".

Escribir Cliente XML-RPC en Python:

Puedes usar bibliotecas de Python como xmlrpc.client para interactuar con la interfaz XML-RPC de Odoo. Aquí hay un ejemplo básico de cómo conectar y realizar operaciones utilizando XML-RPC:

import xmlrpc.client

\# Configuración de la conexión XML-RPC

url = 'http://tu\_domino.com:8069'

db = 'nombre\_de\_tu\_base\_de\_datos'

username = 'tu\_usuario'

password = 'tu\_contraseña'

\# Conexión al servicio XML-RPC

common = xmlrpc.client.ServerProxy(f'{url}/xmlrpc/2/common')

uid = common.authenticate(db, username, password, {})

\# Conexión al objeto 'object' de la interfaz XML-RPC

models = xmlrpc.client.ServerProxy(f'{url}/xmlrpc/2/object')

\# Ejemplo: Leer registros de un modelo (res.partner)

partner\_ids = models.execute\_kw(db, uid, password,

`    `'res.partner', 'search', [[['is\_company', '=', True]]])

\# Imprimir resultados

print("IDs de partners (empresas):", partner\_ids)

Asegúrate de reemplazar las variables (url, db, username, password) con los valores específicos de tu instancia de Odoo.

Este ejemplo muestra cómo autenticarse en Odoo a través de la API XML-RPC y realizar una búsqueda en el modelo res.partner. Puedes realizar varias operaciones, como leer, crear, actualizar y eliminar registros utilizando la API XML-RPC.


6\.8. Campos Especiales en Odoo:

En Odoo, los campos especiales se utilizan para representar relaciones entre modelos y gestionar la relación entre ellos. Algunos de los campos especiales más comunes son Many2one, One2many, y Many2many. Estos campos permiten establecer relaciones entre registros de diferentes modelos. Aquí hay una breve descripción de estos campos:

Many2one:

Representa una relación de muchos a uno.

Se utiliza cuando varios registros de un modelo están relacionados con un solo registro de otro modelo.

Ejemplo:

class SaleOrder(models.Model):

`    `\_name = 'sale.order'

`    `customer\_id = fields.Many2one('res.partner', string='Customer')

One2many:

Representa una relación de uno a muchos.

Se utiliza cuando un registro de un modelo está relacionado con varios registros de otro modelo.

class ResPartner(models.Model):

`    `\_name = 'res.partner'

`    `contact\_ids = fields.One2many('res.partner', 'parent\_id', 

`	`string='Contacts')

Many2many:

Representa una relación de muchos a muchos.

Se utiliza cuando varios registros de un modelo están relacionados con varios registros de otro modelo.

class ProductTemplate(models.Model):

`    `\_name = 'product.template'

`    `tag\_ids = fields.Many2many('product.tag', string='Tags')

Estos campos no solo definen la relación, sino que también gestionan cómo se almacena la información en la base de datos y cómo se presenta en la interfaz de usuario.

Es importante entender cómo utilizar estos campos especiales para modelar eficientemente las relaciones entre los diferentes objetos de tu aplicación Odoo.

6\.9. Campos Calculados en Odoo:

Los campos calculados en Odoo, también conocidos como campos calculados o computados, son campos cuyos valores se generan automáticamente en función de una fórmula o una función. Estos campos son útiles cuando necesitas derivar un valor en tiempo real en lugar de almacenar datos redundantes. Aquí hay una descripción de cómo definir campos calculados en Odoo:

Definición Básica:

Los campos calculados se definen utilizando el decorador @api.depends para especificar las dependencias del campo.

class SaleOrder(models.Model):

`    `\_name = 'sale.order'

`    `total\_amount = fields.Float(string='Total Amount', compute='\_compute\_total\_amount')

`    `@api.depends('order\_line.price\_total')

`    `def \_compute\_total\_amount(self):

`        `for order in self:

`            `order.total\_amount = sum(order.order\_line.mapped('price\_total'))


Uso de Dependencias:

El argumento de @api.depends indica sobre qué campos depende el campo calculado.

Cuando los campos dependientes cambian, el método de cálculo (\_compute\_...) se ejecuta automáticamente.

Tipos de Campos Calculados:

Pueden ser de diferentes tipos, como fields.Float, fields.Integer, fields.Char, etc.

La elección del tipo depende del tipo de valor que el campo calculado debe contener.

Actualización Automática:

Odoo se encarga automáticamente de mantener actualizados los valores de los campos calculados cuando cambian las dependencias.

Uso en Vistas:

Puedes utilizar campos calculados en vistas de la misma manera que otros campos para mostrar información en formularios, listas y otras vistas.

Los campos calculados son esenciales para realizar cálculos dinámicos y mantener la coherencia de los datos en tu aplicación Odoo.












**Módulo 7. Wizards**

7\.1. Creación de Asistentes en Odoo (Wizards):

Los asistentes, también conocidos como wizards en Odoo, son ventanas emergentes que guían al usuario a través de un proceso específico, generalmente para recopilar información o realizar una acción. Aquí te explico cómo crear asistentes desde cero en Odoo:

Definir la Clase del Asistente:

Crea una nueva clase para el asistente que herede de models.TransientModel.

from odoo import models, fields, api

class SaleOrderWizard(models.TransientModel):

`    `\_name = 'sale.order.wizard'

`    `partner\_id = fields.Many2one('res.partner', string='Customer')

`    `order\_date = fields.Date(string='Order Date')

`    `def create\_sale\_order(self):

`        `# Lógica para crear una orden de venta basada en la información recopilada.

`        `# Puedes utilizar self.partner\_id y self.order\_date para acceder a los datos ingresados.

`        `return True

Definir la Vista del Asistente:

Crea una vista para el asistente utilizando el modelo recién creado (sale.order.wizard).

Define los campos necesarios en la vista para recopilar la información.

Ejemplo:

`    `<record id="view\_sale\_order\_wizard\_form" model="ir.ui.view">

`        `<field name="name">sale.order.wizard.form</field>

`        `<field name="model">sale.order.wizard</field>

`        `<field name="arch" type="xml">

`            `<form>

`                `<group>

`                    `<field name="partner\_id"/>

`                    `<field name="order\_date"/>

`                `</group>

`                `<footer>

`                    `<button string="Create Sale Order" type="object" class="oe\_highlight"

`                            `icon="fa-check" name="create\_sale\_order"/>

`                    `<button string="Cancel" class="oe\_link" icon="fa-times" special="cancel"/>

`                `</footer>

`            `</form>

`        `</field>

`    `</record>

Manejar la Lógica del Asistente:

Implementa métodos en la clase del asistente para manejar la lógica del proceso.

En el ejemplo, se creó un método create\_sale\_order que se llama al hacer clic en el botón "Create Sale Order".

Lanzar el Asistente:

Puedes lanzar el asistente desde cualquier lugar en el código de servidor donde tengas acceso a self.env.

def open\_sale\_order\_wizard(self):

`    `return {

`        `'name': 'Create Sale Order',

`        `'type': 'ir.actions.act\_window',

`        `'res\_model': 'sale.order.wizard',

`        `'view\_mode': 'form',

`        `'view\_id': self.env.ref('your\_module.view\_sale\_order\_wizard\_form').id,

`        `'target': 'new',

`    `}


Uso en Vistas y Flujos de Trabajo:

Puedes integrar el asistente en vistas o flujos de trabajo de Odoo para ofrecer una experiencia de usuario fluida.

Crear asistentes es útil cuando necesitas recopilar información de manera interactiva antes de realizar una acción en Odoo.


**Módulo 8. Qweb REPORTING**

8\.1. Sintaxis de Qweb en Odoo:

Qweb es un lenguaje de plantillas utilizado en Odoo para generar informes y documentos. Aquí se detalla la sintaxis básica de Qweb:

Definición del Documento:

Inicia el documento Qweb utilizando la etiqueta <template>.

Puedes definir atributos como t-name para asignar un nombre al informe.

`    `<template id="report\_invoice\_document" t-name="your\_module.report\_invoice\_document">


Estructura Básica:

La estructura básica del informe consta de etiquetas como <t t-if="condition"> para condiciones y <t t-foreach="records" t-as="record"> para bucles.

<t t-if="docs">

`        `<t t-foreach="docs" t-as="doc">

`            `<!-- Contenido del bucle -->

`        `</t>

`    	`</t>

</t>

Variables y Expresiones:

Utiliza <t t-esc="expression"/> para imprimir el valor de una expresión.

Puedes utilizar expresiones de Python dentro de las etiquetas Qweb.

<div>

`    `Total Amount: <span><t t-esc="doc.total\_amount"/></span>

`   `</div>

Condiciones y Bucles:

Emplea <t t-if="condition"> para estructuras condicionales.

Utiliza <t t-foreach="records" t-as="record"> para bucles.

<t t-if="doc.state == 'draft'">

` `<!-- Contenido si el estado es borrador -->

</t>

<t t-foreach="records" t-as="record">

` `<!-- Contenido del bucle -->

</t>

Renderización de Texto:

Para incluir texto en el informe, utiliza la etiqueta <t> y la expresión t-raw para renderizar texto sin escapar.

<t>

` `This is <t t-esc="'bold'"/> text.

</t>

Inclusión de Otros Informes:

Puedes incluir otros informes dentro de un informe utilizando <t t-call="module.report\_template"/>.

<t t-call="web.external\_layout">

`        `<!-- Contenido del informe -->

`    `</t>

me -->

</t>

Variables de Contexto:

Accede a variables del contexto con t-value y t-set.

`    `<t t-set="company" t-value="doc.company\_id"/>



Generación de Documentos:

Utiliza Qweb para definir la estructura y el diseño de documentos como facturas, pedidos, etc.

Puedes asociar informes Qweb con modelos de Odoo para generar documentos automáticamente.

Estilos CSS y Diseño:

Aplica estilos CSS a elementos HTML utilizando la etiqueta t-att-style.

<div t-att-style="'color: red;'">This text is red.</div>

Funciones Qweb:

Qweb ofrece varias funciones incorporadas como str\_to\_datetime, formatLang, etc., que puedes utilizar en expresiones.

La sintaxis de Qweb permite crear informes y documentos de manera flexible y dinámica en Odoo, brindando un control detallado sobre el diseño y la presentación de la información.

8\.2. Generación de Reportes en PDF con Qweb en Odoo:

La generación de informes en formato PDF es una tarea común en Odoo, y se realiza utilizando el lenguaje de plantillas Qweb. A continuación, se describen los pasos básicos para generar reportes en PDF con Qweb:

Definir una Plantilla Qweb:

Inicia creando una plantilla Qweb utilizando la etiqueta <template> en un archivo XML.

Define la estructura del informe, incluyendo variables, expresiones y elementos HTML.

<template id="report\_invoice" inherit\_id="web.external\_layout">

`        `<t t-call="report.html\_container">

`            `<t t-foreach="docs" t-as="o">

`                `<!-- Contenido del informe -->

`            `</t>

`        `</t>

`    `</template>


Asociar la Plantilla con el Modelo:

Asocia la plantilla Qweb con el modelo de Odoo al que pertenece el informe. Esto se hace en el archivo Python del informe.

class ReportInvoice(models.AbstractModel):

`    `\_name = 'report.your\_module.report\_invoice'

`    `\_inherit = 'report.report\_invoice\_document'


Generar el Informe en Formato PDF:

Define una función en el modelo que generará el informe en formato PDF.

Utiliza la función report\_sxw.report\_sxw para renderizar la plantilla y convertirla a PDF.

class ReportInvoice(models.AbstractModel):

`    `\_name = 'report.your\_module.report\_invoice'

`    `\_inherit = 'report.report\_invoice\_document'

`    `def render\_html(self, docids, data=None):

`        `# Lógica para obtener datos y renderizar la plantilla

`        `return self.env['report'].render('your\_module.report\_invoice', docargs)


Registrar el Informe en Odoo:

Registra el informe en Odoo para que esté disponible en la interfaz.

Esto se hace utilizando la función report\_sxw.report\_sxw y el método report\_sxw.report\_sxw('report.template\_id', 'model\_name').

class ReportInvoice(models.AbstractModel):

`    `\_name = 'report.your\_module.report\_invoice'

`    `\_inherit = 'report.report\_invoice\_document'

`    `def render\_html(self, docids, data=None):

`        `# Lógica para obtener datos y renderizar la plantilla

`        `return self.env['report'].render('your\_module.report\_invoice', docargs)

report\_sxw.report\_sxw('report.template\_id', 'model\_name')


Vista de Acción para el Informe:

Crea una vista de acción en Odoo para el informe. Asocia esta vista con el informe para que pueda ser accedido desde la interfaz.

<record id="action\_report\_invoice" model="ir.actions.report">

`        `<field name="name">Invoice Report</field>

`        `<field name="report\_type">qweb-pdf</field>

`        `<field name="model">your\_module.model\_name</field>

`        `<field name="report\_name">your\_module.report\_invoice</field>

`    `</record>

Acceso al Informe desde la Interfaz:

El informe ahora estará disponible en la interfaz de Odoo para los registros asociados al modelo.

Puedes acceder al informe desde el menú de acciones.

Estos pasos básicos te permitirán crear y generar informes en formato PDF utilizando Qweb en Odoo. Puedes personalizar la plantilla Qweb según tus necesidades específicas y agregar lógica adicional en la función que renderiza el HTML.

8\.3. Enviando Parámetros Extras en un Informe con Qweb en Odoo:

En ocasiones, puede ser necesario enviar parámetros adicionales a un informe para personalizar su contenido o realizar cálculos específicos. Aquí te dejo los pasos para enviar parámetros extras a un informe Qweb en Odoo:

Definir Parámetros en el Modelo:

En el modelo asociado al informe, define campos que actuarán como parámetros.

Estos campos almacenarán los valores que se enviarán al informe.

class YourModel(models.Model):

\_name = 'your\_module.your\_model'

param\_field = fields.Char(string='Parameter Field')

Modificar la Función de Renderizado del Informe:

En la clase que define la función de renderizado HTML del informe, recupera los valores de los parámetros y agrégales al contexto de la plantilla.

class ReportYourModel(models.AbstractModel):

`    `\_name = 'report.your\_module.report\_template\_id'

`    `\_inherit = 'report.report\_template\_id'

`    `def render\_html(self, docids, data=None):

`        `docargs = {

`            `'doc\_ids': docids,

`            `'doc\_model': self.model,

`            `'docs': self.env[self.model].browse(docids),

`            `'param\_value': self.env.context.get('param\_value'),

`        `}

`        `return self.env['report'].render('your\_module.report\_template\_id', docargs)


Actualizar la Plantilla Qweb:

En la plantilla Qweb, puedes acceder a los parámetros utilizando la sintaxis de expresión de Odoo.

<t t-set="param\_value" t-value="docs.param\_field" />

<div>Parameter Value: <span t-esc="param\_value" /></div>


Enviar Parámetros al Generar el Informe:

Cuando generas el informe desde la interfaz de Odoo, asegúrate de incluir los valores de los parámetros en el contexto.

return self.env['report'].get\_action(records, 'your\_module.report\_template\_id', context={'param\_value': 'Value'})

Aquí, 'param\_value' es el nombre del campo que definiste en el modelo.

Con estos pasos, podrás enviar parámetros adicionales a tus informes Qweb en Odoo y utilizarlos según tus necesidades específicas.


Módulo 9: Controllers en Odoo

Los controladores en Odoo juegan un papel crucial en la creación de páginas web dinámicas y en la gestión de las interacciones del usuario. Aquí se presenta una visión general del módulo 9 sobre Controllers:

9\.1. Creación y Uso de Controllers:

- Los controladores en Odoo están asociados con rutas URL específicas y manejan las solicitudes HTTP correspondientes.
- Se pueden utilizar para crear páginas web personalizadas, formularios, y gestionar acciones basadas en la interacción del usuario.

9\.2. Tipos de Controllers en Odoo:

- HTTP Controllers: Gestionan solicitudes HTTP y devuelven respuestas. Se definen mediante clases Python que heredan de http.Controller.
- Report Controllers: Personalizan o extienden informes existentes. Heredan de report.Controller.

9\.3. Creación de un HTTP Controller Básico:

- Define una clase Python que herede de http.Controller.
- Asocia la clase con una ruta URL utilizando el decorador @http.route.

from odoo import http

class MyController(http.Controller):

`    `@http.route('/my\_controller/page', auth='public', website=True)

`    `def my\_page(self, \*\*kwargs):

`        `return http.request.render('my\_module.my\_template', {})

9\.4. Parámetros y Contexto:

- Los métodos de los controladores pueden aceptar parámetros de la URL, que se especifican en el decorador @http.route.

@http.route('/my\_controller/page/<int:record\_id>', auth='public', website=True)

def my\_page\_with\_param(self, record\_id, \*\*kwargs):

`    `# Utiliza record\_id en tu lógica

`    `return http.request.render('my\_module.my\_template', {})

9\.5. Integración con Vistas y Plantillas:

- Los controladores suelen devolver vistas o plantillas HTML utilizando http.request.render.

return http.request.render('my\_module.my\_template', {})

9\.6. Seguridad y Autenticación:

- Especifica los niveles de autenticación con el parámetro auth en el decorador @http.route. Puede ser 'public' o 'user'.

@http.route('/my\_secure\_page', auth='user', website=True)

def secure\_page(self, \*\*kwargs):

`    `# Página solo para usuarios autenticados

`    `return http.request.render('my\_module.secure\_template', {})

9\.7. Integración con el Tema del Sitio Web:

- Utiliza el argumento website=True en el decorador para integrar la página con el tema del sitio web.

@http.route('/my\_controller/page', auth='public', website=True)

9\.8. Uso de Controllers en Módulos:

- Puedes organizar tus controladores en módulos y cargarlos en el arranque de la aplicación.

\# En el método `\_register\_hook` de tu módulo

http.controllers\_per\_module.append(MyController)

Estos son algunos conceptos y prácticas clave relacionados con la creación y el uso de controllers en Odoo. Los controllers ofrecen una forma flexible y poderosa de extender la funcionalidad web en la plataforma Odoo.


Módulo 10: Javascript en Odoo

El uso de JavaScript en Odoo es esencial para la creación de interfaces de usuario interactivas y dinámicas en el entorno web. A continuación, se presenta una visión general del módulo 10 sobre JavaScript en Odoo:

10\.1. Introducción a Javascript en Odoo:

- Odoo utiliza JavaScript para mejorar la experiencia del usuario en el cliente web.
- Se utiliza para crear interactividad, validaciones del lado del cliente y manipulación del DOM.

10\.2. Integración con QWeb y Plantillas:

- JavaScript puede integrarse directamente en las plantillas QWeb de Odoo.
- Se utiliza para ejecutar scripts en eventos específicos o manipular elementos HTML en la página.

**<script type="text/javascript">**

`    `**// Tu código JavaScript aquí**

**</script>**

10\.3. Utilización de Widgets en Odoo:

- Los widgets de Odoo son componentes JavaScript reutilizables que proporcionan funcionalidades específicas.
- Pueden ser campos, botones, formularios, etc.

**odoo.define('module\_name.widget\_name', function (require) {**

`    `**"use strict";**

`    `**var Widget = require('web.Widget');**

`    `**var MyWidget = Widget.extend({**

`        `**// Lógica del widget**

`    `**});**

`    `**return MyWidget;**

**});**

10\.4. Manejo de Eventos y Acciones:

- JavaScript se utiliza para gestionar eventos del lado del cliente, como clics, cambios y envíos de formularios.
- Puede interactuar con el servidor Odoo mediante llamadas a la API web.

**this.$el.on('click', function () {**

`    `**// Manejo de clics**

**});**

10\.5. Comunicación con el Servidor:

- Se utiliza AJAX para realizar solicitudes asíncronas al servidor Odoo.
- Las respuestas pueden ser manipuladas y utilizadas para actualizar la interfaz de usuario.

**ajax.jsonRpc('/my\_controller/action', 'call', {param: 'value'})**

`    `**.then(function (data) {**

`        `**// Procesar la respuesta del servidor**

`    `**});**

10\.6. Uso de Web Service API:

- Odoo proporciona una API web que permite a las aplicaciones externas y scripts JavaScript interactuar con el sistema.
- Se pueden realizar operaciones CRUD (Crear, Leer, Actualizar, Eliminar) utilizando esta API.

**// Ejemplo de llamada a la API web para leer registros**

**ajax.jsonRpc('/web/dataset/call\_kw/model\_name/read', 'call', {**

`    `**model: 'model\_name',**

`    `**method: 'read',**

`    `**args: [[record\_id]],**

**}).then(function (data) {**

`    `**// Procesar los datos leídos**

**});**

10\.7. Integración con QWeb y Plantillas:

- El código JavaScript se puede integrar con las plantillas QWeb para lograr una mayor modularidad y reutilización.

**<script type="text/javascript" src="/module\_name/static/src/js/script.js"></script>**

10\.8. Consideraciones de Rendimiento:

- Es esencial optimizar y considerar el rendimiento al trabajar con scripts JavaScript en Odoo.
- Minificar y combinar archivos JS, así como gestionar el almacenamiento en caché, son buenas prácticas.

El módulo 10 proporciona una base sólida para comprender y trabajar con JavaScript en el contexto de Odoo, permitiendo a los desarrolladores personalizar y mejorar la interfaz de usuario de sus aplicaciones.


