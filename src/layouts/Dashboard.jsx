import React from 'react'
import { Container } from 'semantic-ui-react'
import { Route } from 'react-router'
import Footer from './Footer'
import Navi from './Navi'
import HomeLayout from './HomeLayout'
import JobPostingLayout from './JobPostingLayout'
import JobPostingDetail from '../pages/JobPostingDetail'
import EmployerLayout from './EmployerLayout'
import EmployerDetail from '../pages/EmployerDetail'
import CandidateAdd from "./../pages/CandidateAdd";
import EmployerAdd from "./../pages/EmployerAdd";
import Login from '../pages/Login'
import CandidateLayout from './CandidateLayout'
import CandidateDetail from '../pages/CandidateDetail'
import ResumeDetailsEdit from "./../pages/ResumeDetailsEdit";
import LinkAdd from "./../pages/LinkAdd";
import CoverLetterAdd from "./../pages/CoverLetterAdd";
import EducationAdd from "./../pages/EducationAdd";
import ExperienceAdd from "./../pages/ExperienceAdd";
import LanguageLevelAdd from "./../pages/LanguageLevelAdd";
import SkillAdd from "./../pages/SkillAdd";
import LinkDelete from "./../pages/LinkDelete";
import CoverLetterEdit from "./../pages/CoverLetterEdit";
import EducationDelete from "./../pages/EducationDelete";
import ExperienceDelete from "./../pages/ExperienceDelete";
import LanguageLevelDelete from "./../pages/LanguageLevelDelete";
import SkillDelete from "./../pages/SkillDelete";
import CandidateUpdate from '../pages/CandidateUpdate'
export default function Dashboard() {
    return (
        <Container className="dashboard">
            <Navi />
            <Route exact path="/" component={HomeLayout} />
            <Route exact path="/home" component={HomeLayout} />
            <Route exact path="/jobPostings" component={JobPostingLayout} />
            <Route exact path="/jobPostings/jobPosting/:id" component={JobPostingDetail} />
            <Route exact path="/employers" component={EmployerLayout} />
            <Route exact path="/employers/:type/:id/" component={EmployerDetail} />
            <Route exact path="/employer/add" component={EmployerAdd} />
            <Route exact path="/candidates" component={CandidateLayout} />
            <Route exact path="/candidates/candidate/:id" component={CandidateDetail} />
            <Route exact path="/candidates/candidate/:id/update" component={CandidateUpdate} />
            <Route exact path="/candidates/resume/:id/edit" component={ResumeDetailsEdit} />
            <Route exact path="/candidates/resume/:id/link/add" component={LinkAdd} />
            <Route exact path="/candidates/resume/:id/link/delete" component={LinkDelete} />
            <Route exact path="/candidates/candidate/:id/coverLetter/add" component={CoverLetterAdd} />
            <Route exact path="/candidates/candidate/:id/coverLetter/edit" component={CoverLetterEdit} />
            <Route exact path="/candidates/resume/:id/education/add" component={EducationAdd} />
            <Route exact path="/candidates/resume/:id/education/delete" component={EducationDelete} />
            <Route exact path="/candidates/resume/:id/experience/add" component={ExperienceAdd} />
            <Route exact path="/candidates/resume/:id/experience/delete" component={ExperienceDelete} />
            <Route exact path="/candidates/resume/:id/languageLevel/add" component={LanguageLevelAdd} />
            <Route exact path="/candidates/resume/:id/languageLevel/delete" component={LanguageLevelDelete} />
            <Route exact path="/candidates/resume/:id/skill/add" component={SkillAdd} />
            <Route exact path="/candidates/resume/:id/skill/delete" component={SkillDelete} />
            <Route exact path="/candidate/add" component={CandidateAdd} />
            <Route exact path="/candidate/signIn" component={Login} />
            <Footer />

        </Container>
    )
}

