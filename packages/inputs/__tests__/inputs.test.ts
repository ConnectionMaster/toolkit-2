import * as inputs from '../src/inputs'

describe('@devbotsxyz/inputs', () => {
  describe('getOptionalInput', () => {
    it('returns undefined if the input does not exist', () => {
      expect(inputs.getOptionalInput('does-not-exist')).toBeUndefined()
    })
    it('returns undefined if the input was set to <<undefined>>', () => {
      process.env['INPUT_DOES-NOT-EXIST'] = '<<undefined>>'
      expect(inputs.getOptionalInput('does-not-exist')).toBeUndefined()
    })
    it('returns the string value if the input was set', () => {
      process.env['INPUT_DOES-EXIST'] = 'something'
      expect(inputs.getOptionalInput('does-exist')).toEqual('something')
    })
    it('returns the empty string value if the input was set to an empty string', () => {
      process.env['INPUT_DOES-EXIST'] = ''
      expect(inputs.getOptionalInput('does-exist')).toEqual('')
    })
  })

  describe('getOptionalBooleanInput', () => {
    it('returns undefined if the input does not exist', () => {
      expect(inputs.getOptionalBooleanInput('does-not-exist')).toBeUndefined()
    })
    it('returns undefined if the input was set to <<undefined>>', () => {
      process.env['INPUT_DOES-NOT-EXIST'] = '<<undefined>>'
      expect(inputs.getOptionalBooleanInput('does-not-exist')).toBeUndefined()
    })
    it('returns true value if the input was set to "true"', () => {
      process.env['INPUT_DOES-EXIST'] = 'true'
      expect(inputs.getOptionalBooleanInput('does-exist')).toEqual(true)
    })
    it('returns true value if the input was set to "True"', () => {
      process.env['INPUT_DOES-EXIST'] = 'True'
      expect(inputs.getOptionalBooleanInput('does-exist')).toEqual(true)
    })
    it('returns false value if the input was set to "false"', () => {
      process.env['INPUT_DOES-EXIST'] = 'false'
      expect(inputs.getOptionalBooleanInput('does-exist')).toEqual(false)
    })
    it('returns false value if the input was set to "FalsE"', () => {
      process.env['INPUT_DOES-EXIST'] = 'FalsE'
      expect(inputs.getOptionalBooleanInput('does-exist')).toEqual(false)
    })
    it('raises an exception if the value is not a boolean value', () => {
      process.env['INPUT_DOES-EXIST'] = 'cheese'
      expect(() => inputs.getOptionalBooleanInput('does-exist')).toThrow()
    })
    it('raises an exception if the value is an empty string', () => {
      process.env['INPUT_DOES-EXIST'] = ''
      expect(() => inputs.getOptionalBooleanInput('does-exist')).toThrow()
    })
  })

  describe('getOptionalYesNoInput', () => {
    it('returns undefined if the input does not exist', () => {
      expect(inputs.getOptionalYesNoInput('does-not-exist')).toBeUndefined()
    })
    it('returns undefined if the input was set to <<undefined>>', () => {
      process.env['INPUT_DOES-NOT-EXIST'] = '<<undefined>>'
      expect(inputs.getOptionalYesNoInput('does-not-exist')).toBeUndefined()
    })
    it('returns a true value if the input was set to "YES"', () => {
      process.env['INPUT_DOES-EXIST'] = 'YES'
      expect(inputs.getOptionalYesNoInput('does-exist')).toEqual(true)
    })
    it('returns true value if the input was set to "Yes"', () => {
      process.env['INPUT_DOES-EXIST'] = 'Yes'
      expect(inputs.getOptionalYesNoInput('does-exist')).toEqual(true)
    })
    it('returns false value if the input was set to "NO"', () => {
      process.env['INPUT_DOES-EXIST'] = 'NO'
      expect(inputs.getOptionalYesNoInput('does-exist')).toEqual(false)
    })
    it('returns false value if the input was set to "No"', () => {
      process.env['INPUT_DOES-EXIST'] = 'No'
      expect(inputs.getOptionalYesNoInput('does-exist')).toEqual(false)
    })
    it('raises an exception if the value is not a yes/no value', () => {
      process.env['INPUT_DOES-EXIST'] = 'cheese'
      expect(() => inputs.getOptionalYesNoInput('does-exist')).toThrow()
    })
    it('raises an exception if the value is an empty string', () => {
      process.env['INPUT_DOES-EXIST'] = ''
      expect(() => inputs.getOptionalYesNoInput('does-exist')).toThrow()
    })
  })
})
