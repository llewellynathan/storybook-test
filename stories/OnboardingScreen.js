import { createSelectableCardGroup } from './SelectableCard.js';
import { createMaterialButton } from './MaterialButton.js';

export const createOnboardingScreen = ({
  userName = '',
  onSkip = () => {},
  onNext = () => {},
  preselectedFeatures = []
}) => {
  const container = document.createElement('div');
  container.style.cssText = `
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #F1F3F4;
    padding: 20px;
  `;

  // Main card container
  const card = document.createElement('div');
  card.className = 'onboarding-card';
  card.style.cssText = `
    background: white;
    border-radius: 16px;
    padding: 32px 40px 40px;
    width: 928px;
    max-width: 100%;
    box-shadow: 0px 8px 10px -5px rgba(0, 0, 0, 0.2), 
                0px 16px 24px 2px rgba(0, 0, 0, 0.14), 
                0px 6px 30px 5px rgba(0, 0, 0, 0.12);
    display: flex;
    flex-direction: column;
    gap: 32px;
  `;

  // Header section
  const headerSection = document.createElement('div');
  headerSection.style.cssText = `
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 32px;
  `;

  // Logo
  const logoContainer = document.createElement('div');
  logoContainer.style.cssText = `
    display: flex;
    justify-content: center;
  `;
  
  const logo = document.createElement('img');
  logo.src = 'images/cinch-logo.svg';
  logo.alt = 'Cinch Logo';
  logo.style.cssText = `
    height: 30px;
    width: auto;
  `;
  logoContainer.appendChild(logo);

  // Title section
  const titleSection = document.createElement('div');
  titleSection.style.cssText = `
    text-align: center;
  `;

  const title = document.createElement('h1');
  title.textContent = userName 
    ? `Welcome, ${userName}! How can Cinch help you?`
    : 'Welcome! How can Cinch help you?';
  title.style.cssText = `
    font-size: 28px;
    font-weight: 800;
    line-height: 1.286;
    color: #010C14;
    margin-bottom: 4px;
    font-family: 'Roboto', 'NexaText', sans-serif;
  `;

  const subtitle = document.createElement('p');
  subtitle.textContent = 'Choose as many options as you'd like';
  subtitle.style.cssText = `
    font-size: 16px;
    line-height: 1.5;
    color: rgba(1, 12, 20, 0.7);
    letter-spacing: 0.15px;
    font-family: 'Roboto', 'NexaText', sans-serif;
  `;

  titleSection.appendChild(title);
  titleSection.appendChild(subtitle);
  
  headerSection.appendChild(logoContainer);
  headerSection.appendChild(titleSection);
  card.appendChild(headerSection);

  // Feature options
  const featureOptions = [
    { id: 'reviews', icon: 'rate_review', label: 'Track and respond to online reviews' },
    { id: 'email', icon: 'email', label: 'Send automated email campaigns' },
    { id: 'sms', icon: 'sms', label: 'Send automated SMS campaigns' },
    { id: 'mail', icon: 'markunread_mailbox', label: 'Send automated direct mail' },
    { id: 'surveys', icon: 'rule', label: 'Request feedback via Surveys' },
    { id: 'landing', icon: 'web', label: 'Build and test landing pages' },
    { id: 'coupons', icon: 'local_play', label: 'Create trackable coupons' },
    { id: 'other', icon: 'help_outline', label: 'Other' }
  ];

  // Mark preselected features
  const optionsWithSelection = featureOptions.map(option => ({
    ...option,
    selected: preselectedFeatures.includes(option.id)
  }));

  // Options container
  const optionsContainer = document.createElement('div');
  optionsContainer.style.cssText = `
    display: flex;
    justify-content: center;
    width: 100%;
  `;

  let selectedFeatures = [...preselectedFeatures];

  const optionsGrid = createSelectableCardGroup({
    options: optionsWithSelection,
    multiSelect: true,
    columns: 2,
    onChange: (selectedIds) => {
      selectedFeatures = selectedIds;
      console.log('Selected features:', selectedFeatures);
    }
  });

  optionsGrid.style.maxWidth = '704px';
  optionsGrid.style.width = '100%';
  
  optionsContainer.appendChild(optionsGrid);
  card.appendChild(optionsContainer);

  // Button section
  const buttonSection = document.createElement('div');
  buttonSection.style.cssText = `
    display: flex;
    justify-content: flex-end;
    gap: 8px;
    margin-top: 8px;
  `;

  // Skip button
  const skipButton = createMaterialButton({
    label: 'Skip',
    variant: 'text',
    onClick: () => {
      console.log('Skip clicked');
      onSkip();
    }
  });
  skipButton.style.cssText = `
    color: #455159;
    font-weight: 700;
    letter-spacing: 1.25px;
    text-transform: uppercase;
  `;

  // Next button
  const nextButton = createMaterialButton({
    label: 'Next',
    variant: 'raised',
    onClick: () => {
      console.log('Next clicked with features:', selectedFeatures);
      onNext(selectedFeatures);
    }
  });
  nextButton.style.cssText = `
    background: #0994F2;
    color: white;
    min-width: 100px;
    font-weight: 700;
    letter-spacing: 1.25px;
    text-transform: uppercase;
  `;

  buttonSection.appendChild(skipButton);
  buttonSection.appendChild(nextButton);
  card.appendChild(buttonSection);

  container.appendChild(card);
  return container;
};