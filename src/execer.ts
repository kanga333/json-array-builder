import * as exec from '@actions/exec'
import * as core from '@actions/core'

export async function execCmd(cmd: string): Promise<string> {
  const outputs: string[] = []
  const options = {
    listeners: {
      stdout: (data: Buffer) => {
        outputs.push(data.toString().trim())
      }
    }
  }
  for (const cmdline of cmd.trim().split('\n')) {
    core.info(`Execute command: ${cmdline}`)
    await exec.exec(cmdline, [], options)
  }
  return outputs.join('\n')
}
