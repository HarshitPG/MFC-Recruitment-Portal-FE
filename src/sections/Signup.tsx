import React, { useState } from 'react';
import Input from '../components/Input';
import './Signup.css';
interface SignupFormValues {
  name: string;
  registerNumber: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const Signup: React.FC = () => {
  const [formData, setFormData] = useState<SignupFormValues>({
    name: '',
    registerNumber: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const [formErrors, setFormErrors] = useState<Partial<SignupFormValues>>({});

  /*const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  */

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const errors: Partial<SignupFormValues> = {};
    
    if (!formData.name) {
      errors.name = 'Name is required';
    }
    if (!formData.registerNumber) {
      errors.registerNumber = 'Register number is required';
    }
    if (!formData.email) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Invalid email address';
    }
    if (!formData.password) {
      errors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      errors.password = 'Password must be at least 6 characters';
    }
    if (!formData.confirmPassword) {
      errors.confirmPassword = 'Confirm Password is required';
    } else if (formData.password !== formData.confirmPassword) {
      errors.confirmPassword = 'Passwords must match';
    }

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
    } else {
      // Form is valid - handle submission (e.g., send data to server)
      console.log(formData);
      // Reset form data
      setFormData({
        name: '',
        registerNumber: '',
        email: '',
        password: '',
        confirmPassword: ''
      });
      setFormErrors({});
    }
  };

  return (
    <form onSubmit={handleSubmit}>
    <div className='mainbox'>
      <div className='textforSignup'>
        <label htmlFor="name">Name</label>
        <Input label="name" type="text" placeholder='Name'/>
        {/* <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} /> */}
        {formErrors.name && <div className="error">{formErrors.name}</div>}
      </div>

        <div className='textforSignup'>
        <label htmlFor="registerNumber">Register Number</label>
        <Input label="registerNumber" type="text" placeholder='Register No.'/>
        {formErrors.registerNumber && <div className="error">{formErrors.registerNumber}</div>}
      </div>

        <div className='textforSignup'>
        <label htmlFor="email">Email</label>
        <Input label="email" type="text" placeholder='VIT Email ID'/>
        {formErrors.email && <div className="error">{formErrors.email}</div>}
      </div>

        <div className='textforSignup'>
        <label htmlFor="password">Password</label>
        <Input label="password" type="text" placeholder='Enter your password'/>
        {formErrors.password && <div className="error">{formErrors.password}</div>}
        </div>

        <div className='textforSignup'>
        <label htmlFor="confirmPassword">Confirm Password</label>
        <Input label="confirmPassword" type="text" placeholder='Confirm your password'/>
        {formErrors.confirmPassword && <div className="error">{formErrors.confirmPassword}</div>}
        </div>

      <button className='textforSignupbutton' type="submit">Sign Up</button>
      </div>
    </form>
  );
};






//export default function Signup(){
//    return <>Signup</>
//}

export default Signup;