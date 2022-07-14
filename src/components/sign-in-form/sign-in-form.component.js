import { useState } from "react";
import FormInput from '../form-input/form-input.component';
import Button from "../button/button.component";
import './sign-in-form.styles.scss';

import { 
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  signInAuthUserWithEmailAndPassword,
 } from "../../utils/firebase/firebase.utils";

const defaultFormFields = {
  email: '',
  password: '',
}

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields)
  const { email, password } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields)
  };

  const signInWithGoogle = async () => {
    const { user } = await signInWithGooglePopup();
    await createUserDocumentFromAuth(user);
  }

  const handleSubtmit = async (event) => {
    event.preventDefault();

    try {
      const response = await signInAuthUserWithEmailAndPassword(email, password)
      console.log(response)
      resetFormFields();
    } catch(error) {}
  }

  const handleChange = (event) => {
    const { name, value } = event.target

    setFormFields({...formFields, [name]: value})
  }

  return (
    <div className="sign-up-container">
      <h2>Already have an account?</h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={handleSubtmit}>
        <FormInput
          label='Email'
          type='email' 
          required
          onChange={handleChange} 
          name="email" 
          value={email} 
        />
        <FormInput 
          label='Password'
          type='password' 
          required 
          onChange={handleChange} 
          name="password" 
          value={password} 
        />

        <div className="buttons-container">
          <Button type="submit">Sign In</Button>
          <Button onClick={signInWithGoogle} buttonType='google' >Google sign in</Button>
        </div>
      </form>
    </div>
  )
}

export default SignInForm;