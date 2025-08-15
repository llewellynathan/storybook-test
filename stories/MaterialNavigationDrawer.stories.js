import { createMaterialNavigationDrawer } from './MaterialNavigationDrawer.js';

export default {
  title: 'Material Design/Navigation Drawer',
  parameters: {
    docs: {
      description: {
        component: 'Navigation drawers provide access to destinations and app functionality, such as switching accounts. They can either be permanently on-screen or controlled by a navigation menu icon.',
      },
    },
  },
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['modal', 'dismissible', 'permanent'],
      description: 'The behavior variant of the navigation drawer',
    },
    title: {
      control: 'text',
      description: 'The title displayed in the drawer header',
    },
    subtitle: {
      control: 'text',
      description: 'The subtitle displayed in the drawer header',
    },
    open: {
      control: 'boolean',
      description: 'Whether the drawer is initially open',
    },
    onItemClick: { 
      action: 'item-clicked',
      description: 'Function called when a navigation item is clicked',
    },
    onClose: { 
      action: 'drawer-closed',
      description: 'Function called when the drawer is closed',
    },
  },
};

const defaultNavigationItems = [
  { text: 'Home', icon: 'home', active: true },
  { text: 'Campaigns', icon: 'campaign' },
  { text: 'Analytics', icon: 'analytics' },
  { text: 'Settings', icon: 'settings' },
];

export const Modal = {
  args: {
    variant: 'modal',
    title: 'Cinch',
    subtitle: 'Navigation',
    navigationItems: defaultNavigationItems,
    open: true,
  },
  render: (args) => createMaterialNavigationDrawer(args),
};

export const Dismissible = {
  args: {
    variant: 'dismissible',
    title: 'Cinch',
    subtitle: 'Menu',
    navigationItems: defaultNavigationItems,
    open: true,
  },
  render: (args) => createMaterialNavigationDrawer(args),
};

export const Closed = {
  args: {
    variant: 'modal',
    title: 'Cinch',
    subtitle: 'Navigation',
    navigationItems: defaultNavigationItems,
    open: false,
  },
  render: (args) => createMaterialNavigationDrawer(args),
};

export const WithoutSubtitle = {
  args: {
    variant: 'modal',
    title: 'Navigation',
    navigationItems: defaultNavigationItems,
    open: true,
  },
  render: (args) => createMaterialNavigationDrawer(args),
};

export const ExtendedNavigation = {
  args: {
    variant: 'modal',
    title: 'Cinch Dashboard',
    subtitle: 'Campaign Management',
    open: true,
    navigationItems: [
      { text: 'Dashboard', icon: 'dashboard', active: true },
      { text: 'Campaigns', icon: 'campaign' },
      { text: 'Create Campaign', icon: 'add_circle' },
      { text: 'Analytics', icon: 'analytics' },
      { text: 'Audience', icon: 'group' },
      { text: 'Templates', icon: 'description' },
      { text: 'Reports', icon: 'assessment' },
      { text: 'Settings', icon: 'settings' },
      { text: 'Help', icon: 'help' },
    ],
  },
  render: (args) => createMaterialNavigationDrawer(args),
  parameters: {
    docs: {
      description: {
        story: 'Navigation drawer with extended menu items for a complete dashboard interface.',
      },
    },
  },
};

export const UserAccount = {
  args: {
    variant: 'modal',
    title: 'John Doe',
    subtitle: 'john.doe@company.com',
    open: true,
    navigationItems: [
      { text: 'Profile', icon: 'account_circle' },
      { text: 'My Campaigns', icon: 'folder' },
      { text: 'Notifications', icon: 'notifications' },
      { text: 'Billing', icon: 'payment' },
      { text: 'Team Settings', icon: 'group_work' },
      { text: 'Privacy', icon: 'privacy_tip' },
      { text: 'Sign Out', icon: 'logout' },
    ],
  },
  render: (args) => createMaterialNavigationDrawer(args),
  parameters: {
    docs: {
      description: {
        story: 'User account navigation drawer with profile information and account-related options.',
      },
    },
  },
};