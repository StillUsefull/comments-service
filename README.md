# Project Setup

This guide will help you set up and run the project locally.

## Steps to Run the Project

1. **Pull the Latest Code**

   Make sure you have the latest version of the codebase:

   ```bash
   git pull https://github.com/StillUsefull/comments-service.git

2. **Configure AWS S3 Credentials and MongoDB database**

    Ensure that your AWS S3 credentials are configured. You may need to update the docker-compose file with your AWS credentials and MongoDB url.


3. **Navigate to the Docker Directory and Start Container**

    ```bash
    cd docker
    docker-compose up
   
4. **Open localhost:3001**