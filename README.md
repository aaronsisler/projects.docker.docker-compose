# projects.docker.docker-compose

## Build & Run

```
docker build . -t aaronsisler/node-web-app
```

```
docker images
```

```
docker run -p 4242:8080 -d aaronsisler/node-web-app
```

Note on run options:

- Publish a container's port(s) to the host

  ```
  -p or --expose or --publish
  ```

- Run container in background and print container ID

  ```
  -d or --detach
  ```

### Common Debugging Commands

- Get container ID(s)

  ```
  docker ps
  ```

- Print app output of a running container

  ```
  docker logs <container id>
  ```

- Kill a running container

  ```
  docker kill <container id>
  ```
