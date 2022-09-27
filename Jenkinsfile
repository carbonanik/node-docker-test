pipeline {
  agent any
  stages {
    stage('dev') {
      steps {
        sh '''echo \'Hello World !..!\'
docker ps -a
node ./app/index.js'''
      }
    }

  }
}