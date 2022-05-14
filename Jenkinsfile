pipeline {
  agent any
  stages {
    stage('Build') {
      agent any
      environment {
        CI = 'true'
      }
      steps {
        echo 'Installing Packages'
        bat(script: 'npm install', returnStatus: true, returnStdout: true)
      }
    }

    stage('Deploy') {
      steps {
        echo 'Deploying the package'
        bat(script: 'npm start', returnStatus: true, returnStdout: true)
      }
    }

  }
}