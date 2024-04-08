import { twMerge } from 'tailwind-merge';

import { SvgTypes, SvgProps } from './svg.types';
import {
  BurgerMenu,
  Globe,
  Handshake,
  Apple,
  CodeMentor,
  Telegram,
  Instagram,
  Tiktok,
  ArrowCorner,
  ArrowSide,
  transition
} from './imports';

const svg: Readonly<SvgTypes> = {
  burgerMenu: ({ className }) => (
    <BurgerMenu className={twMerge(transition, className)} />
  ),
  globe: ({ className }) => (
    <Globe className={twMerge(transition, className)} />
  ),
  handshake: ({ className }) => (
    <Handshake className={twMerge(transition, className)} />
  ),
  apple: ({ className }) => (
    <Apple className={twMerge(transition, className)} />
  ),
  codeMentor: ({ className }) => (
    <CodeMentor className={twMerge(transition, className)} />
  ),
  telegram: ({ className }) => (
    <Telegram className={twMerge(transition, className)} />
  ),
  instagram: ({ className }) => (
    <Instagram className={twMerge(transition, className)} />
  ),
  tiktok: ({ className }) => (
    <Tiktok className={twMerge(transition, className)} />
  ),
  arrowCorner: ({ className }) => (
    <ArrowCorner className={twMerge(transition, className)} />
  ),
  arrowSide: ({ className }) => (
    <ArrowSide className={twMerge(transition, className)} />
  ),
};

function Svg({ className, id }: Readonly<SvgProps>) {
  const SvgComponent = svg[id];

  return SvgComponent ? SvgComponent({ className }) : null;
}

export default Svg;
