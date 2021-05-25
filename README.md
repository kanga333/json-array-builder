# json-array-builder

![test](https://github.com/kanga333/json-array-builder/workflows/test/badge.svg)

The `kanga333/json-array-builder` action is a TypeScript action that helps you to build JSON array to be used in dynamic matrix job.

## Examples

This workflow decides the parameter to be used in the dynamic matrix at the job of `matrix_input`.
After that, `dynamic_matrix` runs jobs in parallel based on the parameters passed to it.

```yaml
name: 'example'
on:
  pull_request:
  push:
    branches:
      - main
jobs:
  matrix_input:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: kanga333/json-array-builder@master
        id: array
        with:
          # Using this repository as an example, the output of the command is
          # builder.ts
          # execer.ts
          # main.ts
          cmd: ls src
          separator: newline
    outputs:
      param: ${{ steps.array.outputs.build }}
  dynamic_matrix:
    needs:
      - matrix_input
    strategy:
      matrix:
        # Three matrix jobs work, builder.ts, execer.ts. main.ts
        param: ${{ fromJson(needs.matrix_input.outputs.param) }}
    runs-on: ubuntu-latest
    steps:
      - run: |
          echo ${{ matrix.param }}
```

## Inputs

|  name  |  description  |  default  |
| ---- | ---- | ---- |
|  str  |  String to split by separator to build JSON array. str cannot be used with cmd at the same time.  |  |
|  cmd  |  Execute the given command and use the stdout to split by separator to build JSON array. str cannot be used with cmd at the same time.  |  |
|  separator  |  String to separate a given input. If you need to separate by '\n', please specify the value as 'newline'. Also, if you need to separate by ' ', please specify the value as 'space'.  |  newline  |
|  json_array  |   If given JSON array string, this action appends to it.  | |
