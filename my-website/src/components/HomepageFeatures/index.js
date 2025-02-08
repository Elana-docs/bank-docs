import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';
import Card from 'react-bootstrap/Card';


const FeatureList = [
  {
    title: 'Регистрация и вход',
    id: '/docs/registration/sign-up',
    Svg: require('@site/static/img/sign-up.svg').default,
    description: (
      <>
        Простые шаги для создания аккаунта и входа в систему
      </>
    ),
  },
  { 
    title: 'Установка и настройки приложения',
    id: '/docs/settings/app-install',
    Svg: require('@site/static/img/app-install.svg').default,
    description: (
      <>
        Узнайте, как установить приложение и настроить уведомления
      </>
    ),
  },
  {
    title: 'Платежи и переводы',
    id: '/docs/payments/balance',
    Svg: require('@site/static/img/transfers.svg').default,
    description: (
      <>
        Инструкции по проведению платежей и денежных переводов
      </>
    ),
  },
];


function Feature({ Svg, title, description, id }) {
  return (
    <div className={clsx('col col--4', styles.featureCol)}>
      <Link to={id} className={styles.featureLink}>
        <Card 
          style={{ 
            border: '1px solid rgba(0, 0, 0, 0.1)', 
            borderRadius: '8px',
            transition: 'transform 0.2s ease, box-shadow 0.2s ease',
          }}
          className={styles.featureCard}
        >
          <Card.Body>
            <div className="text--center">
              <Svg className={styles.featureSvg} role="img" />
            </div>
            <Card.Title className={clsx('text--center', styles.featureTitle)}>
              {title}
            </Card.Title>
            <Card.Text className="text--center">
              {description}
            </Card.Text>
          </Card.Body>
        </Card>
      </Link>
    </div>
  );
}

// Основной компонент
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