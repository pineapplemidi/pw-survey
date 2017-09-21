import React, {Component} from 'react';
import { FormGroup, ControlLabel, FormControl, Button, Checkbox } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

// import Form, { Input, Fieldset } from 'react-bootstrap-form'
import { QuestionShortAnswer } from './questionShortAnswer.jsx'
import { QuestionCheckbox } from './questionCheckbox.jsx'

export const Page = (props) => {

  let url = String(props.metadata.page + 1)
  console.log(url)

  return (
    <div className='about-you'>
      <h4 className='question-text'>{props.metadata.page}/{props.metadata.num_pages}</h4>
      <h2 className='title'>{props.page.title}</h2>
      <FormGroup controlId='survey'>
        {props.page.questions.map(function (question, index) {
          if (question.type == 'short-text') {
            return (
              <QuestionShortAnswer key={index} question={question} />
            )
          } else if (question.type == 'checkbox') {
            return(
              <QuestionCheckbox key={index} question={question} />
            )
          }
        })}
      </FormGroup>
      <LinkContainer to={url}>
        <Button
          className='next-button'
          onClick={(event) => props.handleNext(props.metadata)}>NEXT</Button>
      </LinkContainer>
    </div>
  )
}
