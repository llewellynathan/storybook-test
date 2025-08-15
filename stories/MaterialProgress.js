export const createMaterialLinearProgress = ({
  progress = 0.5,
  variant = 'determinate',
  buffer = 1,
  label = '',
  color = '#6200ea',
  backgroundColor = 'rgba(98, 0, 234, 0.12)',
  ...props
}) => {
  const container = document.createElement('div');
  container.className = 'mdc-linear-progress';
  container.setAttribute('role', 'progressbar');
  container.setAttribute('aria-label', label);
  
  if (variant === 'determinate') {
    container.setAttribute('aria-valuenow', progress);
    container.setAttribute('aria-valuemin', '0');
    container.setAttribute('aria-valuemax', '1');
  }

  container.style.position = 'relative';
  container.style.width = '100%';
  container.style.height = '4px';
  container.style.overflow = 'hidden';
  container.style.borderRadius = '2px';

  // Track
  const track = document.createElement('div');
  track.className = 'mdc-linear-progress__track';
  track.style.position = 'absolute';
  track.style.width = '100%';
  track.style.height = '100%';
  track.style.backgroundColor = backgroundColor;

  // Primary bar
  const primaryBar = document.createElement('div');
  primaryBar.className = 'mdc-linear-progress__primary-bar';
  primaryBar.style.position = 'absolute';
  primaryBar.style.top = '0';
  primaryBar.style.left = '0';
  primaryBar.style.height = '100%';
  primaryBar.style.backgroundColor = color;
  primaryBar.style.transformOrigin = 'left center';
  primaryBar.style.transition = 'transform 0.25s ease';

  if (variant === 'determinate') {
    primaryBar.style.transform = `scaleX(${Math.min(Math.max(progress, 0), 1)})`;
  } else if (variant === 'indeterminate') {
    primaryBar.style.animation = 'mdc-linear-progress-primary-indeterminate-translate 2s infinite linear';
    
    const inner = document.createElement('div');
    inner.className = 'mdc-linear-progress__primary-bar-inner';
    inner.style.position = 'absolute';
    inner.style.top = '0';
    inner.style.right = '0';
    inner.style.bottom = '0';
    inner.style.left = '0';
    inner.style.animation = 'mdc-linear-progress-primary-indeterminate-scale 2s infinite linear';
    inner.style.backgroundColor = color;
    primaryBar.appendChild(inner);
  }

  container.appendChild(track);
  container.appendChild(primaryBar);

  // Buffer bar for buffering variant
  if (variant === 'buffer') {
    const bufferBar = document.createElement('div');
    bufferBar.className = 'mdc-linear-progress__buffer-bar';
    bufferBar.style.position = 'absolute';
    bufferBar.style.top = '0';
    bufferBar.style.left = '0';
    bufferBar.style.height = '100%';
    bufferBar.style.backgroundColor = 'rgba(98, 0, 234, 0.24)';
    bufferBar.style.transformOrigin = 'left center';
    bufferBar.style.transform = `scaleX(${Math.min(Math.max(buffer, 0), 1)})`;
    bufferBar.style.transition = 'transform 0.25s ease';
    
    container.insertBefore(bufferBar, primaryBar);
    primaryBar.style.transform = `scaleX(${Math.min(Math.max(progress, 0), buffer)})`;
  }

  // Add CSS keyframes for indeterminate animation
  if (variant === 'indeterminate') {
    const style = document.createElement('style');
    style.textContent = `
      @keyframes mdc-linear-progress-primary-indeterminate-translate {
        0% {
          left: -145.166611%;
        }
        20% {
          left: -145.166611%;
          animation-timing-function: cubic-bezier(0.5, 0, 0.701732, 0.495819);
        }
        59.15% {
          left: 21.5%;
          animation-timing-function: cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);
        }
        100% {
          left: 35.5%;
        }
      }
      
      @keyframes mdc-linear-progress-primary-indeterminate-scale {
        0% {
          transform: scaleX(0.08);
        }
        36.65% {
          transform: scaleX(0.08);
          animation-timing-function: cubic-bezier(0.334731, 0.12482, 0.785844, 1);
        }
        69.15% {
          transform: scaleX(0.661479);
          animation-timing-function: cubic-bezier(0.06, 0.11, 0.6, 1);
        }
        100% {
          transform: scaleX(0.08);
        }
      }
    `;
    if (!document.head.querySelector('#mdc-linear-progress-animations')) {
      style.id = 'mdc-linear-progress-animations';
      document.head.appendChild(style);
    }
  }

  // Method to update progress
  container.setProgress = (newProgress, newBuffer = buffer) => {
    if (variant === 'determinate') {
      primaryBar.style.transform = `scaleX(${Math.min(Math.max(newProgress, 0), 1)})`;
      container.setAttribute('aria-valuenow', newProgress);
    } else if (variant === 'buffer') {
      const bufferBar = container.querySelector('.mdc-linear-progress__buffer-bar');
      if (bufferBar) {
        bufferBar.style.transform = `scaleX(${Math.min(Math.max(newBuffer, 0), 1)})`;
      }
      primaryBar.style.transform = `scaleX(${Math.min(Math.max(newProgress, 0), newBuffer)})`;
    }
  };

  return container;
};

