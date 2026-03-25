---
layout: default
---

<div style="text-align: center;">
  <img src="{{ site.baseurl }}{{ site.profile_picture }}" alt="{{ site.name }}" style="border-radius: 50%; width: 150px; height: 150px; object-fit: cover;">
  <h1>{{ site.name }}</h1>
  <p>{{ site.title }} | {{ site.location }}</p>
  <p><a href="mailto:{{ site.email }}">{{ site.email }}</a> | {{ site.phone }}</p>
  <p>
    <a href="https://linkedin.com/in/{{ site.linkedin_username }}">LinkedIn</a> | 
    <a href="https://github.com/{{ site.github_username }}">GitHub</a>
  </p>
</div>

---

## PROFILE

Senior Data Engineer and Technical Lead with nearly 7 years building scalable, high-performance data platforms on both cloud and on-premise platform. Designed real-time ingestion and analytics systems (Elastic/Databricks) processing up to 1TB/day with low latency, and delivered enterprise ETL/ELT and BigQuery solutions that improved reliability, throughput, and cost-efficiency.

Hands-on with Databricks, BigQuery, and observability stacks; experienced leading cross-functional teams, defining system architecture, and turning complex data into actionable insights that drive measurable business outcomes.

---

## EMPLOYMENT HISTORY

### **Senior Data Engineer** @ CMC Global, Hanoi
*Feb 2026 — Present*

* Worked as a Senior Data Engineer in building a BI platform for a global automotive company targeting the Korean market.
* Designed and optimized data pipelines and data models on Azure Databricks to support scalable analytics.
* Re-architected ETL workflows to improve performance and reduce processing time for large datasets.
* *...[Nội dung từ trang 2 ảnh 1, 2, 3 được tóm tắt và đưa vào đây]*
* Built optimized data models for Power BI, enabling efficient reporting and visualization.
* Collaborated with stakeholders to translate business requirements into scalable data solutions.

### **Technical Lead / Solution Architect** @ CMC Global, Hanoi
*Jul 2025 — Mar 2026*

* Served as Technical Lead and Solution Architect, leading the analyst and engineer team to design and implement a large-scale log ingestion and analytics platform for a semiconductor manufacturing system.
* Architected an on-premise, air-gapped Elastic Stack system handling up to 1TB/day log volume with near real-time processing (30-120s latency).
* Designed end-to-end pipeline: Elastic Agent -> Logstash -> Elasticsearch -> Kibana, ensuring high availability and fault tolerance.
* Implemented multi-tier storage strategy (hot/warm/cold) using ILM to optimize cost and performance.
* Built resilient ingestion pipelines with buffering (Persistent Queue, DLQ) to prevent data loss during system interruptions.
* Defined data modeling, index strategy, and naming conventions for large-scale observability use cases.
* Led system security design including network segmentation, HTTPS access, and role-based access control (RBAC).
* Delivered dashboards, monitoring, and alerting solutions for operational insights and anomaly detection.

### **Data Engineering Team Lead** @ CMC Global, Hanoi
*Mar 2025 — Jul 2025*

* Led the database team in a cross-functional database migration project, transitioning from MongoDB Atlas to Amazon Aurora.
* Designed and implemented data migration strategies ensuring data consistency, integrity, and minimal downtime.
* Leveraged Prisma ORM with TypeScript to redesign data access layers and optimize query performance.
* Collaborated closely with backend teams to refactor services and align with relational database design principles.
* Identified and resolved schema mismatches between NoSQL and relational models, ensuring seamless migration.

### **Technical Lead (PoC / Solution Design)** @ CMC Global, Hanoi
*Jul 2024 — Dec 2024*

* Acted as Technical Lead for a critical Proof-of-Concept (PoC) project to validate a large-scale log management and analytics solution for a semiconductor manufacturing system.
* Led the end-to-end solution design and proposal process, working closely with stakeholders to define system requirements and architecture using the Elastic Stack.
* Designed and delivered a production-grade PoC system that was actively used by the client on a daily basis, serving as a foundation for the full-scale implementation.
* Conducted technical presentations, solution demonstrations, and architecture walkthroughs to convince stakeholders and secure project buy-in.
* Played a key role in technical proposal writing, estimation, and solution positioning, contributing directly to business acquisition.
* Led and coordinated the engineering team, ensuring alignment between business requirements and technical implementation.
* Gained hands-on experience in client communication, negotiation, and cross-functional collaboration in a pre-sales / solutioning context.

