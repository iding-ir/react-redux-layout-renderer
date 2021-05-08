## Index

- [Intro](#intro)
- [Demo](#demo)
- [Data structure](#data-structure)

## Intro

Layout Renderer receives a standard JSON file and a number of Markdown files and renders a themeable multilingual responsive web application.

It uses React, Redux, SASS and no CSS framework to demonstrate my front-end skills.

## Demo

[Live demo](http://react-redux-layout-renderer.iding.ir)

## Data structure

Input data is in the form of JSON.

It supports html tags and markdown for page content.

#### config.json:

```
{
  "en": {
    "language": "English",
    "logo": "data/en/logo.svg",
    "splash": {
      "title": "[EN] Lorem Ipsum",
      "description": "[EN] Lorem ipsum dolor sit amet"
    },
    "footer": "[EN] Nam ornare tortor enim",
    "notFound": {
      "title": "[EN] 404",
      "description": "[EN] Lorem ipsum dolor sit amet"
    },
    "menuItems": [
      {
        "title": "[EN] Curabitur",
        "url": "#"
      },
      {
        "title": "[EN] Habitant",
        "url": "#"
      },
      {
        "title": "[EN] Dolore",
        "url": ""
      },
      {
        "title": "[EN] Fusce",
        "url": "#"
      }
    ],
    "pages": [
      {
        "id": 1,
        "slug": "en-augue",
        "icon": "data/en/icons/augue.svg",
        "title": "[EN] Augue",
        "content": "data/en/pages/augue.md"
      },
      {
        "id": 2,
        "slug": "en-sodales",
        "icon": "data/en/icons/non-sodales.svg",
        "title": "[EN] Non sodales",
        "content": "data/en/pages/non-sodales.md"
      },
      {
        "id": 3,
        "slug": "en-volutpat",
        "icon": "data/en/icons/volutpat.svg",
        "title": "[EN] Volutpat",
        "content": "data/en/pages/volutpat.md"
      }
    ]
  }
}

```
