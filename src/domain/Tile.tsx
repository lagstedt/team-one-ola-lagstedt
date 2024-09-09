import CTA from './CTA';

/**
 * Tile interface represents the data structure for each content tile.
 *
 * @typedef {Object} Tile
 * @property {string} heading - The heading text of the tile.
 * @property {string} body - The body text of the tile.
 * @property {string} image - The image URL for the tile.
 * @property {CTA} cta - The call-to-action button information (label and link).
 */

interface Tile {
    heading: string;
    body: string;
    image: string;
    cta: CTA;
}

export default Tile;