### **Data Engineer** @ NTT Data VDS., Hanoi
*Jan 2024 — Jul 2024*

Worked in a Kanban team, mainly focused on creation of the automated workflows for the fleet measurement analysis. My main responsibilities included:

* **Team Collaboration:** Seamlessly collaborated within a Kanban team, effectively coordinating with 2 Vietnamese and 4 European colleagues to ensure optimal project alignment and success. Maintained high levels of communication and teamwork to drive project milestones.
* **Azure Platform Utilization:** Expertly harnessed the power of the Azure platform and proprietary tools to develop robust data pipelines, enabling the efficient ingestion and processing of petabytes of raw data from data lakes, thus ensuring high performance and scalability.
* **Orchestration & Data Analysis:** Deployed Azure Data Factory for orchestrating complex data pipelines and utilized Databricks to analyze massive datasets, each scaling to terabytes.
* **Data Exploration & Visualization:** Leveraged Elastic Search and Kibana to perform comprehensive data exploration and develop insightful visualizations, facilitating data-driven decision-making and in-depth analysis.

### **Software Engineering Team Lead** @ NTT Data VDS., Hanoi
*Jun 2023 — Dec 2023*

Led the Vietnamese team of 5 developers in developing a talent spark management application for our client's company within the context of a microservice architecture. Leveraging AWS, Java Spring Boot, and Angular technologies, our application streamlined talent management processes. My main responsibilities included:

* **Database Architecture & Microservices:** Utilized auto-scaling capabilities of DocumentDB to architect a resilient database system, and developed Spring Boot microservices to ensure high availability and seamless functionality within a dynamic microservices framework.
* **AWS Infrastructure Configuration:** Expertly configured AWS services such as DocumentDB, S3, and EC2, integrating them with backend microservices to establish a robust, scalable infrastructure tailored for microservices architecture.
* **AWS Video Integration and API Development:** Implemented AWS Video on Demand to deploy a high-capacity video pool capable of streaming gigabytes of video data online, and developed Spring Boot APIs for robust video streaming capabilities. Created a reusable helper module that simplified implementation for other developers, enhancing overall productivity.
* **CI/CD:** Achieved rapid and continuous deployment of five microservices updates by leveraging EKS for container orchestration and GitLab CI for building an efficient CI/CD pipeline.

### **Data Engineering Team Lead** @ NTT Data VDS., Hanoi
*Oct 2021 — May 2023*

As a Data Engineer at NTT Data, I have been instrumental in leading a team to build, manage, and maintain the data flow of a new CRM system for a prominent broadcaster and telecommunications company in British. My main responsibilities included:

* **Leadership & Project Management:** Spearheaded the Vietnamese team, initially managing a sub-team of 2 members and later overseeing the entire team of 8 members. Ensured seamless project execution and delivery, while facilitating effective communication between the Vietnamese and EU teams. Consistently achieved over 20 points in a two-week Scrum Sprint, accelerating the team's delivery timeline.
* **ETL Pipeline Development:** Leveraged Google Cloud Dataflow, Scala, and Scio framework, alongside Google Cloud Storage, to design and enhance pipelines that efficiently ingest, clean, and transform millions of streaming records from diverse data sources (Salesforce, Siebel, etc.).
* **Data Modeling & Data Warehousing:** Optimized complex queries and database models in BigQuery, capable of loading dozens of dimension tables and aggregating them into fact tables within a Star schema. Ensured ACID compliance for large transactions involving terabytes of data, enhancing data integrity and reliability.
* **Orchestration and Automation:** Utilized Apache Airflow (Cloud Composer) to orchestrate ETL pipelines and schedule parallel BigQuery jobs, ensuring the precise and timely loading of data on a daily basis.
* **Technical Innovation and Expertise:**
    * In charge of migrating from legacy wildcard table solutions to a Slowly Changing Dimension Type implementation in BigQuery, simplifying table management and enhancing query performance over time intervals.
    * Pioneered the use of functions in BigQuery to accelerate code development and improve re-usability in queries.
    * Enhanced query performance by leveraging BigQuery's caching capabilities for faster execution of complex queries.
    * Conducted numerous knowledge-sharing sessions on Airflow and BigQuery, significantly boosting the technical proficiency of the project team.

