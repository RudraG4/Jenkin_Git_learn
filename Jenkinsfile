pipeline {
  agent any
  stages {
    stage('Build') {
      steps {
        echo 'installing npm packages'
        bat 'npm install'
      }
    }

    stage('Test') {
      steps {
        echo 'testing the package'
        bat 'npm test'
      }
    }

  }
}