# Lint branches

This workflow affects all our javascript projects, so currently every project with a build step. The logic for this is:

1. lint the project
2. commit any changes
3. push the changes

It relies on the `GITHUB_TOKEN` secret being available in this repo.