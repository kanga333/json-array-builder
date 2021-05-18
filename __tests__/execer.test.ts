import {execCmd} from '../src/execer'

describe('execer', () => {
  it('execer can exec cmd and get stdout', async () => {
    const cmd = `
    echo a
    echo b
    `
    const received = await execCmd(cmd)
    expect(received).toBe('a\nb')
  })
})
