if [ "${1}" == "deploy" ]; then
    if [ "${TRAVIS_BRANCH}" == "master" ] &&\
       [ "${TRAVIS_TAG}" == "" ] &&\
       [ "${TRAVIS_PULL_REQUEST}" == "false" ]
    then
        docker push ${DOCKER_IMAGE_CLIENT}:latest &&\
        docker push ${DOCKER_IMAGE_CLIENT}:${TRAVIS_COMMIT} &&\
        docker push ${DOCKER_IMAGE_SERVER}:latest &&\
        docker push ${DOCKER_IMAGE_SERVER}:${TRAVIS_COMMIT} &&\        
        travis_ci_operator.sh github-yaml-update \
            z900 master values.auto-updated.yaml '{"openpension":{"client": {"image": "'${DOCKER_IMAGE_CLIENT}:${TRAVIS_COMMIT}'"}},{"server": {"image": "'${DOCKER_IMAGE_SERVER}:${TRAVIS_COMMIT}'"}}}' \
            "automatic update of openpension" shootermv/hasadna-k8s &&\
        echo &&\
        echo Great Success &&\
        echo &&\
        echo ${DOCKER_IMAGE}:latest &&\
        echo ${DOCKER_IMAGE}:${TRAVIS_COMMIT}
    else
        echo Skipping deployment
    fi

    # travis_ci_operator.sh github-update self master "
    #     cp -f $PWD/QUICKSTART.md $PWD/QUICKSTART.ipynb ./ &&\
    #     git add QUICKSTART.md QUICKSTART.ipynb
    # " "update QUICKSTART notebook"

fi