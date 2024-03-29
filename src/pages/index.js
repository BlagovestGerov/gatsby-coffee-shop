import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import BackgroundSection from '../components/Globals/BackgroundSection';
import Info from '../components/Home/Info';
import Menu from '../components/Home/Menu';
import Contact from '../components/Home/Contact';
import Products from '../components/Home/Products';
import Product from '../components/Home/Product';

const IndexPage = ({data}) => (
  <Layout>
    <SEO title="Home" />
  <BackgroundSection 
  img={data.img.childImageSharp.fluid} 
  title="regular joe's"
 />
 <Info />
 <Menu items={data.menu} />
 <Products />
 <Contact />
  </Layout>
)

export const query = graphql`
{
  img:file(relativePath:{eq:"default-background.jpeg"}){
    childImageSharp{
      fluid{
        ...GatsbyImageSharpFluid_tracedSVG
      }
    }
  }

  menu:allContentfulCoffeeItem{
    edges{
      node{
        id
        title
        description{
          description
        }
        price
        category
        image{
          fixed(width:50,height:50){
            ...GatsbyContentfulFixed_tracedSVG         
          }
        }
      }
    }
  }
}
`
export default IndexPage
