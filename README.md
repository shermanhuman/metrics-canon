# metrics-cannon

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
