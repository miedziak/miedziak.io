/** @jsx jsx */
import React from "react"
import { jsx, Styled } from "theme-ui"
import { Box } from "@theme-ui/components"
import { Link } from "gatsby"
import ItemTags from "@lekoarts/gatsby-theme-minimal-blog/src/components/item-tags"

type BlogListItemProps = {
    post: {
        slug: string
        title: string
        date: string
        excerpt: string
        tags?: {
            name: string
            slug: string
        }[]
    }
    showTags?: boolean
}

const BlogListItem = ({ post, showTags = true }: BlogListItemProps) => (
    <Box mb={4}>
        <Styled.a as={Link} to={post.slug} sx={{ fontSize: [1, 2, 3], color: `text` }}>
            {post.title}
        </Styled.a>
        <p sx={{ color: `secondary`, mt: 1, a: { color: `secondary` }, fontSize: [1, 1, 2] }}>
            <time>{post.date}</time>
            {post.tags && showTags && (
                <React.Fragment>
                    {` — `}
                    <ItemTags tags={post.tags} />
                </React.Fragment>
            )}
            <br/>
            <Styled.p to={post.slug} sx={{ textDecoration: 'none'}} as={Link}>{post.description}</Styled.p>

        </p>
    </Box>
)

export default BlogListItem
