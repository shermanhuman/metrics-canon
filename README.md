# metrics-cannon

## Description
A quick and dirty project to generate JSON logs in order to test filebeat.

## Run locally
Run on your local workstation:
```
docker run -it --mount source=/persistent,target=/persistent,type=bind applesaucelabs:metrics-cannon
```

## Run on OakOS
Application definition:

```
    {
      "image": "index.docker.io/applesaucelabs/metrics-canon:latest",
    }
```
