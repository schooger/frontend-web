
const api = async (file: string, lang?: string | null) => {
  //const currentLanguage = localStorage.getItem('lang') || 'en'
  //const language = lang || currentLanguage
  console.log(`@lang/${lang}/${file}`)
  const r = await import(`@lang/${lang}/${file}`)

  return r.default

}

export default api