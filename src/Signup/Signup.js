import React, { useState } from 'react'
import 'nes.css/css/nes.css'

export const Signup = () => {
  const [state, setState] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    passwordConfirm: ''
  })

  const { firstName, lastName, email, password, passwordConfirm } = state

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
          required
          onChange={handleInputChange(setState)}
        />
        <label for='lastName'>Last Name</label>
        <input
          className='nes-input'
          type='text'
          value={lastName}
          name='lastName'
          onChange={handleInputChange(setState)}
          id='lastName'
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
          onChange={handleInputChange(setState)}
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
          id='passwordInput'
          onChange={handleInputChange(setState)}
        />
        <label for='passwordConfirm'>Re-enter Password</label>
        <input
          className='nes-input'
          type='password'
          value={passwordConfirm}
          name='passwordConfirm'
          id='passwordConfirm'
          onChange={handleInputChange(setState)}
        />
      </fieldset>
      <button className='nes-btn' style={styles.type} type='submit'>
        Sign Up
      </button>
    </form>
  )
}

const handleInputChange = setState => event => {
  const {
    target: { name, value }
  } = event

  setState({ [name]: value })
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
    backgroundColor: '#000',
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
  type: {
    fontFamily: 'Press Start 2P, sans-serif'
  }
}
