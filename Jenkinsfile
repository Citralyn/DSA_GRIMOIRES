pipeline {
    agent {
        docker {
            image 'node:24.11.1-alpine3.22'
        }
    }

    stages {
        stage('Install Frontend Dependencies') {
            steps {
                sh 'cd frontend && npm install'
            }
        }

        stage('Build Frontend') {
            steps {
                sh 'cd frontend && npm run build'
            }
        }
    }
}