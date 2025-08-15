import { createSignupScreen } from './SignupScreen.js';

export default {
  title: 'Authentication/Signup Screen',
  argTypes: {
    email: {
      control: 'text',
      description: 'The email address to display',
      defaultValue: 'name@email.com'
    },
    variant: {
      control: { type: 'select' },
      options: ['createPassword', 'enterEmail'],
      description: 'The variant of the signup screen',
      defaultValue: 'createPassword'
    },
    onSubmit: {
      action: 'submitted',
      description: 'Called when the form is submitted'
    },
    onSignIn: {
      action: 'sign-in-clicked',
      description: 'Called when sign in link is clicked'
    }
  },
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'A Material Design signup screen component with email and password fields, matching the Figma design specifications.'
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
  
  const screen = createSignupScreen(args);
  container.appendChild(screen);
  
  // Initialize Material Design components after adding to DOM
  requestAnimationFrame(() => {
    if (typeof mdc !== 'undefined') {
      // Initialize text fields
      const textFields = container.querySelectorAll('.mdc-text-field');
      textFields.forEach(textField => {
        try {
          new mdc.textField.MDCTextField(textField);
        } catch (e) {
          console.log('MDC TextField initialization skipped in Storybook');
        }
      });
      
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

export const CreatePassword = Template.bind({});
CreatePassword.args = {
  email: 'name@email.com',
  variant: 'createPassword'
};
CreatePassword.parameters = {
  docs: {
    description: {
      story: 'The create password step of the signup flow, with a disabled email field and active password field.'
    }
  }
};

export const EnterEmail = Template.bind({});
EnterEmail.args = {
  email: '',
  variant: 'enterEmail'
};
EnterEmail.parameters = {
  docs: {
    description: {
      story: 'The initial email entry step of the signup flow.'
    }
  }
};

export const WithCustomEmail = Template.bind({});
WithCustomEmail.args = {
  email: 'john.doe@company.com',
  variant: 'createPassword'
};
WithCustomEmail.parameters = {
  docs: {
    description: {
      story: 'Create password screen with a custom email address.'
    }
  }
};

export const Interactive = Template.bind({});
Interactive.args = {
  email: 'user@example.com',
  variant: 'createPassword',
  onSubmit: () => {
    alert('Form submitted! Check the Actions tab for details.');
  },
  onSignIn: () => {
    alert('Navigating to sign in...');
  }
};
Interactive.parameters = {
  docs: {
    description: {
      story: 'An interactive version with working submit and sign-in actions.'
    }
  }
};