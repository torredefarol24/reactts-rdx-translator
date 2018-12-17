import React from 'react'
import {connect} from 'react-redux'
import translatorActions from '../../state-management/actions/translator-actions'

export interface Props {
  langs : any,
  translateText : any
}

interface State {
  text:string,
  translateToLang : string,
  translateToLangCode : string,
  codeMatchFound : boolean,
  noTargetLangSelected : boolean,
  langs : any,
}

const mapStateToProps = (state:any) => {
  let mappedProps = {
    langs : state.translatorReducer.langs
  }
  return mappedProps
}

const mapDispatchToProps = (dispatch:any) => {
  let mappedProps = {
    translateText : (textInfo:any) => {
      dispatch(translatorActions.translateText(textInfo))
      dispatch(translatorActions.translationHasBegun())
    }
  }
  return mappedProps
}

class ConnectedTranslatorForm extends React.Component <Props, State>{
  constructor(props: Props){
    super(props)
    this.state = {
      text: "",
      translateToLang : "",
      translateToLangCode : "",
      langs : this.props.langs,
      noTargetLangSelected : true,
      codeMatchFound : false
    }
    this.handleFormSubmit = this.handleFormSubmit.bind(this)
    this.handleTranslateLangChange = this.handleTranslateLangChange.bind(this)
    this.handleTextChange = this.handleTextChange.bind(this)
  }

  handleFormSubmit(event:any){
    event.preventDefault()
    let textToTranslate = {
      text : this.state.text,
      langCode : this.state.translateToLangCode
    }
    this.props.translateText(textToTranslate)
    this.setState({
      text: ""
    })
  }

  handleTranslateLangChange(event:any){
    let langName = event.target.value;
    if (langName.length > 0) {
      this.setState({ 
        noTargetLangSelected : false,
        translateToLang : langName,
      })
      this.state.langs.filter( (lang:any) => {
        if (lang.name == langName){
          this.setState({
            translateToLangCode : lang.code,
            codeMatchFound : true
          })           
        } 
      })
    } else {
      this.setState({
        noTargetLangSelected : true,
        codeMatchFound : false
      })
    }    
  }

  handleTextChange(event:any){
    this.setState({
      text : event.target.value
    })
  }


  render(){
    const targetLangDiv = (
      <div className='column is-half'>
        <div className="field">
          <label className="label">Translate To (Target Lang)</label>
          <div className="control">
            <input className="input" type="text" placeholder="Language Name" defaultValue={this.state.translateToLang} onChange={this.handleTranslateLangChange} id="translateToLang" name="translateToLang"/>
          </div>
        </div>
      </div>
    )

    const targetLangMatchDiv = (
      <div className='column is-half'>
        {this.state.noTargetLangSelected && <p> Type your Target Language </p>}
        
        {!this.state.noTargetLangSelected && !this.state.codeMatchFound && <p> No Match Found for {this.state.translateToLang} </p>}

        {this.state.codeMatchFound && 
          <div className='block'>
            <p> Target Lang selected: </p>
            <p className='title'> <strong> {this.state.translateToLangCode} </strong> </p> 
          </div>  
        }
      </div>
    )

    const targetTextDiv = (
      <div className='field'>
        <label className='label'>Text To Translate</label>
        <textarea className='textarea' placeholder='Type Something in any language' onChange ={this.handleTextChange} defaultValue={this.state.text}>
        </textarea> 
      </div>
    )

    const submitButton = (
      <div>
        {this.state.codeMatchFound && <button type='submit' className='button is-success'>Submit</button>}
        {!this.state.codeMatchFound && <button className='button is-default' disabled>Submit</button>}
      </div>
    )
    
    const Form = (
      <form onSubmit={this.handleFormSubmit}>
        <div className='columns'>
          {targetLangDiv}
          {targetLangMatchDiv}
        </div>
        {targetTextDiv}
        {submitButton}
      </form>
    )

    return Form
  }
}

const TranslatorForm = connect(mapStateToProps, mapDispatchToProps)(ConnectedTranslatorForm)
export default TranslatorForm