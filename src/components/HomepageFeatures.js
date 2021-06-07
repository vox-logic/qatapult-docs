import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Generates quizzes in a flash',
    Svg: require('../../static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        With EureQA quizzes can now be generated seamlessly, which is
        convenient for such a busy world.
      </>
    ),
  },
  {
    title: 'Easy to integrate',
    Svg: require('../../static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Easy to integrate into an already existing app/service. Just create a 
        developer account <a href="https://qg-dashboard.netlify.app/">here</a> and
        headover to the <a href="https://quizgen-docs.netlify.app/docs/intro/">docs</a> for 
        getting started
      </>
    ),
  },
  {
    title: 'Supports data from multiple sources',
    Svg: require('../../static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Sources such as a <code>YouTube</code> video, <code>Web-page</code>
        and <code>File</code> upto 1 GB could be used to generate the quizzes
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
