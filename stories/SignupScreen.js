import { createMaterialTextField } from './MaterialTextField.js';
import { createMaterialButton } from './MaterialButton.js';

export const createSignupScreen = ({
  email = 'name@email.com',
  onSubmit = () => {},
  onSignIn = () => {},
  variant = 'createPassword'
}) => {
  const container = document.createElement('div');
  container.className = 'signup-screen';
  container.style.cssText = `
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #F1F3F4;
    position: relative;
    padding: 20px;
  `;

  // Background decoration
  const bgDecoration = document.createElement('div');
  bgDecoration.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: 0;
  `;
  
  // Add wave SVGs for background
  const wave2 = document.createElement('img');
  wave2.src = 'images/Wave 2.svg';
  wave2.alt = '';
  wave2.style.cssText = `
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: auto;
  `;
  
  const wave1 = document.createElement('img');
  wave1.src = 'images/Wave 1.svg';
  wave1.alt = '';
  wave1.style.cssText = `
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: auto;
  `;
  
  bgDecoration.appendChild(wave2);
  bgDecoration.appendChild(wave1);
  container.appendChild(bgDecoration);

  // Logo section
  const logoSection = document.createElement('div');
  logoSection.style.cssText = `
    position: absolute;
    top: 80px;
    z-index: 10;
  `;
  
  // Create Cinch logo image
  const logoImg = document.createElement('img');
  logoImg.src = 'images/cinch-logo.svg';
  logoImg.alt = 'Cinch Logo';
  logoImg.style.cssText = `
    height: 30px;
    width: auto;
  `;
  logoSection.appendChild(logoImg);
  
  container.appendChild(logoSection);

  // Main card
  const card = document.createElement('div');
  card.className = 'signup-card';
  card.style.cssText = `
    background: white;
    border-radius: 16px;
    padding: 32px 24px 40px;
    width: 444px;
    max-width: 100%;
    box-shadow: 0px 8px 10px -5px rgba(0, 0, 0, 0.2), 
                0px 16px 24px 2px rgba(0, 0, 0, 0.14), 
                0px 6px 30px 5px rgba(0, 0, 0, 0.12);
    position: relative;
    z-index: 10;
  `;

  // Header section
  const headerSection = document.createElement('div');
  headerSection.style.cssText = `
    text-align: center;
    margin-bottom: 32px;
  `;

  const title = document.createElement('h1');
  title.textContent = 'Get started with Cinch';
  title.style.cssText = `
    font-size: 28px;
    font-weight: 800;
    margin: 0 0 4px 0;
    color: #010C14;
    font-family: 'Roboto', 'NexaText', sans-serif;
    line-height: 1.286;
  `;

  const subtitle = document.createElement('p');
  subtitle.textContent = 'Automating your marketing is a cinch';
  subtitle.style.cssText = `
    font-size: 16px;
    color: rgba(1, 12, 20, 0.7);
    margin: 0;
    font-family: 'Roboto', 'NexaText', sans-serif;
    line-height: 1.5;
    letter-spacing: 0.15px;
  `;

  headerSection.appendChild(title);
  headerSection.appendChild(subtitle);
  card.appendChild(headerSection);

  // Form section
  const formSection = document.createElement('div');
  formSection.style.cssText = `
    display: flex;
    flex-direction: column;
    gap: 24px;
  `;

  // Description text
  const description = document.createElement('p');
  description.textContent = variant === 'createPassword' 
    ? 'Create a password to secure your account.'
    : 'Enter your email to get started.';
  description.style.cssText = `
    font-size: 16px;
    color: #010C14;
    text-align: center;
    margin: 0 0 12px 0;
    font-family: 'Roboto', sans-serif;
  `;
  formSection.appendChild(description);

  // Form fields container
  const fieldsContainer = document.createElement('div');
  fieldsContainer.style.cssText = `
    display: flex;
    flex-direction: column;
    gap: 20px;
  `;

  // Email field
  const emailField = createMaterialTextField({
    label: 'Email',
    value: email,
    type: 'email',
    variant: 'outlined',
    disabled: variant === 'createPassword',
    required: true
  });
  emailField.style.width = '100%';
  fieldsContainer.appendChild(emailField);

  // Password field (only for create password variant)
  if (variant === 'createPassword') {
    const passwordField = createMaterialTextField({
      label: 'Password',
      type: 'password',
      variant: 'outlined',
      required: true,
      placeholder: ''
    });
    passwordField.style.width = '100%';
    fieldsContainer.appendChild(passwordField);
  }

  formSection.appendChild(fieldsContainer);

  // Button section
  const buttonSection = document.createElement('div');
  buttonSection.style.cssText = `
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
    margin-top: 36px;
  `;

  // Get Started button
  const submitButton = createMaterialButton({
    label: 'Get Started',
    variant: 'raised',
    onClick: onSubmit
  });
  submitButton.style.cssText = `
    width: 100%;
    background-color: #0994F2;
    color: white;
    height: 40px;
    font-size: 16px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 1.25px;
    border-radius: 8px;
  `;
  buttonSection.appendChild(submitButton);

  // Sign in link
  const signInLink = document.createElement('button');
  signInLink.textContent = 'Already have an account? Sign in';
  signInLink.style.cssText = `
    background: none;
    border: none;
    color: #010C14;
    font-size: 16px;
    cursor: pointer;
    padding: 8px;
    font-family: 'Roboto', sans-serif;
    text-decoration: none;
    transition: opacity 0.2s;
  `;
  signInLink.addEventListener('mouseover', () => {
    signInLink.style.opacity = '0.7';
  });
  signInLink.addEventListener('mouseout', () => {
    signInLink.style.opacity = '1';
  });
  signInLink.addEventListener('click', onSignIn);
  buttonSection.appendChild(signInLink);

  formSection.appendChild(buttonSection);
  card.appendChild(formSection);
  container.appendChild(card);

  return container;
};