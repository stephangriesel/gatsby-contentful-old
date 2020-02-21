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
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `img`,
        path: `${__dirname}/src/img/`,
      },
    },
    `gatsby-plugin-sass`, `gatsby-plugin-styled-components`],
}
