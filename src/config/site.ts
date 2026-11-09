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

/** canonical・og:url 用（本番は末尾スラッシュ付きが正規URL） */
export function canonicalPathname(pathname: string): string {
  if (pathname === '/') return '/';
  return pathname.endsWith('/') ? pathname : `${pathname}/`;
}

export function canonicalPageUrl(pathname: string, site: string | URL): URL {
  return new URL(canonicalPathname(pathname), site);
}

/** 事務所所在地（表示・地図・構造化データで共通利用） */
export const OFFICE_ADDRESS = {
  full: '大阪府阪南市自然田753-14',
  region: '大阪府',
  locality: '阪南市',
  streetAddress: '自然田753-14',
} as const;

/** 事務所概要・対応エリアの表示（トップヒーローラベルと事務所概要で共通） */
export const OFFICE_SERVICE_AREA = '泉州を中心に、大阪府・和歌山県北部　ほか';

/** Googleマップ（検索・別タブで開く用） */
export const OFFICE_GOOGLE_MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(OFFICE_ADDRESS.full)}`;

/** Googleマップ（iframe 埋め込み用） */
export const OFFICE_GOOGLE_MAPS_EMBED_URL =
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d823.5778423252874!2d135.25596036964538!3d34.34255280563859!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6000b773b1f612bb%3A0xe635f10637694e86!2z44KE44Gh44KI6KGM5pS_5pu45aOr5LqL5YuZ5omA!5e0!3m2!1sja!2sjp!4v1793636186242!5m2!1sja!2sjp';

/** 所属行政書士会（泉州支部） */
export const GYOSEISHI_BAR_ASSOCIATION = '大阪府行政書士会 泉州支部';

/** 行政書士登録番号（数字部分） */
export const GYOSEISHI_REGISTRATION_NUMBER = '26263916';

/** 表示用：大阪府行政書士会 泉州支部 第26263916号 */
export const GYOSEISHI_REGISTRATION_LABEL = `${GYOSEISHI_BAR_ASSOCIATION} 第${GYOSEISHI_REGISTRATION_NUMBER}号`;

/** 書類フッター等：登録番号：第26263916号 */
export const GYOSEISHI_REGISTRATION_SHORT = `第${GYOSEISHI_REGISTRATION_NUMBER}号`;

/** トップページの業務開始お知らせ。早期に消す場合は false に */
export const SHOW_OPENING_ANNOUNCEMENT_ON_HOME = true;

/** この日（JST）以降は自動で非表示。YYYY-MM-DD */
export const OPENING_ANNOUNCEMENT_HIDE_FROM = '2026-12-01';

/** 行政書士登録完了・業務開始のお知らせ（2026-11-01） */
export const OPENING_ANNOUNCEMENT =
  '2026年11月1日より、行政書士登録が完了したことにより、正式に業務をお引き受けできるようになりました。';

/** 日本時間の今日（YYYY-MM-DD） */
export function todayJstIso(now: Date = new Date()): string {
  return new Intl.DateTimeFormat('en-CA', {
    timeZone: 'Asia/Tokyo',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  }).format(now);
}

/** トップの業務開始お知らせを表示するか */
export function shouldShowOpeningAnnouncementOnHome(now: Date = new Date()): boolean {
  if (!SHOW_OPENING_ANNOUNCEMENT_ON_HOME) return false;
  return todayJstIso(now) < OPENING_ANNOUNCEMENT_HIDE_FROM;
}
