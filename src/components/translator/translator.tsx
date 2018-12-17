import React from 'react'
import TranslatorForm from './form'
import TranslationResults from './results'

const Translator:React.FunctionComponent = () =>{
  const TranslatorForm_Func = (
    <div className='block'>
      <h3 className='subtitle is-3'> Translator </h3>
      <TranslatorForm></TranslatorForm>
    </div>
  )
  const TranslatorResults = (
    <div className='block'>
      <h3 className='subtitle is-3'> Results</h3>
      <TranslationResults></TranslationResults>
    </div>    
  )
  const TranslatorMain = (
    <div className='block'>
      <h3 className='title is-3'> Yandex Translator API </h3>
      <div className='columns'>
        <div className='column is-half'>
          {TranslatorForm_Func}
        </div>
        <div className='column is-half'>
          {TranslatorResults}
        </div>
      </div>
    </div>
  )
  return TranslatorMain
}

export default Translator