export type LanguageType = {
  [key: string]: {
    en: string
    zh: string
  }
}


export const commondLanguage: LanguageType = {
  loginByGoogle: {
    en: 'Continue with Google',
    zh: '谷歌登录'
  },
  submit: {
    en: 'Submit',
    zh: '提交'
  }
}
