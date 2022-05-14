pipeline {
  agent any
  stages {
    stage('Install Packages') {
      agent any
      environment {
        CI = 'true'
      }
      steps {
        echo 'Installing Packages'
        sh 'npm install'
      }
    }

    stage('Deploy') {
      steps {
        echo 'Deploying the package'
        sh 'npm start'
      }
    }

  }
}