export interface ContainerData {
  title: string;
  tags?: string[];
  githubUrl: string;
  websiteUrl: string;
  description: string;
  logo?: string;
  tutorials?: {
    title?: string;
    youtubeUrl?: string;
    blogUrl?: string;
    githubUrl?: string;
  }[]
}

export const containerList: ContainerData[] = [
  {
    title: "AFFiNe",
    tags: ["AFFiNE", "Miro Alternate", "Notion Alternate"],
    githubUrl: "https://github.com/toeverything/AFFiNE",
    websiteUrl: "https://docs.affine.pro/",
    logo: "img/cassandra.svg",
    description: "Open Source Alternate for Miro and Notion",
    tutorials: [
      {
          title: "Running AFFiNE as a Docker Container",
          blogUrl: "https://www.reddit.com/r/selfhosted/comments/1dz7d38/running_affine_as_a_docker_container_open_source/",
          youtubeUrl: "https://www.youtube.com/watch?v=ujjIPwW9hng"
      }
    ]
  },
  {
    title: "Cassandra",
    tags: ["NoSQL", "Database", "Column Database"],
    githubUrl: "https://github.com/apache/cassandra",
    websiteUrl: "https://cassandra.apache.org/_/index.html",
    logo: "img/cassandra.svg",
    description: "Open Source NoSQL Database",
    tutorials: [
      {
          title: "Running Cassandra as a Docker Container with Docker Compose",
          blogUrl: "https://www.docker.com/"
      },
      {
          title: "Interacting with cqlsh when running Cassandra as a Container",
          blogUrl: "https://cassandra.apache.org/doc/latest/getting_started/"
      },
      {
          title: "Dump and Restore the Keyspace",
          blogUrl: "https://docs.datastax.com/en/cassandra-oss/3.x/cassandra/operations/opsBackupRestore.html"
      },
      {
          title: "Creating a Two-Node Cassandra Cluster with Docker Compose",
          blogUrl: "https://github.com/bitnami/bitnami-docker-cassandra"
      },
      {
          title: "Understanding Split Brain Issues in a Two-Node Cluster and Why It’s Not Recommended",
          blogUrl: "https://blog.anant.us/split-brain-in-a-cassandra-cluster/"
      },
      {
          title: "Running Cassandra as a Three-Node Cluster for Production Use",
          blogUrl: "https://cassandra.apache.org/doc/latest/getting_started/"
      },
      {
          title: "Configuring a Client to Connect to Cassandra with 100% Availability",
          blogUrl: "https://docs.datastax.com/en/cassandra-oss/3.x/cassandra/operations/opsClientRequests.html"
      },
      {
          title: "Performing a Rolling Restart of a Cassandra Cluster",
          blogUrl: "https://cassandra.apache.org/doc/latest/operating/rolling_upgrade.html"
      },
      {
          title: "How to Delete an Existing Node and Add a New Node in Cassandra",
          blogUrl: "https://docs.datastax.com/en/cassandra-oss/3.x/cassandra/operations/opsAddNodeToCluster.html"
      },
      {
          title: "Recovering from Disasters and Defining Quorum for High Availability",
          blogUrl: "https://docs.datastax.com/en/cassandra-oss/3.x/cassandra/operations/opsRecoverNodes.html"
      },
      {
          title: "Monitoring Cassandra Effectively with Prometheus and Grafana",
          blogUrl: "https://prometheus.io/docs/introduction/overview/"
      },
      {
          title: "Centralised logging with ELK",
          blogUrl: "https://www.elastic.co/what-is/elk-stack"
      },
      {
          title: "Centralised logging with Loki",
          blogUrl: "https://grafana.com/oss/loki/"
      }
    ]
  },
    {
      title: "RQLite",
      tags: ["RDBMS", "Relational", "Database"],
      githubUrl: "https://github.com/rqlite/rqlite",
      websiteUrl: "https://rqlite.io/",
      logo: "img/sqlite.png",
      description: "The lightweight, easy-to-use, distributed relational database built on SQLite",

    },
    {
      title: "MySQL",
      githubUrl: "",
      tags: ["RDBMS", "Relational", "Database"],
      websiteUrl: "https://www.mysql.com/",
      logo: "img/mysql.svg",
      description: "The world's most popular open source database."
    },
    {
        title: "Titanium Database",
        tags: ["RDBMS", "Relational", "Database"],
        githubUrl: "https://github.com/pingcap/tidb",
        websiteUrl: "https://www.mysql.com/",
        logo: "img/tidb.ico",
        description: "Open source SQL database that supports Hybrid Transactional and Analytical Processing (HTAP) workloads"
      },
  ];
  