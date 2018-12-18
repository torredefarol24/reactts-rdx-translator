import React from 'react'
import TranslatorForm from './translation-form'
import TranslationResultsBookmark from './translation-results-bookmark'

const Translator:React.FunctionComponent = () =>{
  const TranslatorForm_Func = (
    <div className='block'>
      <TranslatorForm></TranslatorForm>
    </div>
  )
  const TranslatorResults = (
    <div className='block'>
      <TranslationResultsBookmark></TranslationResultsBookmark>
    </div>    
  )
  const TranslatorMain = (
    <div className='block'>
      <div className='mt24 mobile-padding'>
        <h3 className='title is-3'> Translator </h3>
        <div className='columns'>
          <div className='column is-half'>
            {TranslatorForm_Func}
          </div>
          <div className='column is-half'>
            {TranslatorResults}
          </div>
        </div>
      </div>
    </div>
  )
  return TranslatorMain
}

export default Translator