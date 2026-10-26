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

/** 事務所所在地（表示・地図・構造化データで共通利用） */
export const OFFICE_ADDRESS = {
  full: '大阪府阪南市自然田753-14',
  region: '大阪府',
  locality: '阪南市',
  streetAddress: '自然田753-14',
} as const;

/** Googleマップ（検索・別タブで開く用） */
export const OFFICE_GOOGLE_MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(OFFICE_ADDRESS.full)}`;

/** Googleマップ（iframe 埋め込み用・APIキー不要） */
export const OFFICE_GOOGLE_MAPS_EMBED_URL = `https://maps.google.com/maps?q=${encodeURIComponent(OFFICE_ADDRESS.full)}&hl=ja&z=16&output=embed`;

/** 所属行政書士会（泉州支部） */
export const GYOSEISHI_BAR_ASSOCIATION = '大阪府行政書士会 泉州支部';

/** 行政書士登録番号（数字部分） */
export const GYOSEISHI_REGISTRATION_NUMBER = '26263916';

/** 表示用：大阪府行政書士会 泉州支部 第26263916号 */
export const GYOSEISHI_REGISTRATION_LABEL = `${GYOSEISHI_BAR_ASSOCIATION} 第${GYOSEISHI_REGISTRATION_NUMBER}号`;

/** 書類フッター等：登録番号：第26263916号 */
export const GYOSEISHI_REGISTRATION_SHORT = `第${GYOSEISHI_REGISTRATION_NUMBER}号`;
