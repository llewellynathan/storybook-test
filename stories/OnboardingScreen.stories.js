import { createOnboardingScreen } from './OnboardingScreen.js';

export default {
  title: 'Authentication/Onboarding',
  argTypes: {
    userName: {
      control: 'text',
      description: 'User name for personalization',
      defaultValue: ''
    },
    preselectedFeatures: {
      control: 'array',
      description: 'Pre-selected feature IDs',
      defaultValue: []
    },
    onSkip: {
      action: 'skip-clicked',
      description: 'Called when Skip is clicked'
    },
    onNext: {
      action: 'next-clicked',
      description: 'Called when Next is clicked with selected features'
    }
  },
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'The first step of the onboarding flow where users select which features they want to use in Cinch.'
      }
    }
  }
};

const Template = (args) => {
  const container = document.createElement('div');
  container.style.width = '100%';
  container.style.height = '100vh';
  container.style.margin = '0';
  container.style.padding = '0';
  
  const screen = createOnboardingScreen({
    ...args,
    onSkip: () => {
      args.onSkip();
      alert('Skipping onboarding...');
    },
    onNext: (selectedFeatures) => {
      args.onNext(selectedFeatures);
      alert(`Proceeding with ${selectedFeatures.length} selected features: ${selectedFeatures.join(', ')}`);
    }
  });
  
  container.appendChild(screen);
  
  // Initialize Material Design components after adding to DOM
  requestAnimationFrame(() => {
    if (typeof mdc !== 'undefined') {
      // Initialize buttons
      const buttons = container.querySelectorAll('.mdc-button');
      buttons.forEach(button => {
        try {
          new mdc.ripple.MDCRipple(button);
        } catch (e) {
          console.log('MDC Ripple initialization skipped in Storybook');
        }
      });
    }
  });
  
  return container;
};

export const Default = Template.bind({});
Default.args = {
  userName: '',
  preselectedFeatures: []
};
Default.parameters = {
  docs: {
    description: {
      story: 'Default onboarding screen with no personalization.'
    }
  }
};

export const PersonalizedWelcome = Template.bind({});
PersonalizedWelcome.args = {
  userName: 'Samantha',
  preselectedFeatures: []
};
PersonalizedWelcome.parameters = {
  docs: {
    description: {
      story: 'Onboarding screen with personalized welcome message.'
    }
  }
};

export const WithPreselection = Template.bind({});
WithPreselection.args = {
  userName: 'Alex',
  preselectedFeatures: ['email', 'surveys']
};
WithPreselection.parameters = {
  docs: {
    description: {
      story: 'Onboarding screen with some features pre-selected based on user profile or recommendations.'
    }
  }
};

export const AllFeaturesSelected = Template.bind({});
AllFeaturesSelected.args = {
  userName: 'Jordan',
  preselectedFeatures: ['reviews', 'email', 'sms', 'mail', 'surveys', 'landing', 'coupons', 'other']
};
AllFeaturesSelected.parameters = {
  docs: {
    description: {
      story: 'Onboarding screen with all features pre-selected.'
    }
  }
};

// Complete flow demonstration
const FlowTemplate = () => {
  const container = document.createElement('div');
  container.style.cssText = `
    width: 100%;
    min-height: 100vh;
    background: #F1F3F4;
    padding: 40px 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 40px;
  `;
  
  // Flow indicator
  const flowIndicator = document.createElement('div');
  flowIndicator.style.cssText = `
    display: flex;
    align-items: center;
    gap: 20px;
    padding: 20px;
    background: white;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  `;
  
  const steps = ['Sign Up', 'Create Password', 'Feature Selection', 'Complete'];
  steps.forEach((step, index) => {
    const stepElement = document.createElement('div');
    stepElement.style.cssText = `
      display: flex;
      align-items: center;
      gap: 8px;
    `;
    
    const circle = document.createElement('div');
    circle.style.cssText = `
      width: 32px;
      height: 32px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: bold;
      ${index === 2 ? 
        'background: #0994F2; color: white;' : 
        index < 2 ? 
        'background: #4CAF50; color: white;' : 
        'background: #E0E0E0; color: #666;'}
    `;
    circle.textContent = index < 2 ? '✓' : (index + 1).toString();
    
    const label = document.createElement('span');
    label.textContent = step;
    label.style.cssText = `
      font-size: 14px;
      color: ${index === 2 ? '#0994F2' : '#666'};
      font-weight: ${index === 2 ? 'bold' : 'normal'};
    `;
    
    stepElement.appendChild(circle);
    stepElement.appendChild(label);
    flowIndicator.appendChild(stepElement);
    
    if (index < steps.length - 1) {
      const connector = document.createElement('div');
      connector.style.cssText = `
        height: 2px;
        width: 40px;
        background: ${index < 2 ? '#4CAF50' : '#E0E0E0'};
      `;
      flowIndicator.appendChild(connector);
    }
  });
  
  container.appendChild(flowIndicator);
  
  // Onboarding screen
  const screen = createOnboardingScreen({
    userName: 'Samantha',
    preselectedFeatures: [],
    onSkip: () => {
      alert('Skipping remaining onboarding steps...');
    },
    onNext: (selectedFeatures) => {
      alert(`Great! Moving to workspace setup with ${selectedFeatures.length} features selected.`);
    }
  });
  
  // Wrap in a container to control max-width
  const screenWrapper = document.createElement('div');
  screenWrapper.style.cssText = `
    width: 100%;
    max-width: 1000px;
  `;
  screenWrapper.appendChild(screen);
  
  container.appendChild(screenWrapper);
  
  return container;
};

export const CompleteFlow = FlowTemplate.bind({});
CompleteFlow.parameters = {
  docs: {
    description: {
      story: 'Shows the onboarding feature selection as part of the complete signup flow with progress indicator.'
    }
  }
};