import * as core from '@actions/core'
import {buildArray} from './builder'
import {execCmd} from './execer'

function validate_options(str: string, cmd_stdout: string): void {
  if ((str === '') === (cmd_stdout === '')) {
    throw new Error('Need to use only either str or cmd_stdout')
  }
}

async function run(): Promise<void> {
  try {
    const str: string = core.getInput('str')
    const cmd_stdout: string = core.getInput('cmd')
    const separator: string = core.getInput('separator')
    const append_to: string = core.getInput('append_to')

    validate_options(str, cmd_stdout)
    let str_to_separate: string
    if (cmd_stdout !== '') {
      str_to_separate = await execCmd(cmd_stdout)
    } else {
      str_to_separate = str
    }

    const build: string = buildArray(str_to_separate, separator, append_to)
    core.setOutput('build', build)
  } catch (error) {
    core.setFailed(error.message)
  }
}

run()
