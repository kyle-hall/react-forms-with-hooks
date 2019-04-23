import React from 'react'
import 'nes.css/css/nes.css'

export class Signup extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      passwordConfirm: ''
    }

    this.handleInputChange = this.handleInputChange.bind(this)
  }

  render() {
    const { firstName, lastName, email, password, confirmPassword } = this.state

    return (
      <form style={{ ...styles.form, ...styles.typ }}>
        <fieldset style={styles.fieldset}>
          <legend style={styles.legend}>Name</legend>
          <label for='firstName'>First Name</label>
          <input
            className='nes-input'
            type='text'
            value={firstName}
            name='firstName'
            id='firstName'
            onChange={this.handleInputChange}
            required
          />
          <label for='lastName'>Last Name</label>
          <input
            className='nes-input'
            type='text'
            value={lastName}
            name='lastName'
            id='lastName'
            onChange={this.handleInputChange}
            required
          />
        </fieldset>
        <fieldset style={styles.fieldset}>
          <legend style={styles.legend}>Contact</legend>
          <label for='emailInput'>Email Address</label>
          <input
            className='nes-input'
            type='email'
            value={email}
            name='email'
            id='emailInput'
            onChange={this.handleInputChange}
            required
          />
        </fieldset>
        <fieldset style={styles.fieldset}>
          <legend style={styles.legend}>Password</legend>
          <label for='passwordInput'>Password</label>
          <input
            className='nes-input'
            type='password'
            value={password}
            name='password'
            onChange={this.handleInputChange}
            id='passwordInput'
          />

          <label for='passwordConfirm'>Re-enter Password</label>
          <input
            className='nes-input'
            type='password'
            value={confirmPassword}
            name='passwordConfirm'
            onChange={this.handleInputChange}
            id='passwordConfirm'
          />
        </fieldset>
        {/* I want the button to actually submit to something - maybe I could set up a lambda to do something with it? */}
        <button className='nes-btn' style={styles.typ} type='submit'>
          Sign Up
        </button>
      </form>
    )
  }

  handleInputChange(event) {
    const {
      target: { name, value }
    } = event
    this.setState({ [name]: value })
  }
}

const styles = {
  form: {
    maxWidth: '50em',
    margin: '0 auto',
    marginTop: 100,
    padding: 50,

    backgroundColor: '#A4E4FC'
  },
  legend: {
    backgroundColor: '#111',
    color: '#fff',
    padding: '3px 6px',
    borderRadius: 3
  },
  fieldset: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: 16,
    border: 'none'
  },
  submit: {
    padding: '16px 32px',
    backgroundColor: 'transparent',
    borderColor: 'red',
    borderWidth: 2,
    borderStyle: 'solid',
    borderRadius: 8
  },
  typ: {
    fontFamily: 'Press Start 2P, sans-serif'
  }
}
