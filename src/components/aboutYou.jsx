import React, {Component} from 'react';

// import Form, { Input, Fieldset } from 'react-bootstrap-form'
import { FormGroup, ControlLabel, FormControl, Button, Checkbox } from 'react-bootstrap'

class AboutYou extends Component {

  render() {
    return (
      <div className='about-you'>
        <div>
          <h2 className='title'>ABOUT YOU</h2>
          <div className='question-text'>What is your name?</div>
          <FormGroup controlId='aboutYouForm'>
            <FormControl
              name='name'
              className='about-you-input'
              type='text'
              placeholder='required'
            />
            <div className='question-text'>What are you? (check all that apply)</div>
            <div className='checkboxes'>
              <Checkbox className='checkbox' label='Digital Performer'>Digital Performer</Checkbox>
              <Checkbox className='checkbox' label='Live Musician'>Live Musician</Checkbox>
              <Checkbox className='checkbox' label='DJ'>DJ</Checkbox>
              <Checkbox className='checkbox' label='Other'>Other</Checkbox>
            </div>
            <div className='question-text'>What is your Band, DJ, or Performer name?</div>
            <FormControl
              name='dj-band-name'
              className='about-you-input'
              type='text'
              placeholder='optional'
            />
            <div className='question-text'>What is your soundcloud URL? (ex: soundcloud.com/tipper)</div>
            <FormControl
              name='soundcloud'
              className='about-you-input'
              type='text'
              placeholder='optional'
            />
          <FormControl.Feedback />
        </FormGroup>
          <Button className='next-button'>next</Button>
        </div>
      </div>
    )
  }
}

export default AboutYou;
