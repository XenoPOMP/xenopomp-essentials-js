import type { FC } from 'react';

/**
 * Adds react-scan to your Next.js application.
 * @constructor
 * @since 0.0.1
 *
 * @example
 * import { ReactScan } from 'xenopomp-essentials/next';
 *
 * export default function RootLayout({
 *   children,
 * }: {
 *   children: React.ReactNode
 * }) {
 *   return (
 *     <html lang="en">
 *       <head>
 *         <ReactScan />
 *       </head>
 *       <body>{children}</body>
 *      </html>
 *   )
 *}
 */
export const ReactScan: FC<unknown> = () => {
  return (
    <script
      src='https://unpkg.com/react-scan/dist/auto.global.js'
      async
    />
  );
};
