import React from 'react'
import { Card, Image } from 'semantic-ui-react'
import Img from 'gatsby-image'
import Link from 'gatsby-link'
import styled from 'styled-components'

const mapProductsToItems = products =>
  products.map(({ node: { name, originalId, meta, mainImage } }) => {
    const price = meta.display_price.with_tax.formatted || null
    return {
      as: Link,
      to: `/product/${originalId}/`,
      childKey: originalId,
      image: (
        <Image style={{ padding: '1rem' }}>
          <Img sizes={mainImage.childImageSharp.sizes} alt={name} />
        </Image>
      ),
      header: name,
      meta: <Card.Meta style={{ color: 'dimgray' }}>{price}</Card.Meta>,
    }
  })

export default ({ products }) => (
  <Card.Group
    items={mapProductsToItems(products)}
    itemsPerRow={3}
    stackable
  />
)
