import * as core from '@actions/core'
import {buildArray} from './builder'
import {execCmd} from './execer'

function validate_options(str: string, cmd: string): void {
  if ((str === '') === (cmd === '')) {
    throw new Error('Need to use only either str or cmd')
  }
}

async function run(): Promise<void> {
  try {
    const str: string = core.getInput('str')
    const cmd: string = core.getInput('cmd')
    const separator: string = core.getInput('separator')
    const json_array: string = core.getInput('json_array')

    validate_options(str, cmd)
    let str_to_separate: string
    if (cmd !== '') {
      str_to_separate = await execCmd(cmd)
    } else {
      str_to_separate = str
    }

    const build: string = buildArray(str_to_separate, separator, json_array)
    core.setOutput('build', build)
  } catch (error) {
    core.error(error)
    core.setFailed(error.message)
  }
}

run()
