const Promise = require('bluebird')
const path = require('path')

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    const newsItem = path.resolve('./src/templates/news-item.js')
    resolve(
      graphql(
        `
        {
          allContentfulNews {
            edges {
              node {
                date
                title
                slug
              }
            }
          }
        }
        `
      ).then(result => {
        if (result.errors) {
          console.log(result.errors)
          reject(result.errors)
        }

        const posts = result.data.allContentfulNews.edges
        posts.forEach(({ node }) => {
          createPage({
            path: `/news/${node.slug}/`,
            component: newsItem,
            context: {
              slug: node.slug,
            },
          })
        })
      })
    )
  })
}
