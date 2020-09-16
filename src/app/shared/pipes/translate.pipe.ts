import { Pipe, PipeTransform, Injectable } from '@angular/core';
import { locale as appLocale } from '~/i18n';
import { environment } from '@environments/environment';

Injectable({
  providedIn: 'root',
})
@Pipe({
  name: 't',
})
export class TranslatePipe implements PipeTransform {

  transform(key: string, params?: object): string {
    if (params) { return t(key, params); }
    return t(key);
  }

}

export const t = (key: string, params?: object) => {
  const l = environment.locale ? environment.locale : 'en'
  const currentLocale = appLocale[l] ? appLocale[l] : {};

  let translatedText = currentLocale[key] ? currentLocale[key] : `[MISSING_TRANSLATION].${key}`;

  return bindParams(translatedText, params);
}

const bindParams = (translatedText, params?: object) => {

  if (params && Object.keys(params).length > 0) {
    Object.keys(params).forEach(field => {
      translatedText = translatedText.replace(RegExp(`{${field}}`, 'gi'), params[field])
    })
    return translatedText;
  }

  return translatedText;
}