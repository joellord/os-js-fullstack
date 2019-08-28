# OpenShift JavaScript FullStack deploy
The goal for this project is to understand how to build and deploy a full stack javascript application on OpenShift using docker-compose and kompose.

## Instructions
* Install [minishift](https://www.okd.io/minishift/)
* Install [oc](https://www.okd.io/)
* Install [kompose](https://kompose.io)
* Start minishift
..* `minishift start`
* Login to minishift and create a new project
..* `oc login`
..* `oc new-project os-js-fullstack`
* Deploy on minishift
..* `kompose up`