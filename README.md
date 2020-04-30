# test-commits-to-github

A small PoC to send commits programmatically to a remote repository (i.e: GitHub). In this PoC, I use two approaches:

## Using git directly

Using [simple-git](https://www.npmjs.com/package/simple-git) library to add to staging area the changes, commit them and
push them to a remote repository.

## Using GitHub API

Using [GitHub's API v3](https://developer.github.com/v3/git/commits/#create-a-commit) to create a commit in the repository.
