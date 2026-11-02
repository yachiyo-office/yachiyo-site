/** 基本相談時間（表示用） */
export const CONSULTATION_BASE_HOURS =
  '平日 18:30〜21:00　土日 9:00〜18:00';

/** schema.org openingHours（基本相談時間と一致・平日日中電話は拡大しない） */
export const CONSULTATION_OPENING_HOURS_SCHEMA = [
  'Mo-Fr 18:30-21:00',
  'Sa-Su 09:00-18:00',
] as const;

export const CONSULTATION_PHONE_RECEPTION =
  '平日の日中も受付。出られない場合は折り返しご連絡いたします。';

export const CONSULTATION_DIGITAL_RECEPTION =
  '24時間受付。原則1営業日以内を目安に返信';

export const CONSULTATION_FORMATS = '電話／オンライン／対面';

export const CONSULTATION_FACE_TO_FACE =
  'お客様の事務所・ご自宅・お近くのカフェ等へ伺います（事前予約制）';

export const CONSULTATION_OFFICE_VISIT =
  'ご希望の場合は事前予約にて対応いたします。';

export const CONSULTATION_FLEXIBLE_SCHEDULE =
  'ご相談日時は、基本相談時間以外も可能な範囲で柔軟に調整いたします。';

export const CONSULTATION_APPOINTMENT_NOTE =
  'オンラインでのご相談および訪問でのご相談（対面）も事前予約制です。お電話でのお問い合わせに予約は必要ありません。';
