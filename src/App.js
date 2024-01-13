import React, { useState } from 'react';
import './style.css'; // Import your CSS file

const MyForm = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    mobileNumber: '',
    age: '',
    gender: '',
    country: '',
    subscribe: false,
    termsAgreed: false,
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    // For checkboxes and radio buttons, handle the checked state directly
    const fieldValue = type === 'checkbox' ? checked : value;

    setFormData({
      ...formData,
      [name]: fieldValue,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform validation
    const validationErrors = {};
    if (!formData.username.trim()) {
      validationErrors.username = 'Username is required';
    }
    if (!formData.email.trim()) {
      validationErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      validationErrors.email = 'Invalid email address';
    }
    if (!formData.password.trim()) {
      validationErrors.password = 'Password is required';
    }
    if (!formData.mobileNumber.trim()) {
      validationErrors.mobileNumber = 'Mobile number is required';
    } else if (!/^[0-9]{10}$/.test(formData.mobileNumber)) {
      validationErrors.mobileNumber = 'Invalid mobile number';
    }
    if (!formData.age.trim()) {
      validationErrors.age = 'Age is required';
    } else if (!/^\d+$/.test(formData.age)) {
      validationErrors.age = 'Invalid age';
    }
    if (!formData.gender.trim()) {
      validationErrors.gender = 'Gender is required';
    }
    if (!formData.country.trim()) {
      validationErrors.country = 'Country is required';
    }
    if (!formData.termsAgreed) {
      validationErrors.termsAgreed = 'Please agree to the terms';
    }

    // Update errors state
    setErrors(validationErrors);

    // If no errors, submit the form or perform further actions
    if (Object.keys(validationErrors).length === 0) {
      // Submit the form or other actions
      console.log('Form submitted:', formData);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Username:
        <input
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
        />
        {errors.username && <span>{errors.username}</span>}
      </label>

      <label>
        Email:
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        {errors.email && <span>{errors.email}</span>}
      </label>

      <label>
        Password:
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
        {errors.password && <span>{errors.password}</span>}
      </label>

      <label>
        Mobile Number:
        <input
          type="text"
          name="mobileNumber"
          value={formData.mobileNumber}
          onChange={handleChange}
        />
        {errors.mobileNumber && <span>{errors.mobileNumber}</span>}
      </label>

      <label>
        Age:
        <input
          type="text"
          name="age"
          value={formData.age}
          onChange={handleChange}
        />
        {errors.age && <span>{errors.age}</span>}
      </label>

      <label>
        Gender:
        <div>
          <label>
            <input
              type="radio"
              name="gender"
              value="male"
              checked={formData.gender === 'male'}
              onChange={handleChange}
            />
            Male
          </label>
          <label>
            <input
              type="radio"
              name="gender"
              value="female"
              checked={formData.gender === 'female'}
              onChange={handleChange}
            />
            Female
          </label>
          <label>
            <input
              type="radio"
              name="gender"
              value="other"
              checked={formData.gender === 'other'}
              onChange={handleChange}
            />
            Other
          </label>
        </div>
        {errors.gender && <span>{errors.gender}</span>}
      </label>

      <label>
        Country:
        <select name="country" value={formData.country} onChange={handleChange}>
          <option value="">Select</option>
          <option value="usa">USA</option>
          <option value="canada">Canada</option>
          {/* Add more countries as needed */}
        </select>
        {errors.country && <span>{errors.country}</span>}
      </label>

      <label>
        Subscribe to newsletter:
        <input
          type="checkbox"
          name="subscribe"
          checked={formData.subscribe}
          onChange={handleChange}
        />
      </label>

      <label>
        Terms and Conditions:
        <input
          type="checkbox"
          name="termsAgreed"
          checked={formData.termsAgreed}
          onChange={handleChange}
        />
        {errors.termsAgreed && <span>{errors.termsAgreed}</span>}
      </label>

      <button type="submit">Submit</button>
    </form>
  );
};

export default MyForm;
