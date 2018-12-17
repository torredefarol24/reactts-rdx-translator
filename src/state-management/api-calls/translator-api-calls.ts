import ApiKeys from '../../keys/apiKeys'

const sendTextToTranslate = (textInfo:any) => {
  let endpointURL = `https://translate.yandex.net/api/v1.5/tr.json/translate?key=${ApiKeys.YANDEX_TRANSLATOR_KEY}&lang=ru&text=${textInfo.text}&lang=${textInfo.langCode}`
  endpointURL = encodeURI(endpointURL)
  
  return fetch(endpointURL)
    .then( resp => resp.json())
    .then( data => {  
      let translatedResult = {
        sourceText : textInfo.text,
        translatedText : data.text[0]
      }
      return translatedResult
    })
      
}

const translatorApiCalls = {
  sendTextForTranslation : sendTextToTranslate
}

export default translatorApiCalls
