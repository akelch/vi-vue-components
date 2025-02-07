export function useColor(primaryColor, secondaryColor){

  function getPrimaryColor(lightness = 0) {
    const [h,s,l] = colorConvert(primaryColor, lightness)
    return "hsl(" + h + "," + s + "%," + l + "%)"
  }
  function getSecondaryColor(lightness = 0) {
    const [h,s,l] = colorConvert(secondaryColor, lightness)
    return "hsl(" + h + "," + s + "%," + l + "%)"
  }
  function colorConvert(hexColor, lightness) {
    const r = parseInt("0x" + hexColor[1] + hexColor[2]) / 255
    const g = parseInt("0x" + hexColor[3] + hexColor[4]) / 255
    const b = parseInt("0x" + hexColor[5] + hexColor[6]) / 255

    const cmin = Math.min(r, g, b)
    const cmax = Math.max(r, g, b)
    const delta = cmax - cmin
    let h
    let s
    let l

    if (delta == 0) h = 0
    else if (cmax == r) h = ((g - b) / delta) % 6
    else if (cmax == g) h = (b - r) / delta + 2
    else h = (r - g) / delta + 4

    h = Math.round(h * 60)

    if (h < 0) h += 360

    l = (cmax + cmin) / 2
    s = delta == 0 ? 0 : delta / (1 - Math.abs(2 * l - 1))
    s = +(s * 100).toFixed(1)
    l = +(l * 100).toFixed(1)
    if (lightness) {
      l = lightness
    }
    return [h,s,l]

  }

  function getAlphaColor(color, lightness, alpha){
    const [h,s,l] = colorConvert(color, lightness)
    return "hsla(" + h + "," + s + "%," + l + "% , "+ alpha +"%)"
  }

  function getPrimaryAlphaColor(lightness, alpha){
    return getAlphaColor(primaryColor,lightness,alpha)
  }

  function getSecondaryAlphaColor(lightness, alpha){
    return getAlphaColor(secondaryColor,lightness,alpha)
  }

  return { getPrimaryColor, getSecondaryColor, getAlphaColor, getPrimaryAlphaColor,getSecondaryAlphaColor }
}