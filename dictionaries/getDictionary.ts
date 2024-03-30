import 'server-only'
import type { Locale } from '../i18n-config'


type Dictionary = {
  [key: string]: { [key: string]: string };
};

type DictionaryImportFunction = () => Promise<Dictionary>;

const dictionaries: Record<string, DictionaryImportFunction> = {
  ja: () => import('./ja.json').then((module) => module.default),
  en: () => import('./en.json').then((module) => module.default),
};

export const getDictionary = async (locale: Locale) => {
  const dictionary = dictionaries[locale]?.() ?? dictionaries.ja!();
  return await dictionary;
};