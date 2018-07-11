import React from 'react'
import { Image } from 'semantic-ui-react'

import pawSVG from '../../images/paw.svg'

const Logo = () => (
  <Image size="mini" src={pawSVG} style={{ marginRight: '1.5em' }} alt="Paw" />
)

export default Logo
