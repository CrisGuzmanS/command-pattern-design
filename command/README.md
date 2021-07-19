# COMMAND

Convierte una solicitd en un **objeto** independiente, el cual, contiene toda la información sobre la solicitud.

## PROBLEMA

Desarrollaste una aplicación con una clase **boton** la cual, puede ser usada para todos los botones.

Terminarás creando cientos de **subclases** una para cada botón.

Corres el riesgo de descomponer las sublcases cuando editas la clase **boton**.

podrías **copiar** el texto desde un botón, o con shortcuts.

Tendrías que implementar la operación **copiar** en diferentes subclases.

## SOLUCION

Un buen diseño de software implica separar por **capas**.

Debes extraer el objeto invocado, el metodo y los argumentos y ponerlos en una clase **comando**.

Ahora, el objeto GUI activa el **comando**.

## ¿CUANDO USAR COMMAND?

Cuando diferentes receptores lleven a cabo el comando de diferente forma.

Para hacer undo y redo.

Para tener registro de los comandos realizados.