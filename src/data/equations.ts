// The equations used as section rules, written as small HTML strings.
// st(up, down) stacks an upper and a lower index on the same symbol.
const st = (up: string, down: string) =>
  `<span class="st"><span>${up}</span><span>${down}</span></span>`;
const sub = (s: string) => `<sub>${s}</sub>`;
const sup = (s: string) => `<sup>${s}</sup>`;

export const equations = {
  efe: {
    name: { en: 'Einstein field equations', pt: 'equações de campo de Einstein' },
    html: `G${sub('μν')} + Λg${sub('μν')} = (8πG/c${sup('4')}) T${sub('μν')}`,
  },
  cov: {
    name: { en: 'covariant derivative', pt: 'derivada covariante' },
    html: `∇${sub('μ')}T${st('α', 'β')} = ∂${sub('μ')}T${st('α', 'β')} + Γ${st('α', 'μλ')}T${st('λ', 'β')} − Γ${st('λ', 'μβ')}T${st('α', 'λ')}`,
  },
  christoffel: {
    name: { en: 'Christoffel symbols', pt: 'símbolos de Christoffel' },
    html: `Γ${st('λ', 'μν')} = ½ g${sup('λσ')}(∂${sub('μ')}g${sub('νσ')} + ∂${sub('ν')}g${sub('μσ')} − ∂${sub('σ')}g${sub('μν')})`,
  },
  riemann: {
    name: { en: 'Riemann curvature tensor', pt: 'tensor de curvatura de Riemann' },
    html: `R${st('ρ', 'σμν')} = ∂${sub('μ')}Γ${st('ρ', 'νσ')} − ∂${sub('ν')}Γ${st('ρ', 'μσ')} + Γ${st('ρ', 'μλ')}Γ${st('λ', 'νσ')} − Γ${st('ρ', 'νλ')}Γ${st('λ', 'μσ')}`,
  },
  geodesic: {
    name: { en: 'geodesic equation', pt: 'equação da geodésica' },
    html: `d${sup('2')}x${sup('μ')}/dτ${sup('2')} + Γ${st('μ', 'αβ')} (dx${sup('α')}/dτ)(dx${sup('β')}/dτ) = 0`,
  },
  friedmann: {
    name: { en: 'Friedmann equation', pt: 'equação de Friedmann' },
    html: `H${sup('2')} = (8πG/3)ρ − kc${sup('2')}/a${sup('2')} + Λc${sup('2')}/3`,
  },
  schwarzschild: {
    name: { en: 'Schwarzschild radius', pt: 'raio de Schwarzschild' },
    html: `r${sub('s')} = 2GM/c${sup('2')}`,
  },
  tensor: {
    name: { en: 'tensor transformation law', pt: 'lei de transformação tensorial' },
    html: `T${sup('i′j′k′l′')} = A${st('i′', 'i')} A${st('j′', 'j')} A${st('k′', 'k')} A${st('l′', 'l')} T${sup('ijkl')}`,
  },
} as const;

export type EquationKey = keyof typeof equations;
