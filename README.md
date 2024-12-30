🛍️ Tienda Digital con NestJS
Descripción
Una tienda digital diseñada con NestJS y tecnologías modernas que implementa funcionalidades clave como gestión de productos, ofertas, autenticación y optimización del backend para un rendimiento eficiente.

🚀 Funcionalidades Principales
Gestión de Productos
CRUD de productos con soporte para:
Stock dinámico.
Productos en oferta con descuentos.
Imágenes asociadas.
Clasificación por categorías y marcas.
Reseñas y calificaciones para productos.
Recomendaciones de productos basadas en categorías o historial del usuario.
Optimización de Búsquedas
Filtros avanzados:
Por rango de precio, categoría, marca y calificación.
Ordenamiento:
Por relevancia, precio, popularidad.
Funciones para Usuarios
Autenticación basada en JWT.
Lista de deseos para guardar productos favoritos.
Historial de pedidos con estados como pendiente, enviado y completado.
Notificaciones en tiempo real o por correo electrónico:
Estado del pedido.
Nuevas promociones.
Panel Administrativo
Gestión centralizada de:
Productos, pedidos, usuarios, promociones y descuentos.
Estadísticas de ventas, inventario y tráfico.
Generación de reportes automatizados.
📚 Arquitectura y Diseño
Arquitectura Modular
El backend se organiza en módulos para una fácil escalabilidad y mantenimiento.

Patrones de Diseño Utilizados
CQRS: Separación de comandos (escritura) y consultas (lectura).
Patrón Repositorio: Abstracción de la interacción con las bases de datos (MySQL y MongoDB).
Factory Pattern: Servicios intercambiables como MinIO o S3.
Observer Pattern: Notificaciones de eventos importantes como actualización de stock.
🛠️ Tecnologías y Herramientas
Backend
NestJS: Framework backend modular y eficiente.
TypeScript: Para un desarrollo robusto y tipado.
Bases de Datos
MySQL: Para datos estructurados como usuarios y pedidos.
MongoDB: Para datos no estructurados como productos e imágenes.
ORMs utilizados:
TypeORM para MySQL.
Mongoose para MongoDB.
Caching y Colas
Redis: Para caching, manejo de sesiones y rate limiting diferenciado.
Bull: Para tareas en segundo plano como:
Envío de correos.
Generación de reportes.
Gestión de Archivos
MinIO: Servicio gratuito similar a S3 para almacenamiento de imágenes.
Multer: Middleware para subida de archivos.
DevOps y Contenedores
Docker: Configuraciones para desarrollo y producción.
Herramientas para calidad de código:
Husky: Pre-commit hooks.
ESLint y Prettier: Estandarización del código.
