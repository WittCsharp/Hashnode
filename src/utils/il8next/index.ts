/**
 * 多语言控制模块
 */

import { type LanguageType, commondLanguage } from './local/command'

let localLanguage: LanguageType

export function initLocal(options: {
  local?: 'en' | 'zh';
  language?: LanguageType
}) {
  localLanguage = {
    ...commondLanguage,
    ...(options.language || {})
  }
}

export function showText(key: string, options?: {
  local?: 'en' | 'zh';
  template?: LanguageType
}): string {
  const local = options?.local || 'zh'
  const languages = {
    ...commondLanguage,
    ...(localLanguage || {}),
    ...(options?.template || {})
  }
  return languages[key]?.[local] || key
}