### **Software Engineer** @ NTT Data VDS., Hanoi
*May 2021 — Oct 2021*

As a Software Engineer at NTT Data VDS, I worked in a Scrum team to develop a mock testing application. My contributions included:

* **Teamwork:** Actively collaborated within a Scrum team, ensuring seamless coordination and efficient project delivery.
* **Database Design & Management:** Authored comprehensive documents for the analysis and design of MySQL database schemas, meticulously adhering to 3rd Normal Form principles to optimize data storage and retrieval efficiency.
* **Security Implementation:** Implemented robust security measures using Keycloak for authorization and authentication. Integrated advanced Quarkus security features with Keycloak and Angular components, significantly enhancing the application's security and functionality.
* **Web Development Expertise:** Demonstrated proficiency in Java reactive programming with Quarkus for backend development, TypeScript for frontend development with Angular, and SQL for efficient database management. Developed and maintained a responsive and high-performing web application, ensuring a seamless user experience.

### **Intern Software Engineer** @ VTI Vietnam, Hanoi
*Jul 2020 — Nov 2020*

My responsibilities included:
* Collaborated in the development of the web application using Spring Boot, Vue.js, and Microsoft SQL, under the guidance of senior engineers.
* Analyzed and documented project requirements, gaining valuable experience in requirement understanding.
* Optimized an email notification feature that could handle 5000 email sending per second using multi-threading technique and Thymeleaf templates.
* Built a Vue page that could help user to view and interract with packages in warehouses and wrote SQL procedures for Spring JPA integration under the hood.
* Engaged in the Waterfall process methodology, gaining exposure to structured project management approaches.

### **Intern Software Engineer** @ SODO Asia, Hanoi
*Feb 2019 — Oct 2019*

My responsibilities included:
* Used Angular and Spring Boot for developing the FAQ module and bar-code scanning for the website and mobile application system with a monthly traffic of 30,000 users.
* *...[Nội dung bổ sung từ trang 5 được đưa vào đây]*
* Improved the user-experience by implementing Angular/Ionic directives and services to build a helpful tooltip feature on the UI.
* Sped up search queries by applying full-text-search technique into MongoDB database.
* Protected employment modules by using JWT, OAuth2, granted employment permissions by implementing a ABAC role hierarchy in Angular.
* Ensured smooth and fluent communication and notification between Spring micro services in the system by integrating RabbitMQ into Spring Boot.
* Learned agile methodologies and teamwork in a startup environment.

---

## EDUCATION

**Engineer**, Posts and Telecommunications Institute of Technology
*Oct 2016 — Sept 2021*

---

## CERTIFICATES

* **Databricks Certified Data Engineer Professional** - Issued by Databricks
* **Neo4j Certified Professional** - Issued by Neo4J
* **AWS Certified Cloud Practitioner** - Issued by Amazon
* **Astronomer Certification for Apache Airflow Fundamentals** - Issued by Astronomer
* **SQL (Advanced)** - Issued by Hacker Rank
* **TOEIC** - Jun 2022, Overall score 700

---

## SKILLS

* **Cloud:** GCP, Azure, AWS
* **Programming:** Java, Python, Scala, SQL
* **Data Platform:** Databricks, Elastic
* **Data Processing:** ETL, ELT
* **Data Analysis**
* **Agile:** Scrum/Kanban
* **Pair Programming**
* **Code Review**
* **Management**
* **Leadership**
* **Problem Solving**
* **Remote Working**

---

## LANGUAGES

* Vietnamese
* English

---

## HOBBIES

* Data Science
* Computer Science
* Language
* International Culture
* Remote/Hybrid Working
