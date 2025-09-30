export interface Theme {
  id: string;
  name: string;
  background: {
    type: 'solid' | 'gradient' | 'video';
    classes: string;
    videoSrc?: string;
    overlay?: string;
  };
  text: {
    heading: string;
    subtitle: string;
    body: string;
    hero: string;
  };
  typography: {
    fontFamily: string;
    fontWeight: string;
  };
  buttons: {
    primary: string;
    secondary: string;
  };
}

export const themes: Record<string, Theme> = {
  minimal: {
    id: 'minimal',
    name: 'Minimal',
    background: {
      type: 'solid',
      classes: 'bg-white'
    },
    text: {
      heading: 'text-black',
      subtitle: 'text-gray-800', 
      body: 'text-gray-500',
      hero: 'text-black'
    },
    typography: {
      fontFamily: 'font-sans',
      fontWeight: 'font-light'
    },
    buttons: {
      primary: 'bg-black text-white hover:bg-gray-800',
      secondary: 'border border-gray-300 text-gray-700 hover:bg-gray-100'
    }
  },
  ocean: {
    id: 'ocean',
    name: 'Ocean Gradient',
    background: {
      type: 'gradient',
      classes: 'bg-gradient-to-br from-teal-400 via-blue-700 to-indigo-900'
    },
    text: {
      heading: 'bg-gradient-to-r from-teal-600 via-blue-700 to-indigo-900 bg-clip-text text-transparent',
      subtitle: 'text-blue-700',
      body: 'text-blue-950',
      hero: 'text-white'
    },
    typography: {
      fontFamily: 'font-sans',
      fontWeight: 'font-bold'
    },
    buttons: {
      primary: 'bg-white text-blue-700 hover:bg-blue-50',
      secondary: 'border-2 border-white text-white hover:bg-white hover:text-blue-700'
    }
  },
  nature: {
    id: 'nature',
    name: 'Nature',
    background: {
      type: 'video',
      classes: 'bg-green-900',
      videoSrc: '/videos/bird-clips.webm',
      overlay: 'bg-green-900/40'
    },
    text: {
      heading: 'text-green-800',
      subtitle: 'text-green-600',
      body: 'text-gray-950',
      hero: 'text-white'
    },
    typography: {
      fontFamily: 'font-sans',
      fontWeight: 'font-extrabold'
    },
    buttons: {
      primary: 'bg-green-600 text-white hover:bg-green-700',
      secondary: 'border-2 border-white text-white hover:bg-white hover:text-green-700'
    }
  }
};

export const defaultTheme = themes.ocean;