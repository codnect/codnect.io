import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const ProjectList = [
    {
        title: 'Procyon',
        Svg: require('@site/static/img/procyon.png').default,
        description: (
            <>
                Build high performance and extensible web applications quickly, focus on your business logic
            </>
        ),
        url: "https://procyon.codnect.io"
    },
    {
        title: 'Logy',
        Svg: require('@site/static/img/logy.png').default,
        description: (
            <>
                Create and manage your logs events with flexible, configurable and fast loggers
            </>
        ),
        url: "https://logy.codnect.io"
    },
    {
        title: 'Chrono',
        Svg: require('@site/static/img/chrono.png').default,
        description: (
            <>
                Schedule your tasks and code periodically with different scheduling functionalities
            </>
        ),
        url: "https://chrono.codnect.io"
    },
    {
        title: 'Reflector',
        Svg: require('@site/static/img/reflector.png').default,
        description: (
            <>
                Manipulate your objects during the program execution with simplified reflection API
            </>
        ),
        url: "https://reflector.codnect.io"
    },
];

function Feature({Svg, title, description, url}) {
    return (
        <div className={clsx('col col--4')}>
            <a href={url} className={styles.projectText}>
                <div className="text--center">
                    <img src={Svg} width={128} height={128}/>
                </div>
                <div className="text--center padding-horiz--md">
                    <Heading as="h3">{title}</Heading>
                    <p >{description}</p>
                </div>
            </a>
        </div>
    );
}

export default function HomepageFrameworks() {
    return (
        <section className={styles.features}>
            <div className="container">
                <Heading as="h1" className="text--center margin-bottom--lg">Projects</Heading>
                <div className="row">
                    {ProjectList.map((props, idx) => (
                        <Feature key={idx} {...props} />
                    ))}
                </div>
            </div>
        </section>
    );
}
