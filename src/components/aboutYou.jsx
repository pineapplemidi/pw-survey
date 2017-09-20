import React, {Component} from 'react';

// import Form, { Input, Fieldset } from 'react-bootstrap-form'
import { FormGroup, ControlLabel, FormControl, Button } from 'react-bootstrap'

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
	    <div className='question-text'>What city are you from?</div>
	    <FormControl
              name='city'
              className='about-you-input'
              type='text'
              placeholder='required'
            />
	    <div className='question-text'>What country are you from?</div>
	    <FormControl
              name='country'
              className='about-you-input'
              type='text'
              placeholder='required'
            />
            <div className='question-text'>What is your Band, Performer, or DJ name?</div>
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
