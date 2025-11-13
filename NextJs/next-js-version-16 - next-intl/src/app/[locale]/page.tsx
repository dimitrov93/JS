import { useTranslations } from 'next-intl';
import { setRequestLocale } from 'next-intl/server';
import { use } from 'react';

export default function IndexPage({ params }: any) {
  const p: { locale: string } = use(params);
  const locale = p.locale;

  // Enable static rendering
  setRequestLocale(locale);
  // Once the request locale is set, you
  // can call hooks from `next-intl`
  const t = useTranslations('HomePage');

  return <h1>{t('title')}</h1>;
}
