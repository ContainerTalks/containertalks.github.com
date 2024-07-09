import React, { useState } from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Accordion from 'react-bootstrap/Accordion';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import { containerList } from '../../data/container-data';
import Card from 'react-bootstrap/Card';
import { Icon } from '@iconify/react';
import OverlayTrigger from 'react-bootstrap/esm/OverlayTrigger';
import Tooltip from 'react-bootstrap/esm/Tooltip';

interface ContainerDataHeaderProps {
    handleSearch: (term: string) => void;
}

function ContainerDataHeader({ handleSearch }: ContainerDataHeaderProps) {
    const { siteConfig } = useDocusaurusContext();
    const [expanded, setExpanded] = useState(false);

    const toggleExpanded = () => {
        setExpanded(!expanded);
    };

    return (
        <div>
            <Row style={{ marginTop: '30px', marginBottom: '30px' }}>
                <Col xs={6}><h4>Containers and Operations</h4></Col>
                <Col xs={6} className='d-flex justify-content-end'>
                    <input
                        type="text"
                        className='form-control form-control-sm'
                        onChange={(e) => handleSearch(e.target.value)}
                        onFocus={toggleExpanded}
                        onBlur={toggleExpanded}
                        placeholder="infinite container..."
                    />
                </Col>
            </Row>
        </div>
    );
}

const ContainerDataComponent: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = (term: string) => {
        setSearchTerm(term);
    };

    const filteredContainerDataList = containerList.filter((mapping) => {
        const values = Object.values(mapping).join(' ');
        return values.toLowerCase().includes(searchTerm.toLowerCase());
    });

    return (
        <div>
            <Container style={{ marginTop: '30px', marginBottom: '30px' }}>
                <ContainerDataHeader handleSearch={handleSearch} />
                <Accordion>
                    {filteredContainerDataList.map((mapping, idx) => (
                        <Accordion.Item key={idx} eventKey={idx.toString()}>
                            <Accordion.Header>
                                <Container>
                                    <Row>
                                        <Col xs={2}>
                                            {mapping.title}
                                        </Col>
                                        <Col xs={4}>
                                            {mapping.description}
                                        </Col>
                                        <Col xs={5}>
                                            {mapping.tags.map((item, index) => (
                                                <span className="badge bg-info me-2">{item}</span>
                                            ))}
                                        </Col>
                                    </Row>
                                </Container>
                            </Accordion.Header>
                            <Accordion.Body>
                                <Row style={{ marginTop: '20px' }}>
                                    <Col xs={2}>
                                        <strong>{mapping.title} Operations</strong>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col xs={12}>
                                        <p style={{ marginTop: '10px' }}>
                                            {mapping.tutorials && mapping.tutorials.map((tutorial, index) => (
                                                <div key={index}>
                                                    <Card style={{ marginTop: '10px' }} className="tutorial-card">
                                                        <Card.Body>
                                                            <Row>
                                                                <Col xs={9}>
                                                                    {tutorial.title}
                                                                </Col>

                                                                <Col xs={1}>
                                                                    <OverlayTrigger
                                                                        placement="top"
                                                                        overlay={<Tooltip id={`tooltip-${index}`}>Blog</Tooltip>}
                                                                    >
                                                                        <a href={tutorial.blogUrl} className="tutorial-link">
                                                                            <Icon icon="carbon:blog" />
                                                                        </a>
                                                                    </OverlayTrigger>
                                                                </Col>
                                                                <Col xs={1}>
                                                                    <a href={tutorial.youtubeUrl} className="tutorial-link"><Icon icon="logos:youtube-icon" /></a>
                                                                </Col>
                                                                <Col xs={1}>
                                                                    <a href={tutorial.githubUrl} className="tutorial-link"><Icon icon="logos:github-octocat" /></a>
                                                                </Col>
                                                            </Row>
                                                        </Card.Body>
                                                    </Card>
                                                </div>

                                            ))}
                                        </p>
                                    </Col>
                                </Row>
                            </Accordion.Body>
                        </Accordion.Item>
                    ))}
                </Accordion>
            </Container>
        </div>
    );
};

export default ContainerDataComponent;
