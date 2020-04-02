require(`dotenv`).config({
  path: `.env`,
})

module.exports = {
  siteMetadata: {
    siteTitleAlt: `miedziak.io`,
    siteTitle: `Miedziak.io`,
    siteHeadline: `Miedziak.io`,
    siteUrl: `https://miedziak.io`,
    siteDescription: `Blogging about react, js, ux and ui`,
    siteLanguage: `en`,
    siteImage: `/banner.jpg`,
    author: `miedziak@gmail.com`,
    externalLinks: [
      {
        name: `Twitter`,
        url: `https://twitter.com/lekoarts_de`,
      },
      {
        name: `Instagram`,
        url: `https://www.instagram.com/lekoarts.de/`,
      },
    ],
    navigation: [
      {
        title: `Blog`,
        slug: `/blog`,
      },
      {
        title: `About`,
        slug: `/about`,
      },
    ],
    showLineNumbers: true,
  },
  plugins: [
    {
      resolve: `@lekoarts/gatsby-theme-minimal-blog`,
      options: {
        showLineNumbers: true,
        navigation: [
          {
            title: `Blog`,
            slug: `/blog`,
          },
          {
            title: `About`,
            slug: `/about`,
          },
        ],
        externalLinks: [
          {
            name: `Github`,
            url: `https://github.com/miedziak`,
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_ID,
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `miedziak.io`,
        short_name: `miedziak.io`,
        description: `Blogging about react, js, ux and ui`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#6B46C1`,
        display: `standalone`,
        icons: [
          {
            src: `/android-chrome-192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `/android-chrome-512x512.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
        ],
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-netlify`,
    // `gatsby-plugin-webpack-bundle-analyser-v2`,
  ],
}
