---
sidebar_position: 1
---
import YamlRenderer from "@site/src/components/YMLRederer/YamlRenderer"

# Running Cassandra as a Docker Container with Docker Compose

## Prerequisites
- Docker and Docker Compose

## Setup and Execution

### 1. Create the Docker Compose File

Ensure the following content is in your `docker-compose.yml` file:

<YamlRenderer url="https://raw.githubusercontent.com/jinnabaalu/infinite-docker-compose/main/cassandra/docker-compose.yml" />

2. Start the Cassandra Container
Run the following command in your terminal:

sh
Copy code
docker-compose up -d
3. Check the Status of the Container
To verify that the Cassandra container is running, use the command:

sh
Copy code
docker ps
4. Access Cassandra Using cqlsh
Connect to the Cassandra instance with:

sh
Copy code
docker exec -it cassandra cqlsh
This setup ensures that Cassandra runs smoothly in a Docker container using Docker Compose. Follow these steps to have your development environment ready quickly and efficiently.