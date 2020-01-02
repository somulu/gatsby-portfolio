import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout/layout'

const AboutPage = () => {
    return (
        <div>
            <Layout>
            <h1>About Me</h1>
            <h5>Bio</h5>
            <p>I am a full-stack developer that focuses on creating amazing websites and applications.  My specialtiy is Javascript.  I enjoy learning new skills and teaching them to others.  Take a look at <Link to="/projects">my work </Link> and 
                <Link to="/contact"> get in touch</Link> if you want to work together.
            </p>
            </Layout>
        </div>
    )
}

export default AboutPage

