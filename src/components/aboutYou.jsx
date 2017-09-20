import React, {Component} from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import Form, { Input, Fieldset } from 'react-bootstrap-form'

class AboutYou extends Component {

  render() {
    return (
      <div className='about-you'>
        <div>
          <h2 className='title'>ABOUT YOU</h2>
          <Form className='about-you-input'>
            <Input type="Text" name="name" label="Name"
              required='true' />,
            <Input type="Text" name="dj-band-name" label="DJ/Band Name"
              required='true' />,
            <Input type="Text" name="soundcloud" label="Soundcloud URL"
              required='true' />,

            <Fieldset label="">
              <button className="btn btn-primary" type="submit">Post</button>
            </Fieldset>
          </Form>
          <Button className='continue-button'>NEXT</Button>
        </div>
      </div>
    )
  }
}

export default AboutYou;
