pipeline {
  agent {
    docker {
      image 'node:latest'
      args '-v /root/.m2:/root/.m2'
    }

  }
  stages {
    stage('Initialize') {
      steps {
        sh 'git show --summary'
      }
    }

  }
}