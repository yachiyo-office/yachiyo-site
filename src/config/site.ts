/** サイト共通の SEO / OGP 設定 */
export const SITE_NAME = 'やちよ行政書士事務所';

/** title: 重要キーワード ＋ 縦棒 ＋ 事務所名 */
export const TITLE_SEPARATOR = '｜';

/** OGP 共通画像（1200×630）。public/images/ogp.jpg を配置してください */
export const DEFAULT_OGP_IMAGE = '/images/ogp.jpg';
export const OGP_IMAGE_WIDTH = 1200;
export const OGP_IMAGE_HEIGHT = 630;

export function pageTitle(keywords: string): string {
  return `${keywords}${TITLE_SEPARATOR}${SITE_NAME}`;
}
