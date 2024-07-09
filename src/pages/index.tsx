import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Homepage from '@site/src/components/Homepage';
import 'bootstrap/dist/css/bootstrap.min.css';
import ContainerDataComponent from '../components/ContainerDataComponent/container-data-component';



export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
        <ContainerDataComponent />
    </Layout>
  );
}
