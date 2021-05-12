import * as core from '@actions/core'

async function run(): Promise<void> {
  try {
    const str: string = core.getInput('str')
    core.info(`str ${str}`)
    let separator: string = core.getInput('separator')
    if (separator === 'newline') {
      separator = '\n'
    }
    if (separator === 'space') {
      separator = ' '
    }

    const splited: string[] = str.split(separator)
    const build = JSON.stringify(splited)
    core.setOutput('build', build)
  } catch (error) {
    core.setFailed(error.message)
  }
}

run()
