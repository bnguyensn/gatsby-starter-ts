module.exports = {
  siteMetadata: {
    title: `My Gatsby Starter`,
    siteUrl: `https://my-gatsby-starter.netlify.com`,
    description: `My Gatsby starter site`,
  },

  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        // eslint-disable-next-line @typescript-eslint/camelcase
        short_name: `starter`,
        // eslint-disable-next-line @typescript-eslint/camelcase
        start_url: `/`,
        // eslint-disable-next-line @typescript-eslint/camelcase
        background_color: `#1b5e20`,
        // eslint-disable-next-line @typescript-eslint/camelcase
        theme_color: `#1b5e20`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    `gatsby-plugin-typescript`
  ]
};
