import React from 'react';
import { Link, Redirect } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username: '', password: '' };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.otherForm = this.otherForm.bind(this);
    this.redirectToIndex = this.redirectToIndex.bind(this);
  }

  handleChange(type) {
    return (e) => {
      this.setState({ [type]: e.target.value });
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.processForm(this.state);
  }

  otherForm() {
    const { formType } = this.props;
    if (formType === 'Sign Up') {
      return (
        <span>
          Please sign up or
          <Link to="/login">login</Link>
        </span>
      );
    }
    return (
      <span>
        Please login or
        <Link to="/signup">sign up</Link>
      </span>
    );
  }


  redirectToIndex() {
    if (this.props.currentUser != null) {
      return <Redirect to="/" />;
    }
    return null;
  }

  renderErrors() {
    return this.props.errors.map(error => <li>{error}</li>);
  }

  render() {
    return (
      <>
        <h2>{this.props.formType}</h2>
        <form onSubmit={this.handleSubmit}>
          {this.redirectToIndex()}
          {this.otherForm()}
          <label>
          Username:
            <input type="text" value={this.state.username} onChange={this.handleChange('username')} />
          </label>
          <label>
          Password:
            <input type="password" value={this.state.password} onChange={this.handleChange('password')} />
          </label>
          <input type="submit" value="Submit" />
          {this.renderErrors()}
        </form>
      </>
    );
  }
}

export default SessionForm;
