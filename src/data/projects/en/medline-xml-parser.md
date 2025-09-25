---
title: "Medline XML Parser"
description: " Implementation of a lexical and syntactic parser for Medline XML files."
published_date: 09-25-2025
repo_url: "https://github.com/luis-fch/tareas-programadas-los-heuristicos"
tags: ["Python", "Flask", "Jinja"]
---

This project was part of the assignments for the **CI0124 Computability and Complexity** course at the University of Costa Rica and was developed by a group of three people.

## Description

The assignment consisted of developing a lexical and syntactic parser for MedlinePlus XML files. The main goal was to extract relevant information from these files and present it in a structured way.

## Technologies

For the lexical and syntactic parser we used Ply (Python Lex-Yacc), a tool that facilitates creating parsers in Python. Ply allowed us to define lexical and grammar rules to efficiently process MedlinePlus XML files.

For the web interface, we used Flask, a web framework for Python, along with Jinja templates to render HTML pages dynamically.

## Implementation

The project was organized into several stages according to the material covered in class:

### First stage

In the first stage we prepared the specification: list of planned features, the data structure model, and a mockup of the interface.

### Second stage

In the second stage we implemented only the lexical analyzer. We started using Ply and defined the tokens and lexical rules needed to identify elements of the XML file.

For the tokens:

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

  # and so on...
)
```

For the lexical rules we defined regular expressions for each token:

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

# and so on...
```

### Third stage

In this submission we implemented the syntactic analyzer. We defined grammar rules that structured the information extracted by the lexical analyzer. At that time there was no graphical interface, so the output was printed to the console.

Some examples of the grammar rules defined:

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

# and so on...
```

### Fourth stage

In this delivery we added a data structure to store the extracted information. We decided to use classes and dictionaries to keep the data in a structured manner.

### Fifth stage

Finally, in the last delivery we incorporated a simple web interface using Flask and Jinja templates. In this interface the user can upload an XML file and view the extracted information structured in the browser.

#### Screenshots

<!-- TODO: Add screenshots later in the repo -->
