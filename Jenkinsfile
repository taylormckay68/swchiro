#!/usr/bin/env groovy
@Library('ostk-pipeline')
import com.overstock.dx.Pipeline
new Pipeline(this).execute {
  installWebhooks(scm)


  node {
    ostkCheckout()

    stage('Build node project') {
      NODEJS_VERSION = sh(returnStdout: true, script: 'cat .nvmrc').trim()
      builderImage = docker.image("node:${NODEJS_VERSION}")
      builderImage.inside("-e HOME=/tmp/jenkins-home") {
        sh 'yarn'
        sh 'yarn test'
        sh 'yarn build'
        sh 'yarn install --production'
      }
    }

    stage('Build Dockerfile') {
      sh("""
        sed -e "s/NODE_VERSION/${NODEJS_VERSION}/" Dockerfile.template > Dockerfile
        cat Dockerfile
      """)
    }

    stage('Build docker image') {
      image = docker.build('room-ideas')
    }

    if (env.BRANCH_NAME != "master") {
        return
    }
    stage('Publish docker image') {
      newVersion = ostkSetVersions()
      image.tag(newVersion)
      ostkTagRelease(newVersion)
    }

    stage('Security scan') {
      clmScan()
    }

    stage('Deploy') {
      deployApp = deploy.start('prod')
      if (!deployApp) {
        error 'Failed to deploy to prod'
      }
      echo "Service URL: ${deployApp.serviceUrl}"
      finalSuccess = deploy.finish()
      if (!finalSuccess) {
        error "Could not execute production deploy"
      }
    }
  }
}
