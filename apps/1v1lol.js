export default class 1v1.lol {
  meta = {
    name: '1v1.lol',
    description: 'Discover 1v1, the online building simulator & third person shooting game. Battle royale, build fight, box fight, zone wars and more game modes to enjoy!',
    icon: 'https://raw.githubusercontent.com/CreeperGate/custom-flowos-respository/main/assets/1v1lolicon.webp',
    pkg: '1v1.lol',
    version: '1.0.0'
  }

  async open () {
    const win = window.wm.createWindow({
      title: this.meta.name,
      icon: this.meta.icon,
      width: 700,
      height: 500
    })

    const xor = {
      randomMax: 100,
      randomMin: -100,

      encode: (str) => {
        if (!str) return str
        return encodeURIComponent(
          str
            .toString()
            .split('')
            .map((char, ind) =>
              ind % 2 ? String.fromCharCode(char.charCodeAt() ^ 2) : char
            )
            .join('')
        )
      },
      decode: (str) => {
        if (!str) return str
        const [input, ...search] = str.split('?')

        return (
          decodeURIComponent(input)
            .split('')
            .map((char, ind) =>
              ind % 2 ? String.fromCharCode(char.charCodeAt(0) ^ 2) : char
            )
            .join('') + (search.length ? '?' + search.join('?') : '')
        )
      }
    }

    win.content.style.background = 'var(--base)'
    win.content.innerHTML = `
      <iframe src="/service/${xor.encode('https:/1v1.lol/')}" style="width: 100%;height: 100%;border: none;"/>
    `

    return win
  }
}
