import React from 'react'
import 'nes.css/css/nes.css'

export const Signup = props => (
  <form style={{ ...styles.form, ...styles.typ }}>
    <fieldset style={styles.fieldset}>
      <legend style={styles.legend}>Name</legend>
      <label for='firstName'>First Name</label>
      <input className='nes-input' type='text' name='firstName' id='firstName' required />
      <label for='lastName'>Last Name</label>
      <input className='nes-input' type='text' name='lastName' id='lastName' required />
    </fieldset>
    <fieldset style={styles.fieldset}>
      <legend style={styles.legend}>Contact</legend>
      <label for='emailInput'>Email Address</label>
      <input className='nes-input' type='email' name='email' id='emailInput' required />
    </fieldset>
    <fieldset style={styles.fieldset}>
      <legend style={styles.legend}>Password</legend>
      <label for='passwordInput'>Password</label>
      <input className='nes-input' type='password' name='password1' id='passwordInput' />

      <label for='passwordConfirm'>Re-enter Password</label>
      <input className='nes-input' type='password' name='passwordConfirm' id='passwordConfirm' />
    </fieldset>
    <button className='nes-btn' style={styles.typ} type='submit'>
      Sign Up
    </button>
  </form>
)

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
  typ: {
    fontFamily: 'Press Start 2P, sans-serif'
  }
}
