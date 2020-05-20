## Index

- [Intro](#intro)
- [Demo](#demo)
- [Data structure](#data-structure)

## Intro

Layout Renderer receives a standard JSON file and renders a themeable multilingual responsive web application.

It uses React, Redux, SASS and no CSS framework to demonstrate my front-end skills.

## Demo

[Live demo](http://react-redux-layout-renderer.iding.ir)

## Data structure

Input data is in the form of JSON.

It supports html tags and markdown for page content.

```
{
  "en": {
    "language": "English",
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
      }
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
        "slug": "augue",
        "icon": "[BASE64_IMAGE]",
        "title": "[EN] Augue",
        "content": "### [EN] Aliquet \nPorttitor lacus luctus [accumsan](#) tortor posuere."
      },
      {
        "id": 2,
        "slug": "non-sodales",
        "icon": "[BASE64_IMAGE]",
        "title": "[EN] Non sodales",
        "content": "### [EN] Viverra \nAdipiscing at in tellus. Morbi tristique senectus et netus et malesuada fames ac."
      }
    ]
  },
  "de": {
    "language": "Deutsch",
    "splash": {
      "title": "[DE] Lorem Ipsum",
      "description": "[DE] Lorem ipsum dolor sit amet"
    },
    "footer": "[DE] Nam ornare tortor enim",
    "notFound": {
      "title": "[DE] 404",
      "description": "[DE] Lorem ipsum dolor sit amet"
    },
    "menuItems": [
      {
        "title": "[DE] Curabitur",
        "url": "#"
      },
      {
        "title": "[DE] Dolore",
        "url": ""
      },
      {
        "title": "[DE] Fusce",
        "url": "#"
      }
    ],
    "pages": [
      {
        "id": 1,
        "slug": "augue",
        "icon": "[BASE64_IMAGE]",
        "title": "[DE] Augue",
        "content": "### [DE] Aliquet \nPorttitor lacus luctus [accumsan](#) tortor posuere."
      },
      {
        "id": 2,
        "slug": "non-sodales",
        "icon": "[BASE64_IMAGE]",
        "title": "[DE] Non sodales",
        "content": "### [DE] Viverra \nAdipiscing at in tellus. Morbi tristique senectus et netus et malesuada fames ac."
      }
    ]
  }
}

```
