import React, {Component} from 'react';

// import Form, { Input, Fieldset } from 'react-bootstrap-form'
import { FormGroup, ControlLabel, FormControl, Button, Checkbox } from 'react-bootstrap'

export const QuestionShortAnswer = (props) => {

  return (
    <div>
      <div className='question-text'>{props.question.question}</div>
      <FormControl
        name='question-short-answer'
        className='question-short-answer'
        type='text'
        placeholder='required'
      />
      <FormControl.Feedback />
    </div>
  )
}
