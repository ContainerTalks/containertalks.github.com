import React from 'react';
import './style.css';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

interface App {
    title: string;
    url: string;
    logo: string;
}

interface AppGroup {
    group: string;
    apps: App[];
}

const appData: AppGroup[] = [
    {
        group: 'Monitoring',
        apps: [
            { title: 'Datadog', url: 'https://app.datadoghq.com/apm/home', logo: 'img/datadog.png' },
            {
                title: "Nagios",
                url: "https://metrics.richrelevance.com/nagios/",
                logo: "img/nagios.png"
            },
            {
                title: "Openstack",
                url: "https://dev.richrelevance.com/dashboard/admin/",
                logo: "img/openstack.png"
            },
            {
                title: "Observability",
                url: "https://observability.richrelevance.com",
                logo: "img/elastic.png"
            },
            {
                url: 'https://kafka-ui.richrelevance.com/',
                title: 'Kafka UI',
                logo: 'img/kafkaui.png',
            },
            {
                title: "Cybermindr",
                url: "https://scanner.cybermindr.com/dashboard",
                logo: "img/cybermindr.png"
            },
            {
                title: "Sentinelone",
                url: "https://usea1-areteadvisors.sentinelone.net/sentinels/device-control?interface=USB",
                logo: "img/sentinelone.ico"
            },
        ]
    },
    {
        group: 'CICD - Deployment',
        apps: [
            { 
                title: 'Marathon Admin', 
                url: 'https://marathon-admin.richrelevance.com', 
                logo: 'img/marathon.ico' 
            },
            {
                title: "Mesos Admin",
                url: "https://mesos-admin.richrelevance.com/#/",
                logo: "img/mesos.png"
            },
            {
                title: "Postman",
                url: "https://orange-resonance-1641.postman.co/",
                logo: "img/postman.png"
            },
            {
                title: "AWS",
                url: "https://algonomy.awsapps.com/start#/",
                logo: "img/aws.png"
                
            },
            {
                title: "Rundeck 2",
                url: "https://rundeck2.richrelevance.com/menu/home",
                logo: "img/rundeck.png"
                
            },
            {
                title: "Cloudflare",
                url: "https://dash.cloudflare.com",
                logo: "img/cloudflare.png"
            },
            {
                title: "Jenkins",
                url: "https://jenkins.richrelevance.com/",
                logo: "img/jenkins.png"
            },
            {
                title: "Nexus",
                url: "https://repo.richrelevance.com/#welcome",
                logo: "img/nexus.png"
            }
        ] 
    },
    {
        group: 'Atlassian',
        apps: [
            { title: 'Crowd', url: 'https://crowd.richrelevance.com/crowd/console/secure/application/browse.action', logo: 'img/crowd.jpeg' },
            {
                title: "Bitbucket",
                url: "https://git.richrelevance.com/dashboard",
                logo: "img/bitbucket.png"
            },
            {
                title: "Confluence",
                url: "https://algonomy.atlassian.net/wiki/home",
                logo: "img/confluence.jpeg"
            },
            {
                title: "Jira",
                url: " https://jira.richrelevance.com/jira",
                logo: "img/jira.jpeg"
               
            }
        ]
    },
    {
        group: "Understand Application Architecture",
        apps:[
            {
                title: "Presentation",
                url: "https://docs.google.com/presentation/d/1-VD7yXRR3UgC7V-U8KbP2R9DHAeWQ2UbVFmh5pDy1Lg/edit#slide=id.g2220f854d06_0_0",
                logo: "img/systemdesign.jpeg"
            }
        ]
    }
];

function AppsGrid() {
  return (
    <Container style={{ marginTop: '30px', marginBottom: '30px' }}>
            {appData.map((appGroup, index) => (
                <div key={index} style={{ marginTop: '30px'}} className="app-group">
                    <h5>{appGroup.group}</h5>
                    <div className="app-cards">
                        <Row>
                            <Col xs={12}>
                            <Row>
                            {appGroup.apps.map((app, idx) => (
                                <Col xs={3} style={{ marginTop: '10px' }}>
                                    <a key={idx} href={app.url} target="_blank" rel="noopener noreferrer" className="card-link">
                                        <Card className="app-card text-center">
                                            <div className="img-container">
                                                <Card.Img className="app-logo" variant="top" src={app.logo} />
                                            </div>
                                            <Card.Body>
                                                <Card.Text><small>{app.title}</small></Card.Text>
                                            </Card.Body>
                                        </Card>
                                    </a>
                                </Col>
                            ))}
                            </Row>
                            </Col>
                        </Row>
                    </div>
                </div>
            ))}
    </Container>
  );
}

export default AppsGrid;
