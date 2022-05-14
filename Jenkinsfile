pipeline {
  agent any
  stages {
    stage('Cleanup Workspace') {
      steps {
        cleanWs()
        echo "Cleaned Up Workspace For Project"
      }
    }

    stage('Install NPM Packages') {
      steps {
        echo 'Installing npm packages'
        bat 'npm install'
      }
    }

    stage('Unit Testing') {
        steps {
          echo "Running Unit Tests"
          bat "npm test"
        }
    }

    stage('Code Analysis') {
        steps {
            echo "Running Code Analysis"
        }
    }

    stage('Build Deploy Code') {
      when {
          branch 'main'
      }
      steps {
          echo "Building Artifact"
          echo "Deploying Code"
          bat "npm start"
      }
    }
  }
}