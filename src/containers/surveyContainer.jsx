import React, {Component} from 'react';

import AboutYou from '../components/aboutYou.jsx'

export default class SurveyContainer extends Component {
  constructor() {
    super()
    this.state = {
      metadata: {
        page: 1,
        num_pages: 4
      },
      pages: [{
        title: "about you",
        questions: [
          {
            type: "short-text",
            question: "What is your name",
            answer: ""
          },
          {
            type: "short-text",
            question: "Where are you from",
            answer: ""
          }
        ]
      },
      {
        title: "technology",
        questions: [
          {
            type: "short-text-multi",
            question: "What software do you use to produce?",
            answer: []
          },
          {
            type: "short-text-multi",
            question: "What software do you use live",
            answer: []
          }
        ]}
      ]
    }
  }

  render() {
    return (
      <div>
        <AboutYou />
      </div>
    )
  }
}