export const createMaterialCircularProgress = ({
  progress = 0.5,
  variant = 'determinate',
  size = 'medium',
  color = '#6200ea',
  label = '',
  strokeWidth = null,
  ...props
}) => {
  let radius, circleSize, defaultStrokeWidth;
  
  switch (size) {
    case 'small':
      circleSize = 24;
      radius = 8.75;
      defaultStrokeWidth = 2.5;
      break;
    case 'large':
      circleSize = 56;
      radius = 20;
      defaultStrokeWidth = 4;
      break;
    default: // medium
      circleSize = 40;
      radius = 15;
      defaultStrokeWidth = 3;
  }

  const actualStrokeWidth = strokeWidth || defaultStrokeWidth;
  const normalizedRadius = radius - actualStrokeWidth / 2;
  const circumference = normalizedRadius * 2 * Math.PI;

  const container = document.createElement('div');
  container.className = 'mdc-circular-progress';
  container.setAttribute('role', 'progressbar');
  container.setAttribute('aria-label', label);
  
  if (variant === 'determinate') {
    container.setAttribute('aria-valuenow', progress);
    container.setAttribute('aria-valuemin', '0');
    container.setAttribute('aria-valuemax', '1');
  }

  container.style.width = `${circleSize}px`;
  container.style.height = `${circleSize}px`;
  container.style.position = 'relative';

  const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  svg.style.width = '100%';
  svg.style.height = '100%';
  svg.style.transform = 'rotate(-90deg)';

  const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
  circle.setAttribute('cx', circleSize / 2);
  circle.setAttribute('cy', circleSize / 2);
  circle.setAttribute('r', normalizedRadius);
  circle.setAttribute('fill', 'transparent');
  circle.setAttribute('stroke', color);
  circle.setAttribute('stroke-width', actualStrokeWidth);
  circle.setAttribute('stroke-linecap', 'round');
  circle.style.transition = 'stroke-dashoffset 0.35s ease';

  if (variant === 'determinate') {
    const offset = circumference - (progress * circumference);
    circle.setAttribute('stroke-dasharray', circumference);
    circle.setAttribute('stroke-dashoffset', offset);
  } else if (variant === 'indeterminate') {
    circle.setAttribute('stroke-dasharray', `${circumference * 0.25} ${circumference * 0.75}`);
    circle.style.animation = 'mdc-circular-progress-rotate 2s linear infinite';
    
    // Add CSS keyframes for indeterminate animation
    const style = document.createElement('style');
    style.textContent = `
      @keyframes mdc-circular-progress-rotate {
        0% {
          transform: rotate(0deg);
          stroke-dasharray: ${circumference * 0.05} ${circumference * 0.95};
        }
        50% {
          transform: rotate(180deg);
          stroke-dasharray: ${circumference * 0.7} ${circumference * 0.3};
        }
        100% {
          transform: rotate(360deg);
          stroke-dasharray: ${circumference * 0.05} ${circumference * 0.95};
        }
      }
    `;
    if (!document.head.querySelector('#mdc-circular-progress-animations')) {
      style.id = 'mdc-circular-progress-animations';
      document.head.appendChild(style);
    }
  }

  svg.appendChild(circle);
  container.appendChild(svg);

  // Method to update progress
  container.setProgress = (newProgress) => {
    if (variant === 'determinate') {
      const offset = circumference - (newProgress * circumference);
      circle.setAttribute('stroke-dashoffset', offset);
      container.setAttribute('aria-valuenow', newProgress);
    }
  };

  return container;
};