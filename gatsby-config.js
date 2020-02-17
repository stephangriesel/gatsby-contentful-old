/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: 'Stephan\'s Site',
    description: 'Practice practice practice',
    author: '@stevegriesel',
    data: {
      nickname: 'stevie',
      age: 34
    },
  },
  plugins: [`gatsby-plugin-sass`, `gatsby-plugin-styled-components`],
}
