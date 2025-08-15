import { createRecommendationTile, createRecommendationTileGrid } from './RecommendationTile.js';

export default {
  title: 'Custom Components/Recommendation Tile',
  parameters: {
    docs: {
      description: {
        component: 'A custom recommendation tile component for displaying campaign suggestions and goals. Based on the Figma design with icon, title, and description.',
      },
    },
  },
  argTypes: {
    title: {
      control: 'text',
      description: 'The main title of the recommendation',
    },
    description: {
      control: 'text',
      description: 'Description text explaining the recommendation',
    },
    icon: {
      control: 'text',
      description: 'Material icon name for the recommendation',
    },
    iconType: {
      control: 'select',
      options: ['material-icons', 'material-symbols-outlined', 'material-symbols-rounded'],
      description: 'Type of Material icon to use',
    },
    iconColor: {
      control: 'color',
      description: 'Background color of the icon container',
    },
    backgroundColor: {
      control: 'color',
      description: 'Background color of the tile',
    },
    selected: {
      control: 'boolean',
      description: 'Whether the tile is selected',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the tile is disabled',
    },
  },
};

export const Default = {
  args: {
    title: 'New customers',
    description: 'Sends an email to customers after their first transaction welcoming them to the business.',
    icon: 'waving_hand',
  },
  render: (args) => createRecommendationTile(args),
};

export const Selected = {
  args: {
    title: 'New customers',
    description: 'Sends an email to customers after their first transaction welcoming them to the business.',
    icon: 'waving_hand',
    selected: true,
  },
  render: (args) => createRecommendationTile(args),
};

export const Disabled = {
  args: {
    title: 'Premium feature',
    description: 'This recommendation requires a premium subscription to activate.',
    icon: 'lock',
    disabled: true,
  },
  render: (args) => createRecommendationTile(args),
};

export const DifferentIcons = {
  render: () => {
    const container = document.createElement('div');
    container.style.display = 'flex';
    container.style.flexDirection = 'column';
    container.style.gap = '16px';
    container.style.padding = '20px';
    container.style.maxWidth = '500px';
    
    const tiles = [
      {
        title: 'Welcome series',
        description: 'Automated email sequence to onboard new customers with your brand story.',
        icon: 'waving_hand',
        iconType: 'material-icons',
        iconColor: '#085282',
      },
      {
        title: 'Birthday rewards',
        description: 'Send personalized birthday offers to increase customer loyalty and engagement.',
        icon: 'cake',
        iconType: 'material-symbols-outlined',
        iconColor: '#7B1FA2',
      },
      {
        title: 'Cart abandonment',
        description: 'Recover lost sales by reminding customers about items left in their cart.',
        icon: 'shopping_cart',
        iconType: 'material-symbols-rounded',
        iconColor: '#F57C00',
      },
      {
        title: 'Win-back campaign',
        description: 'Re-engage inactive customers with special offers and product updates.',
        icon: 'refresh',
        iconType: 'material-symbols-outlined',
        iconColor: '#388E3C',
      },
    ];
    
    tiles.forEach(tileConfig => {
      const tile = createRecommendationTile({
        ...tileConfig,
        onClick: () => console.log(`Clicked: ${tileConfig.title}`),
      });
      container.appendChild(tile);
    });
    
    return container;
  },
  parameters: {
    docs: {
      description: {
        story: 'Various recommendation tiles demonstrating different Material icon types: classic Material Icons, outlined symbols, and rounded symbols.',
      },
    },
  },
};

export const InteractiveTiles = {
  render: () => {
    const container = document.createElement('div');
    container.style.padding = '20px';
    container.style.maxWidth = '500px';
    
    const title = document.createElement('h3');
    title.textContent = 'Campaign Recommendations';
    title.style.marginBottom = '16px';
    title.style.color = '#085282';
    container.appendChild(title);
    
    const description = document.createElement('p');
    description.textContent = 'Click on tiles to select your preferred campaign strategies:';
    description.style.marginBottom = '24px';
    description.style.color = 'rgba(1, 12, 20, 0.7)';
    container.appendChild(description);
    
    const tiles = [
      {
        title: 'Customer retention',
        description: 'Keep existing customers engaged with personalized content and offers.',
        icon: 'favorite',
        iconColor: '#E91E63',
      },
      {
        title: 'Lead nurturing',
        description: 'Convert prospects into customers with targeted email sequences.',
        icon: 'trending_up',
        iconColor: '#2196F3',
      },
      {
        title: 'Product launches',
        description: 'Generate excitement and drive sales for new product releases.',
        icon: 'rocket_launch',
        iconColor: '#FF9800',
      },
    ];
    
    let selectedTiles = new Set();
    
    tiles.forEach((tileConfig, index) => {
      const tile = createRecommendationTile({
        ...tileConfig,
        selected: selectedTiles.has(index),
        onClick: () => {
          if (selectedTiles.has(index)) {
            selectedTiles.delete(index);
          } else {
            selectedTiles.add(index);
          }
          
          // Update tile appearance
          const newTile = createRecommendationTile({
            ...tileConfig,
            selected: selectedTiles.has(index),
            onClick: () => {
              if (selectedTiles.has(index)) {
                selectedTiles.delete(index);
              } else {
                selectedTiles.add(index);
              }
              // Refresh the entire container
              container.replaceChild(
                InteractiveTiles.render(), 
                container
              );
            },
          });
          
          tile.parentNode.replaceChild(newTile, tile);
          console.log('Selected tiles:', Array.from(selectedTiles).map(i => tiles[i].title));
        },
      });
      
      container.appendChild(tile);
    });
    
    return container;
  },
  parameters: {
    docs: {
      description: {
        story: 'Interactive tiles that can be selected and deselected by clicking.',
      },
    },
  },
};

