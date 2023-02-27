pipeline {
  agent {
    docker {
      image 'node:latest'
    }
  }
  stages {
    stage('Remove old') {
      steps {
        sh 'docker compose down'
      }
    }
    stage('Rebuild & run') {
      steps {
        sh 'docker compose up --build -d'
      }
    }
  }
}