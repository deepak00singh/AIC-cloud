import Prism from 'prismjs'

// Explicitly initialize global Prism before any grammars or plugins load
if (typeof window !== 'undefined') {
  ;(window as unknown as { Prism: typeof Prism }).Prism = Prism
}
if (typeof globalThis !== 'undefined') {
  ;(globalThis as unknown as { Prism: typeof Prism }).Prism = Prism
}

export default Prism
