# Documentación de la API de MercadoLibre

¡Bienvenido a la documentación de la API de MercadoLibre! Esta API proporciona acceso a información detallada sobre productos y búsquedas en MercadoLibre.

## Endpoints Disponibles

- `GET /api/items`: Obtiene los resultados de una búsqueda según un término específico.


## Uso de la API

### Obtener Resultados de Búsqueda

Para obtener los resultados de una búsqueda, realiza una solicitud GET a `/api/items` con el parámetro `q` que especifica el término de búsqueda.

### Resultado de Búsqueda

```json
{
  "author": {
    "name": "Tu Nombre",
    "lastname": "Tu Apellido"
  },
  "categories": ["Electrónica", "Celulares y Teléfonos"],
  "items": [
    {
      "id": "MLA123456789",
      "title": "iPhone 12",
      "price": {
        "amount": 100000,
        "currency": "ARS",
        "decimals": 0.22
      },
      "picture": "https://example.com/iphone.jpg",
      "condition": "Nuevo",
      "free_shipping": true,
    }
  ]
}


- `GET /api/items/:id`: Obtiene los detalles de un artículo específico por su ID.

## Uso de la API

### Obtener Resultados de Búsqueda

Para obtener los resultados de una búsqueda, realiza una solicitud GET a `/api/items` con el parámetro `q` que especifica el término de búsqueda.

### Resultado de Búsqueda

```json
{
  "author": {
    "name": "Tu Nombre",
    "lastname": "Tu Apellido"
  },
  "categories": ["Electrónica", "Celulares y Teléfonos"],
  "item": {
      "id": "MLA123456789",
      "title": "iPhone 12",
      "price": {
        "amount": 100000,
        "currency": "ARS",
        "decimals": 0.22
      },
      "picture": "https://example.com/iphone.jpg",
      "condition": "Nuevo",
      "free_shipping": true,
      "sold_quantity": 19, 
      "description": "Descripción"
    }
}
