import React from 'react'
import { Container } from 'semantic-ui-react'
import { Route } from 'react-router'
import Footer from './Footer'
import Navi from './Navi'
import HomeLayout from './HomeLayout'
import JobPostingLayout from './JobPostingLayout'

export default function Dashboard() {
    return (
        <Container className="dashboard">
            <Navi />
            <Route exact path="/" component={HomeLayout} />
            <Route exact path="/home" component={HomeLayout} />
            <Route exact path="/jobPostings" component={JobPostingLayout} />
            <Footer />
        </Container>
    )
}

