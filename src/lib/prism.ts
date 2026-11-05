import Prism from './prism-init'

// Import language grammars in strict dependency order
// 1. Base grammars
import 'prismjs/components/prism-clike'
import 'prismjs/components/prism-javascript'

// 2. Grammars with direct dependencies
import 'prismjs/components/prism-typescript'
import 'prismjs/components/prism-go'

// 3. General utility & system grammars
import 'prismjs/components/prism-bash'
import 'prismjs/components/prism-json'
import 'prismjs/components/prism-python'
import 'prismjs/components/prism-http'

export default Prism
