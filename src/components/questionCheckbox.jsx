import React, {Component} from 'react'

// import Form, { Input, Fieldset } from 'react-bootstrap-form'
import { Checkbox } from 'react-bootstrap'

export const QuestionCheckbox = (props) => {

  return (
    <div>
      <div className='question-text'>{props.question.question}</div>
      <div className='checkboxes'>
        {props.question.answers.map(function (answer, index) {
          return (
            <Checkbox className='checkbox'
              key={answer}
              label='Other'>{answer}</Checkbox>
          )
        })}
      </div>
    </div>
  )
}
