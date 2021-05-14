## Index

- [Intro](#intro)
- [Demo](#demo)
- [Data structure](#data-structure)

## Intro

Layout Renderer receives a standard JSON file and a number of Markdown files and renders a themeable multilingual responsive web application.

It uses React, Redux, SASS and no CSS framework to demonstrate my front-end skills.

## Demo

- [Live demo](http://react-redux-layout-renderer.iding.ir)
- [iding.ir](http://iding.ir)

## Data structure

Input data is in the form of JSON.

It supports html tags and markdown for page content.

#### config.json:

```
{
  "en": {
    "language": "English",
    "logo": "data/en/logo.svg",
    "flash": "data/images/image-flash.svg",
    "splash": {
      "title": "[EN] Lorem Ipsum",
      "description": "[EN] Lorem ipsum dolor sit amet"
    },
    "notFound": {
      "title": "[EN] 404",
      "description": "[EN] Lorem ipsum dolor sit amet"
    },
    "footer": "[EN] Nam ornare tortor enim",
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
        "content": "data/en/pages/augue.md",
        "background": "data/images/image-background.svg"
      },
      {
        "id": 2,
        "slug": "en-sodales",
        "icon": "data/en/icons/non-sodales.svg",
        "title": "[EN] Non sodales",
        "content": "data/en/pages/non-sodales.md",
        "background": "data/images/image-background.svg"
      },
      {
        "id": 3,
        "slug": "en-volutpat",
        "icon": "data/en/icons/volutpat.svg",
        "title": "[EN] Volutpat",
        "content": "data/en/pages/volutpat.md",
        "background": "data/images/image-background.svg"
      },
      {
        "id": 4,
        "slug": "en-diam-quis",
        "icon": "data/en/icons/diam-quis.svg",
        "title": "[EN] Diam quis",
        "content": "data/en/pages/diam-quis.md",
        "background": "data/images/image-background.svg"
      },
      {
        "id": 5,
        "slug": "en-aliquam",
        "icon": "data/en/icons/aliquam.svg",
        "title": "[EN] Aliquam",
        "content": "data/en/pages/aliquam.md",
        "background": "data/images/image-background.svg"
      },
      {
        "id": 6,
        "slug": "en-tincidunt",
        "icon": "data/en/icons/tincidunt.svg",
        "title": "[EN] Tincidunt",
        "content": "data/en/pages/tincidunt.md",
        "background": "data/images/image-background.svg"
      },
      {
        "id": 7,
        "slug": "en-nullam",
        "icon": "data/en/icons/nullam.svg",
        "title": "[EN] Nullam",
        "content": "data/en/pages/nullam.md",
        "background": "data/images/image-background.svg"
      }
    ]
  },
  "de": {
    "language": "Deutsch",
    "logo": "data/de/logo.svg",
    "flash": "data/images/image-flash.svg",
    "splash": {
      "title": "[DE] Lorem Ipsum",
      "description": "[DE] Lorem ipsum dolor sit amet"
    },
    "notFound": {
      "title": "[DE] 404",
      "description": "[DE] Lorem ipsum dolor sit amet"
    },
    "footer": "[DE] Nam ornare tortor enim",
    "menuItems": [
      {
        "title": "[DE] Curabitur",
        "url": "#"
      },
      {
        "title": "[DE] Habitant",
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
        "slug": "de-augue",
        "icon": "data/de/icons/augue.svg",
        "title": "[DE] Augue",
        "content": "data/de/pages/augue.md",
        "background": "data/images/image-background.svg"
      },
      {
        "id": 2,
        "slug": "de-non-sodales",
        "icon": "data/de/icons/non-sodales.svg",
        "title": "[DE] Non sodales",
        "content": "data/de/pages/non-sodales.md",
        "background": "data/images/image-background.svg"
      },
      {
        "id": 3,
        "slug": "de-volutpat",
        "icon": "data/de/icons/volutpat.svg",
        "title": "[DE] Volutpat",
        "content": "data/de/pages/volutpat.md",
        "background": "data/images/image-background.svg"
      },
      {
        "id": 4,
        "slug": "de-diam-quis",
        "icon": "data/de/icons/diam-quis.svg",
        "title": "[DE] Diam quis",
        "content": "data/de/pages/diam-quis.md",
        "background": "data/images/image-background.svg"
      },
      {
        "id": 5,
        "slug": "de-aliquam",
        "icon": "data/de/icons/aliquam.svg",
        "title": "[DE] Aliquam",
        "content": "data/de/pages/aliquam.md",
        "background": "data/images/image-background.svg"
      },
      {
        "id": 6,
        "slug": "de-tincidunt",
        "icon": "data/de/icons/tincidunt.svg",
        "title": "[DE] Tincidunt",
        "content": "data/de/pages/tincidunt.md",
        "background": "data/images/image-background.svg"
      },
      {
        "id": 7,
        "slug": "de-nullam",
        "icon": "data/de/icons/nullam.svg",
        "title": "[DE] Nullam",
        "content": "data/de/pages/nullam.md",
        "background": "data/images/image-background.svg"
      }
    ]
  }
}


```
