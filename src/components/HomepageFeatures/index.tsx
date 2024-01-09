import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'とっても簡単に使えます',
    Svg: require('@site/static/img/undraw_maker_launch.svg').default,
    description: (
      <>
         OML Vision は、プロジェクトチームのすべての人や、ドキュメントベースのツールからModel Based Systems Engineering (MBSE)への移行を考えている人のために設計されています。
      </>
    ),
  },
  {
    title: 'openCAESARがスポンサーです',
    Svg: require('@site/static/img/undraw_teaching.svg').default,
    description: (
      <>
        OML Vision は openCAESAR のプロダクトラインの1つです。openCAESAR は オントロジーに基づいたモデリングと分析のためのプラットフォームです。 Ontological Modeling Language (OML)言語を使って、システムのモデリングと分析おいて、アジャイルなDevOps開発手法の導入をサポートします。
      </>
    ),
  },
  {
    title: 'React TSX と VSCode',
    Svg: require('@site/static/img/undraw_react.svg').default,
    description: (
      <>
        OML Vision は Visual Studio Code のエクステンション（拡張機能）です。 React と Typescript を使用しています。これにより、プロジェクトのライフサイクルを通じて、「type safety」（型安全）の確保や、コラボレーションの改善、コードの保守性を向上します。
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
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
