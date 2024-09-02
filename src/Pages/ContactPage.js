// import React from 'react'
// import cos from './Contact.module.css';
// import NavBar from '../Components/NavBar';
// import Footer from '../Components/Footer';

// const ContactPage = () => {
//   return (
//     <div>
//     <NavBar/>
//     <div className={cos['container']}>
//       <div className={cos['flex-container']}>
//       <h1 style={{fontSize:'39px', color:'white',marginTop:'-10px'}}>𝙂𝙚𝙩 𝙃𝙚𝙡𝙥</h1>
//         <div className={cos['first-flex']}>  
//             <input for='fname' type='text' placeholder='your name..' className={cos['input-box']}/><br/>
//             <input for='lname' type='email'  placeholder='your email..' className={cos['input-box']}/><br/>
//             <input id={cos['subject']} type='text'  placeholder='subject..' className={cos['input-box']}/><br/>
//             <textarea  id={cos['message']}/><br/>
//         </div>
//         <button className={cos['Button']}>Send</button>
//       </div>

//       <div className={cos['google-map']}>
//         <iframe width="520" height="500" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=420&amp;height=600&amp;hl=en&amp;q=27%20Grafton%20Street,%20New%20York,%20United%20States+(Ziara)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.gps.ie/">gps vehicle tracker</a></iframe>
//       </div>

//     </div>
//     <Footer/>
//     </div>
//   )
// }

// export default ContactPage

import React, { useState } from 'react';
import { SnackbarProvider, useSnackbar } from 'notistack';
import cos from './Contact.module.css';
import NavBar from '../Components/NavBar';
import Footer from '../Components/Footer';

const ContactPageContent = () => {
  const { enqueueSnackbar } = useSnackbar();
  const [formData, setFormData] = useState({
    fname: '',
    lname: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate form data here
    const validationErrors = validateForm();
    if (validationErrors.length === 0) {
      // If form is valid, proceed with submission
      enqueueSnackbar('Form submitted successfully!', { variant: 'success' });
      // You can submit the form here if needed
      setFormData({
        fname: '',
        lname: '',
        email: '',
        subject: '',
        message: ''
      });
    } else {
      // If form is invalid, show error messages
      validationErrors.forEach(error => {
        enqueueSnackbar(error.message, { variant: 'error' });
      });
    }
  };

  const validateForm = () => {
    // Perform form validation here
    const { fname, lname, email, message } = formData;
    const emailRegex = /\S+@\S+\.\S+/;
    const errors = [];

    if (fname.trim() === '') {
      errors.push({ field: 'First Name', message: 'First Name is required' });
    }
    if (lname.trim() === '') {
      errors.push({ field: 'Last Name', message: 'Last Name is required' });
    }
    if (!emailRegex.test(email)) {
      errors.push({ field: 'Email', message: 'Please enter a valid email address' });
    }
    if (message.trim() === '') {
      errors.push({ field: 'Message', message: 'Message is required' });
    }

    return errors;
  };

  return (
    <div>
      <div className={cos['container']}>
        <div className={cos['flex-container']}>
          <h1 style={{ fontSize: '39px', color: 'white', marginTop: '-10px' }}>𝙂𝙚𝙩 𝙃𝙚𝙡𝙥</h1>
          <form onSubmit={handleSubmit}>
            <div className={cos['first-flex']}>
              <input name='fname' value={formData.fname} onChange={handleChange} type='text' placeholder='First name..' className={cos['input-box']}/><br/>
              <input name='lname' value={formData.lname} onChange={handleChange} type='text' placeholder='Last name..' className={cos['input-box']}/><br/>
              <input name='email' value={formData.email} onChange={handleChange} type='email' placeholder='Email..' className={cos['input-box']}/><br/>
              <textarea name='message' value={formData.message} onChange={handleChange} placeholder='Your Message..' /><br/>
            </div>
            <button type="submit" className={cos['Button']}>Send</button>
          </form>
        </div>

        <div className={cos['google-map']}>
          <iframe title="Google Map" width="520" height="500" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=420&amp;height=600&amp;hl=en&amp;q=27%20Grafton%20Street,%20New%20York,%20United%20States+(Ziara)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
        </div>
      </div>
    </div>
  );
}

const ContactPage = () => {
  return (
    <SnackbarProvider maxSnack={3}>
      <NavBar/>
      <ContactPageContent />
      <Footer/>
    </SnackbarProvider>
  );
}

export default ContactPage;
