export default class PhantomGames {
  meta = {
    name: 'Phantom Games',
    description: 'Phantom Games, the BEST place to find fun unblocked games! Here, you can find any game you want, all in one place! Huge thanks to @BlazerHM on Youtube and 3kh0 (https://github.com/3kh0) for the site and games!',
    icon: 'https://phantomgames.dev/assets/phantom.svg',
    pkg: 'blazerhm.phantomgames',
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
      <iframe src="/service/${xor.encode('https://phantomgames.dev/')}" style="width: 100%;height: 100%;border: none;"/>
    `

    return win
  }
}
