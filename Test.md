## Test Treeconomy


### Preguntas teóricas

1. Identifique las diferencias (si las hay) entre un microservicio y un servicio web.
- Los microservicios deben tener una base de datos independiente por cada uno de ellos, mientras los servicios web se dirigen todos a una base de datos centralizada.
- La comunicación entre microservicios se puede realizar asincronamente (pubSub) o sicronamente (RPC) mientras los servicios web se comunican sincronamente.
- El dominio de un microservicio se encuentra en una única responsabilidad, en un servicio web se encuentra en todo el dominio del negocio.

2. Diferencias entre Rest y Restful.
- Rest: Arquitectura, estandar http (uso de verbos, stateless, definiciones de endpoints como no usar extensiones en los nombres)
- Restful: Cuando un servicio web utiliza el estandar Rest

3. Que significa la inyección de dependencias y cuando se aplican.
- Patron de diseño, en el que se exportan a un unico lugar las clases y se crea un objeto que es quien se suministra donde se necesita instanciar, muy fuerte para simplificar y separar funcionalidades (principio de responsabilidad simple)
facilita el testing y el proceso de DevOps (Este patrón de diseño se podrá ver en la prueba que les hago envío).
