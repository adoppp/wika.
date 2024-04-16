import { BurgerMenu, Button, LanguageSwitcher, NavBar } from '@/app/components';
import { transition } from '@/app/lib/constants';
import { useTranslation } from '@/app/i18n';
import { PageProps } from '@/app/lib/types';
import { DisableScroll, Svg, cn, endpoints } from '@/app/lib/utils';
import Link from 'next/link';

export default async function Page({
  params: { lng },
  searchParams,
}: Readonly<PageProps>) {
  const { t } = await useTranslation(lng, 'header');
  const { t: navT } = await useTranslation(lng, 'navBar');
  const showMobMenu: boolean = searchParams?.mobMenu ? true : false;

  return <BurgerMenu showMobMenu={showMobMenu} t={t} navT={navT} lng={lng} />;
}
