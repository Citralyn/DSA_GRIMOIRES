pipeline {
    agent {
        docker {
            image 'node:24.11.1-alpine3.22'
        }
    }

    environment {
        DISABLE_AUTH = 'true'
        DB_ENGINE    = 'sqlite'
    }

    stages {
        stage('Install Frontend Dependencies') {
            steps {
                echo "Database engine is ${DB_ENGINE}"
                echo "DISABLE_AUTH is ${DISABLE_AUTH}"
                sh 'printenv'
                sh 'cd frontend && npm install'
            }
        }

        stage('Build Frontend') {
            steps {
                sh 'echo "Hello World"'
                sh '''
                    echo "Multiline shell steps works too"
                    ls -lah
                '''
                sh 'cd frontend && npm run build'
            }
        }

        stage('Deploy') {
            steps {
                echo 'Deployment handled automatically by Netlify. No manual deploy needed.'
            }
}
    }
    post {
        always {
            echo 'This will always run'
        }
        success {
            echo 'This will run only if successful'
            mail to: 'thomastrainee4@gmail.com',
            subject: "Successful Pipeline: ${currentBuild.fullDisplayName}",
            body: "Everything is good with ${env.BUILD_URL}"
        }
        failure {
            echo 'This will run only if failed'
        }
        unstable {
            echo 'This will run only if the run was marked as unstable'
        }
        changed {
            echo 'This will run only if the state of the Pipeline has changed'
            echo 'For example, if the Pipeline was previously failing but is now successful'
        }
    }
}