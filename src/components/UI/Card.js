import React from 'react'
import CardCss from '../../styles/SignInSignUp.module.css'

export default function Card(props) {
  return (
    <div className={CardCss.card}>{props.children}</div>
  )
}
