/**
 * Type that represents data-{attr} keys.
 */
type Attribute = `data-${string}`;

/**
 * Matches any proper data-{attr} keys.
 */
type DataAttributeShape = Record<Attribute, any>;

/**
 * Represents React`s data-{attr} properties for components.
 *
 * @example
 * type AdditionalAttributes = DataAttributes<{ 'data-disabled': boolean }>;
 *
 * const attrs: AdditionalAttributes = {
 *   'data-disabled': false, // this attr is required
 * };
 */
export type DataAttributes<Shape extends DataAttributeShape> = Shape;
