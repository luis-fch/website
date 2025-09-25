---
title: "Medline XML Parser"
description: "Implementación de un analizador léxico y sintáctico para archivos XML de Medline."
published_date: 09-25-2025
repo_url: "https://github.com/luis-fch/tareas-programadas-los-heuristicos"
tags: ["Python", "Flask", "Jinja"]
---

Este proyecto formó parte de las tareas del curso **CI0124 Computabilidad y Complejidad** de la Universidad de Costa Rica y lo desarrollamos en un grupo de tres personas.

## Descripción

La tarea consistió en desarrollar un analizador léxico y sintáctico para archivos XML de MedlinePlus. El objetivo principal fue extraer información relevante de estos archivos y presentarla de manera estructurada.

## Tecnologías

Para la parte del analizador léxico y sintáctico utilizamos Ply (Python Lex-Yacc), una herramienta que facilita la creación de analizadores en Python. Ply nos permitió definir reglas léxicas y gramaticales para procesar los archivos XML de MedlinePlus de forma eficiente.

Para la interfaz web utilizamos Flask, un framework web para Python, junto con plantillas Jinja para renderizar dinámicamente las páginas HTML.

## Implementación

El proyecto se estructuró en varias etapas según la materia vista en clase:

### Primera etapa

En la primera etapa elaboramos la especificación: lista de funcionalidades previstas, modelo de la estructura de datos y un mockup de la interfaz.

### Segunda etapa

En la segunda etapa implementamos únicamente el analizador léxico. Empezamos a usar Ply y definimos los tokens y las reglas léxicas necesarias para identificar los elementos del archivo XML.

En el caso de los tokens:

```python
tokens = (
  # xml
  'XML_OP',
  'XML_CL',

  # xml attributes
  'VERSION',
  'ENCODING',

  # doctype
  'DOCTYPE',

  # health-topics
  'HEALTH_TOPICS_OP',
  'HEALTH_TOPICS_CL',

  # health-topics attributes
  'TOTAL',
  'DATE_GENERATED',

  # health-topic
  'HEALTH_TOPIC_OP',
  'HEALTH_TOPIC_CL',

  # health-topic attributes
  'META_DESC',
  'TITLE',
  'URL',
  'ID',
  'LANGUAGE',
  'DATE_CREATED',

  # y así sucesivamente...
)
```

Para las reglas léxicas definimos expresiones regulares para cada token:

```python
# health-topic, group, descriptor, other-language, primary-institute,
#   site attributes, related-topic and qualifier
t_META_DESC = r'meta-desc="[^"]*"'
t_TITLE = r'title="[^"]*"'
t_URL = r'url="https?:\/\/(?:www\.)?[-\w]+(?:\.[ \w]+)+(:\d+)?(\/[-\w.\/?%&=+;:#,\[\]\(\)\' ]*)?"'
t_LANGUAGE_MAPPED_URL = r'language-mapped-url="https?:\/\/(?:www\.)?[-\w]+(?:\.[-\w]+)+(:\d+)?(\/[-\w.\/?%&=#]*)?"'
t_ID = r'id="[\d\w]*"'
t_LANGUAGE = r'language="(English|Spanish)"'
t_DATE_CREATED = r'date-created="(0?[1-9]|1[0-2])\/(0?[1-9]|[12][0-9]|3[01])\/\d{4}"'
t_VERNACULAR_NAME = r'vernacular-name="([\s\S]*?)"'

t_ALSO_CALLED_OP = r'<also-called>'
t_ALSO_CALLED_CL = r'</also-called>'

# y así sucesivamente...
```

### Tercera etapa

En esta entrega implementamos el analizador sintáctico. Definimos las reglas gramaticales que permitieron estructurar la información extraída por el analizador léxico. En ese momento no existía interfaz gráfica, solo se imprimía en consola.

Algunos ejemplos de las reglas gramaticales definidas:

```python
def p_document(t):
    'document : header body'

def p_header(t):
    'header : xml DOCTYPE'
    print(f"""Header:
    {t[1]}
    {t[2]}
    """)

def p_body(t):
    'body : HEALTH_TOPICS_OP TOTAL DATE_GENERATED CLOSE health_topic_list HEALTH_TOPICS_CL'
    print("Body: ", t[2], t[3])

def p_health_topic_list(t):
    '''health_topic_list : health_topic health_topic_list
                         | empty'''

# y así sucesivamente...
```

### Cuarta etapa

En esta entrega añadimos una estructura de datos para almacenar la información extraída. Decidimos usar clases y diccionarios para mantener los datos de manera estructurada.

### Quinta etapa

Finalmente, en la última entrega incorporamos una interfaz web sencilla usando Flask y plantillas Jinja. En esta interfaz permitimos al usuario subir un archivo XML y visualizar la información extraída de forma estructurada en el navegador.

#### Capturas

<img width="2450" height="1531" alt="image" src="https://github.com/user-attachments/assets/80a776bf-69d3-4b63-b354-6626f740fd4e" />

<img width="2450" height="1542" alt="image" src="https://github.com/user-attachments/assets/a2844d3f-7d4e-4b53-86cb-cb19d298c460" />

<img width="2528" height="1594" alt="image" src="https://github.com/user-attachments/assets/72be390c-16fe-429c-90a8-85b44f6c1201" />

<img width="2520" height="1594" alt="image" src="https://github.com/user-attachments/assets/bb6bcd01-998b-4f08-80a4-1bab39efba11" />

<img width="2457" height="1543" alt="image" src="https://github.com/user-attachments/assets/6efb9757-6f2c-476c-a9c1-9791fd8c5fae" />

<img width="2452" height="1539" alt="image" src="https://github.com/user-attachments/assets/d2a5b876-2e10-48a3-844a-0cd1661f7e4a" />
