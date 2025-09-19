import Facebook from '../assets/icons/facebook.js';
import Twitter from '../assets/icons/twitter.js';
import YouTube from '../assets/icons/Youtube.js';
import Instagram from '../assets/icons/Instagram.js';

export const Navlinks = [
  { name: 'Home', path: '/' },
  { name: 'Category', path: '/Category' },
];

export const Currency = [
  { code: 'VND', name: 'VND', logo: '/icons/currency1.png' },
  { code: 'USD', name: 'United States Dollar', logo: '/icons/usd.png' },
  { code: 'EUR', name: 'Euro', logo: '/icons/eur.png' },
  { code: 'JPY', name: 'Japanese Yen', logo: '/icons/jpy.png' },
];

export const SocialMediaIcons = [
  {
    name: 'Facebook',
    component: Facebook,
    url: 'https://facebook.com'
  },
  {
    name: 'Twitter',
    component: Twitter,
    url: 'https://twitter.com'
  },
  {
    name: 'YouTube',
    component: YouTube,
    url: 'https://youtube.com'
  },
  {
    name: 'Instagram',
    component: Instagram,
    url: 'https://instagram.com'
  }
];