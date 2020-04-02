/** @jsx jsx */
import { jsx, useColorMode, Styled } from "theme-ui"
import { Link } from "gatsby"
import { Flex } from "@theme-ui/components"
import useSiteMetadata from "@lekoarts/gatsby-theme-minimal-blog/src/hooks/use-site-metadata"
import ColorModeToggle from "@lekoarts/gatsby-theme-minimal-blog/src/components/colormode-toggle"
import useNavigation from "@lekoarts/gatsby-theme-minimal-blog/src/hooks/use-navigation"
import Navigation from "@lekoarts/gatsby-theme-minimal-blog/src/components/navigation"
import replaceSlashes from "@lekoarts/gatsby-theme-minimal-blog/src/utils/replaceSlashes"
import useMinimalBlogConfig from "@lekoarts/gatsby-theme-minimal-blog/src/hooks/use-minimal-blog-config"

const Header = () => {
    const { siteTitle} = useSiteMetadata()

    const { navigation: nav, externalLinks, basePath } = useMinimalBlogConfig()

    const [colorMode, setColorMode] = useColorMode()
    const isDark = colorMode === `dark`
    const toggleColorMode = (e: any) => {
        e.preventDefault()
        setColorMode(isDark ? `light` : `dark`)
    }
    return (
        <header sx={{ mb: [5, 6] }}>
            <Flex sx={{ alignItems: `center`, justifyContent: `space-between`, variant: `dividers.bottom` }}>
                <Link
                    to={replaceSlashes(`/${basePath}`)}
                    aria-label={`${siteTitle} - Back to home`}
                    sx={{ color: `heading`, textDecoration: `none` }}
                >
                    <h1 sx={{ my: 0, fontWeight: `medium`, fontSize: [3, 4] }}>{siteTitle}</h1>
                </Link>
                <div sx={{
                    ml:'auto',
                    mr: 2
                }} >
                <Navigation nav={nav} />
                </div>
                <ColorModeToggle isDark={isDark} toggle={toggleColorMode} />
            </Flex>
        </header>
    )
}

export default Header
