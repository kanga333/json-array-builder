import {execCmd} from '../src/execer'

describe('execer', () => {
  it('execer can exec cmd and get stdout', async () => {
    const stdout = await execCmd('echo a')
    expect(stdout).toBe('a')
  })
})
