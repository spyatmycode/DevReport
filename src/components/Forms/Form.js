import React from 'react'
import FormCss from '../../styles/SignInSignUp.module.css'
import Card from '../UI/Card'

function Form(props) {
  return (
    <div className={FormCss.forms}>
        <Card>
            {props.children}
        </Card>
    </div>
  )
}

export default Form