


Guide: https://mkdocs.peaceiris.com/

## Install all packages

```sh
pipenv sync  # Installs all packages specified in Pipfile.lock.
```

## Install new package
```sh
pipenv install PACKAGE
pipenv lock
pipenv lock -r > requirements.txt
```


## Run MkDocs

```sh
pipenv shell  # Spawns a shell within the virtualenv.
mkdocs serve
```

Or, run `mkdocs` with `pipenv run`

```sh
pipenv run mkdocs serve
```



## `pipenv run`

pipenv task are also defined by [Pipfile](https://github.com/peaceiris/mkdocs-material-boilerplate/blob/main/Pipfile)

```sh
pipenv run version    # mkdocs --version
pipenv run help       # mkdocs --help
pipenv run inv serve  # inv serve
pipenv run serve      # mkdocs serve
pipenv run build      # mkdocs build
pipenv run deploy     # mkdocs gh-deploy
```

