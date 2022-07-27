import React, { Component } from 'react';

class postData extends Component {

    constructor() {
        super();
        this.state = { user: {} };
        this.onSubmit = this.handleSubmit.bind(this);
      }

      handleSubmit(e) {
        e.preventDefault();
        var self = this;
        // On submit of the form, send a POST request with the data to the server.
        fetch('ecommv2.c9cmbzningap.us-east-1.rds.amazonaws.com', 
        { method: 'POST',
        headers: new Headers({
            "Content-Type":"application/json"
        }),
        body: JSON.stringify({ 
            FirstName: self.refs.FirstName,
             LastName: self.refs.LastName }) 
    })
    .then(function(response) {
        return response.json()
      }).then(function(body) {
        console.log(body);
      });
  }

      render() {
        return (
          <form onSubmit={this.onSubmit}>
            <input type="text" placeholder="First Name" ref="FirstName"/>
            <input type="text" placeholder="Last Name" ref="LastName"/>
            <input type="submit" />
          </form>
        );
      }

    }
export default postData;