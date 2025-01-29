export interface MetrikaProps {
  /**
   * ID of your Yandex.Metrika`s counter.
   * Locate at dashboard.
   */
  id: number;

  clickMap?: boolean;
  trackLinks?: boolean;
  accurateTrackBounce?: boolean;
}
