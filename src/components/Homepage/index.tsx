import React, { useState } from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from '../../css/styles.module.css';
import { ContainerData, containerList } from '../../data/container-data';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Accordion from 'react-bootstrap/Accordion';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

interface Props {
  containerList: ContainerData[];
}

function HomepageHeader({ handleSearch }: { handleSearch: (term: string) => void }) {
  const { siteConfig } = useDocusaurusContext();
  const [expanded, setExpanded] = useState(false);

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  return (
      <input
            type="text"
            className={clsx('search-input', styles.searchInput, expanded && styles.expanded, styles.bigSearchInput)}
            onChange={(e) => handleSearch(e.target.value)}
            onFocus={toggleExpanded}
            onBlur={toggleExpanded}
            placeholder="Search infinite containers..."
          />
  );
}

const ContainerTile: React.FC<ContainerData> = ({ title, logo, description, githubUrl, websiteUrl }) => {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img src={logo} className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
        <p>
          <a href={githubUrl}>GitHub</a> |{' '}
          <a href={websiteUrl}>Website</a>
        </p>
      </div>
    </div>
  );
};

const Homepage: React.FC<Props> = ({ containerList }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (term: string) => {
    setSearchTerm(term);
  };

  const filteredContainerList = containerList.filter((container) => {
    const values = Object.values(container).join(' ');
    return values.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
    <div>
      
      <Container>
        <h3 style={{ marginTop: '30px' }}>Containers and Operations</h3>
        <HomepageHeader handleSearch={handleSearch} />
      </Container>
      <main>
      <section className={styles.features}>
          <div className="container">
            <Accordion>
              {filteredContainerList.map((container, idx) => (
                <Accordion.Item key={idx} eventKey={idx.toString()}>
                  <Accordion.Header>
                    <Container>
                      <Row>
                        <Col xs={1}>
                          <div className={styles.iconContainer}>
                            <img src={container.logo} className={styles.smallIcon} alt={container.title} />
                          </div>
                        </Col>
                        <Col xs={5}>{container.title}</Col>
                        <Col xs={4}>{container.title}</Col>
                        <Col xs={1}><a href={container.githubUrl}>GitHub</a></Col>
                        <Col xs={1}><a href={container.websiteUrl}>Website</a></Col>
                      </Row>
                    </Container>
                  </Accordion.Header>
                  <Accordion.Body>
                    <p>{container.description}</p>
                  </Accordion.Body>
                </Accordion.Item>
              ))}
            </Accordion>
          </div>
        </section>
      </main>
    </div>
  );
};

Homepage.defaultProps = {
  containerList: containerList,
};

export default Homepage;
