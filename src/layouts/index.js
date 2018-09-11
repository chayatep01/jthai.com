import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/header'
import Main from '../components/main'
import Footer from '../components/footer'
import './index.css'

const Layout = ({ children, data }) => (
  <div>
    <Header />
  </div>
)



export default Layout


