# React Content Tiles Carousel

This project contains a reusable React component to render a carousel of content tiles. It uses **Swiper** for the carousel functionality and **Emotion** for styling. Each content tile contains a heading, body, image, and call-to-action (CTA) button.

## Components

### ContentTile

The `ContentTile` component is a reusable React component designed to display a marketing tile with a heading, body, image, and call-to-action (CTA) button. It is styled using Emotion and allows for hover interactions, such as image zooming and button color changes.

### ContentTiles

The `ContentTiles` component is responsible for rendering a carousel of content tiles using **Swiper**.

#### Props:
- `tiles` (Array of `Tile`): An array of tile objects that will be rendered in the carousel.