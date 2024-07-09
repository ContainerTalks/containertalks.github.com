import React, { useState, useEffect } from 'react';
import yaml from 'js-yaml';
import axios from 'axios';

interface YamlData {
  title: string;
  description: string;
  // Add other properties from your YAML structure
}

interface YamlRendererProps {
  url: string;
}

const YamlRenderer: React.FC<YamlRendererProps> = ({ url }) => {
  const [yamlData, setYamlData] = useState<YamlData | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(url);
        const parsedYaml = yaml.load(response.data) as YamlData;
        setYamlData(parsedYaml);
      } catch (error) {
        console.error('Error fetching YAML data:', error);
      }
    };

    fetchData();
  }, [url]);

  if (!yamlData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{yamlData.title}</h1>
      <p>{yamlData.description}</p>
      {/* Render other YAML data as needed */}
    </div>
  );
};

export default YamlRenderer;
