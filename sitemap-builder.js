require('babel-register');
 
const router = require('./router').default;
const Sitemap = require('react-router-sitemap').default;
 
(new Sitemap(router).build('https://theinfinitedigital.com/').save('./sitemap.xml'));