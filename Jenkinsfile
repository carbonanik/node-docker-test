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
        sh '''echo PATH = ${PATH}
echo M@_HOME = ${M2_HOME}
'''
      }
    }

  }
}