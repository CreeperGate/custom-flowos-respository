export default class GeforceNow {
  meta = {
    name: 'Geforce Now',
    description: 'Play any game you want on the web! No download required!',
    icon: 'https://raw.githubusercontent.com/CreeperGate/custom-flowos-respository/main/assets/geforcenowicon.ico',
    pkg: 'nvidia.geforcenow',
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
      <iframe src="/service/${xor.encode('https://play.geforcenow.com/mall/#/layout/games')}" style="width: 100%;height: 100%;border: none;"/>
    `

    return win
  }
}
