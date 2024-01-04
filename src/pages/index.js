import clsx from 'clsx';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import Heading from '@theme/Heading';
import styles from './index.module.css';
import HomepageProjects from "../components/HomepageProjects";
import { TypeAnimation } from 'react-type-animation';

const transitionTexts = ['simple', 'modern', 'productive'];

function HomepageHeader() {

    return (
        <header className={clsx('hero hero--primary', styles.heroBanner)}>
            <div className="container">
                <h1 className={styles.tagLine}>
                    We make Golang
                    <br></br>
                    <b>
                        <TypeAnimation
                            sequence={[
                                'simple',
                                2000,
                                'powerful',
                                2000,
                                'easy',
                                2000,
                                'productive',
                                2000
                            ]}
                            wrapper="span"
                            speed={1}
                            repeat={Infinity}
                            cursor={false}
                        />
                    </b>
                </h1>
            </div>
        </header>
    );
}

const TeamMemberList = [
    {
        title: 'Burak Köken',
        subtitle: 'Software Developer',
        image: "https://github.com/burakkoken.png",
        profileUrl: "https://github.com/burakkoken"
    },
];

function TeamMembers() {
    const {siteConfig} = useDocusaurusContext();
    return (
        <header className={clsx('hero hero--primary', styles.teamMembers)}>
            <div className="container">
                <Heading as="h1" className="margin-bottom--lg">Team Members</Heading>
                <div className="row">
                    {TeamMemberList.map((props, idx) => (
                        <TeamMember key={idx} {...props} />
                    ))}
                </div>
            </div>
        </header>
    );
}

function TeamMember({image, title, subtitle, profileUrl}) {
    return (
        <div className={clsx('col col--4 col--offset-4', 'avatar avatar--vertical margin-bottom--md')}>
            <a href={profileUrl} className={styles.teamMemberText}>
                <div className="avatar__photo avatar__photo--xl margin-bottom--md">
                    <img src={image}/>
                </div>
                <div className="text--center padding-horiz--md">
                    <Heading as="h2">{title}</Heading>
                    <p>{subtitle}</p>
                </div>
            </a>
        </div>
    );
}

export default function Home() {
    const {siteConfig} = useDocusaurusContext();
    return (
        <Layout
            description="Codnect is an open source organization which makes golang simple, modern and productive">
            <HomepageHeader/>
            <main>
                <HomepageProjects/>
            </main>
            <TeamMembers/>
        </Layout>
    );
}
