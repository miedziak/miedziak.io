import { graphql } from "gatsby"
import HomepageComponent from "@lekoarts/gatsby-theme-minimal-blog-core/src/components/homepage"

export default HomepageComponent

export const query = graphql`
  query {
    allPost(sort: { fields: date, order: DESC }, limit: 3) {
      nodes {
        slug
        title
        date(formatString: "DD.MM.YYYY")
        description
        excerpt
        tags {
          name
          slug
        }
      }
    }
  }
`
