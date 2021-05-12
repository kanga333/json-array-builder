import * as core from '@actions/core'
import {buildArray} from './builder'

async function run(): Promise<void> {
  try {
    const str: string = core.getInput('str')
    const separator: string = core.getInput('separator')
    const build: string = buildArray(str, separator)
    core.setOutput('build', build)
  } catch (error) {
    core.setFailed(error.message)
  }
}

run()
