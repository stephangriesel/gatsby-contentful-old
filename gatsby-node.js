const path = require('path');
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions;

  const { data } = await graphql(`query {
        tours:allContentfulTourExample {
          edges{
            node{
              slug
            }
          }
        }
      }
    `)
  data.tours.edges.forEach(({ node }) => {
    createPage({
      path: `tours/${node.slug}`,
      component: path.resolve('./src/templates/tour-template.js'),
      context: {
        slug: node.slug,
      },
    })
  })
}