export const TileGrid = {
  render: () => {
    const container = document.createElement('div');
    container.style.padding = '20px';
    
    const title = document.createElement('h3');
    title.textContent = 'Recommended Campaign Templates';
    title.style.marginBottom = '24px';
    title.style.color = '#085282';
    title.style.textAlign = 'center';
    container.appendChild(title);
    
    const tiles = [
      {
        title: 'Welcome series',
        description: 'Automated email sequence to onboard new customers effectively.',
        icon: 'waving_hand',
        iconColor: '#085282',
      },
      {
        title: 'Product showcase',
        description: 'Highlight your best products with beautiful visual campaigns.',
        icon: 'star',
        iconColor: '#F57C00',
      },
      {
        title: 'Seasonal promotions',
        description: 'Create timely offers that align with holidays and seasons.',
        icon: 'calendar_today',
        iconColor: '#7B1FA2',
      },
      {
        title: 'Customer feedback',
        description: 'Collect reviews and testimonials to build social proof.',
        icon: 'rate_review',
        iconColor: '#388E3C',
      },
      {
        title: 'Re-engagement',
        description: 'Win back inactive customers with compelling offers.',
        icon: 'refresh',
        iconColor: '#E91E63',
      },
      {
        title: 'Referral program',
        description: 'Leverage word-of-mouth marketing through customer referrals.',
        icon: 'people',
        iconColor: '#2196F3',
      },
    ];
    
    const grid = createRecommendationTileGrid({
      tiles: tiles,
      columns: 2,
      gap: '16px',
      onTileClick: (tile, index) => {
        console.log(`Selected tile: ${tile.title} (index: ${index})`);
      },
    });
    
    container.appendChild(grid);
    
    return container;
  },
  parameters: {
    docs: {
      description: {
        story: 'A responsive grid layout of recommendation tiles for campaign templates.',
      },
    },
  },
};

export const CampaignGoals = {
  render: () => {
    const container = document.createElement('div');
    container.style.padding = '20px';
    container.style.maxWidth = '500px';
    
    const header = document.createElement('div');
    header.style.marginBottom = '24px';
    
    const title = document.createElement('h2');
    title.textContent = 'What\'s your main goal?';
    title.style.margin = '0 0 8px 0';
    title.style.color = '#085282';
    title.style.fontSize = '24px';
    title.style.fontWeight = '700';
    header.appendChild(title);
    
    const subtitle = document.createElement('p');
    subtitle.textContent = 'Select the primary objective for your campaign to get personalized recommendations.';
    subtitle.style.margin = '0';
    subtitle.style.color = 'rgba(1, 12, 20, 0.7)';
    subtitle.style.fontSize = '16px';
    header.appendChild(subtitle);
    
    container.appendChild(header);
    
    const goals = [
      {
        title: 'Increase sales',
        description: 'Drive more conversions and boost revenue with targeted product promotions.',
        icon: 'trending_up',
        iconColor: '#388E3C',
      },
      {
        title: 'Build awareness',
        description: 'Expand your reach and introduce your brand to new potential customers.',
        icon: 'visibility',
        iconColor: '#2196F3',
      },
      {
        title: 'Improve loyalty',
        description: 'Strengthen relationships with existing customers through personalized experiences.',
        icon: 'favorite',
        iconColor: '#E91E63',
      },
      {
        title: 'Collect feedback',
        description: 'Gather valuable insights from customers to improve your products and services.',
        icon: 'chat_bubble',
        iconColor: '#FF9800',
      },
    ];
    
    goals.forEach(goalConfig => {
      const tile = createRecommendationTile({
        ...goalConfig,
        onClick: () => {
          console.log(`Selected goal: ${goalConfig.title}`);
          // Here you would typically navigate to the next step
        },
      });
      container.appendChild(tile);
    });
    
    return container;
  },
  parameters: {
    docs: {
      description: {
        story: 'Campaign goal selection interface using recommendation tiles.',
      },
    },
  },
};