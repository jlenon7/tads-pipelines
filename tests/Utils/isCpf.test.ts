import { isCpf } from '../../src'

describe('\n[UNIT] isCpf', () => {
  it('Deve retornar true pois o CPF enviado é válido', () => {
    // CPF Gerado utilizando https://4devs.com.br

    expect(isCpf(52998224725)).toBe(true)
    expect(isCpf('52998224725')).toBe(true)
    expect(isCpf('529.982.247-25')).toBe(true)
  })

  it('Deve retornar false pois o CPF enviado é inválido', () => {
    expect(isCpf(17512195051)).toBe(false)
    expect(isCpf('17512195051')).toBe(false)
    expect(isCpf('175.121.950-51')).toBe(false)

    expect(isCpf(17512193051)).toBe(false)
    expect(isCpf('17512193051')).toBe(false)
    expect(isCpf('175.121.930-51')).toBe(false)
  })

  it('Deve retornar false pois o CPF enviado contém o valor 00000000000', () => {
    expect(isCpf('00000000000')).toBe(false)
    expect(isCpf('000.000.000-00')).toBe(false)
  })
})
