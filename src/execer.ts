import * as exec from '@actions/exec'

export async function execCmd(cmd: string): Promise<string> {
  let output = ''
  const options = {
    listeners: {
      stdout: (data: Buffer) => {
        output += data.toString().trim()
      }
    }
  }
  await exec.exec(cmd, [], options)
  return output
}
