import * as exec from '@actions/exec'

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
    await exec.exec(cmdline, [], options)
  }
  return outputs.join('\n')
}
