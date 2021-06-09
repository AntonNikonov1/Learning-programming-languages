class Node {
  constructor(value = null, left = null, right = null) {
    this.value = value
    this.right = right
    this.left = left
  }

  toString() {
    return JSON.stringify(this)
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null
  }
  // Rekurencyjne przechodzenie w kolejności. Przyjmuje funkcję zwrotną, proces, która jest stosowana do każdego węzła
  printInOrder(process) {
    let inOrder = (node) => {
      if (node.left !== null) inOrder(node.left)
      process.call(this, node)

      if (node.right !== null) inOrder(node.right)
    }
    inOrder(this.root)
  }
  // rekurencyjne przechodzenie w przedsprzedaży.
  printPreOrder(process) {
    let preOrder = (node) => {
      process.call(this, node)
      if (node.left !== null) preOrder(node.left)
      if (node.right !== null) preOrder(node.right)
    }
    preOrder(this.root)
  }
  // Rekurencyjne przechodzenie po zamówieniu.
  printPostOrder(process) {
    let postOrder = (node) => {
      if (node.left !== null) postOrder(node.left)
      if (node.right !== null) postOrder(node.right)
      process.call(this, node)
    }
    postOrder(this.root)
  }

  traverseBFS() {
    let result = []
    let queue = [this.root]
    while (queue.length > 0) {
      let node = queue.shift()
      result.push(node.value)

      if (node.left) queue.push(node.left)
      if (node.right) queue.push(node.right)
    }
    return result
  }

  traverseZigZag() {
    let stack = [this.root]
    let nextLevel = []
    let fromLeft = true
    let result = []

    while (stack.length) {
      let len = stack.length

      for (let i = 0; i < len; i++) {
        let el = stack.pop()
        result.push(el.value)
        if (fromLeft) {
          el.left && nextLevel.push(el.left)
          el.right && nextLevel.push(el.right)
        } else {
          el.right && nextLevel.push(el.right)
          el.left && nextLevel.push(el.left)
        }
      }

      fromLeft = !fromLeft
      stack = nextLevel
      nextLevel = []
    }
    return result
  }
  // Szukam znaczenia w drewnie i drutach.
  find(value) {
    let traverse = (node) => {
      if (node == null || node.value === value) {
        return node
      } else if (value < node.value) {
        traverse(node.left)
      } else {
        traverse(node.right)
      }
    }
    return traverse(this.root)
  }
  // Biorę wartość do wstawienia do drzewa.
  insert(value) {
    if (this.root === null) {
      this.root = new Node(value)
    } else {
      let current = this.root
      while (true) {
        if (value > current.value) {
          if (current.right === null) {
            current.right = new Node(value)
            break
          } else {
            current = current.right
          }
        } else if (value < current.value) {
          if (current.left === null) {
            current.left = new Node(value)
            break
          } else {
            current = current.left
          }
        }
      }
    }
  }
  // Otrzymuję minimalną wartość z drzewa.
  getMin(node = this.root) {
    while (node.left) {
      node = node.left
    }
    return node.value
  }
  // otrzymuję minimalną wartość z drzewa.
  getMax(node = this.root) {
    while (node.right) {
      node = node.right
    }
    return node.value
  }
  // Usuwam wartość z drzewa.
  remove(val, node = this.root) {
    if (!node) return null

    if (val < node.value) {
      node.left = this.remove(val, node.left)
    } else if (val > node.value) {
      node.right = this.remove(val, node.right)
    } else {
      if (!node.left) {
        return node.right
      } else if (!node.right) {
        return node.left
      } else {
        node.value = this.getMin(node.right)
        node.right = this.remove(node.value, node.right)
      }
    }
    return node
  }
  // znajduję najmniejszego/najmniejszego wspólnego przodka z dwiema wartościam
  leastCommonAncestor(n1, n2) {
    if (this.root == null) return this.root

    let queue = [this.root]
    while (queue.length) {
      let root = queue.shift()
      if (
        root.value === n1.value ||
        root.value === n2.value ||
        (root.value >= n1.value && root.value <= n2.value) ||
        (root.value <= n1.value && root.value >= n2.value)
      ) {
        return root
      } else {
        if (root.value > n1.value && root.value > n2.value) {
          root.left && queue.push(root.left)
        } else {
          root.right && queue.push(root.right)
        }
      }
    }
    return null
  }

  findHeight(root = this.root) {
    let height = (node) => {
      if (node === null) return -1

      let lefth = height(node.left)
      let righth = height(node.right)

      return 1 + Math.max(lefth, righth)
    }
    return height(root)
  }
  // sprawdzam czy drzewo binarne jest zbilansowane czy nie
  isBalanced() {
    let balanced = function (node) {
      if (node === null) return true
      let heightDifference = Math.abs(
        this.findHeight(node.left) - this.findHeight(node.right),
      )
      if (heightDifference > 1) {
        return false
      } else {
        return balanced(node.left) && balanced(node.right)
      }
    }
    return balanced(this.root)
  }
  // Zwracam wartość logiczną wskazującą, czy dana wartość jest zawarta w drzewie.
  contains(value) {
    return !!this.find(value)
  }
  // Zwracam liczbę całkowitą wskazującą liczbę węzłów w drzewie.
  size() {
    let length = 0
    this.printInOrder(() => {
      length++
    })
    return length
  }
  // Zwracam tablicę zawierającą węzły drzewa w kolejności rosnącej.
  toArray() {
    let arr = []
    this.printInOrder((node) => {
      arr.push(node.value)
    })
    return arr
  }
  // Zwracam drzewo w kolejności jako serializowany ciąg JSON.
  toString() {
    let str = ''
    this.printInOrder((node) => {
      str += JSON.stringify(node.value) + '\n'
    })
    return str
  }
  // Zwracam węzeł z n-tą największą wartością w drzewie.
  nthLargest(n) {
    let arr = this.toArray()
    return arr[arr.length - (n + 1)]
  }
  // Zwracam węzeł z n-tą najmniejszą wartością w drzewie.
  nthSmallest(n) {
    let arr = this.toArray()
    return arr[n]
  }
}

const tree = new BinarySearchTree()
tree.insert(6)
tree.insert(2)
tree.insert(8)
tree.insert(0)
tree.insert(4)
tree.insert(7)
tree.insert(9)
tree.insert(3)
tree.insert(5)

console.log(tree.findHeight())

console.log(tree.leastCommonAncestor(new Node(2), new Node(8)))

console.log(tree.leastCommonAncestor(new Node(2), new Node(4)))

console.log(tree.contains(15))
console.log(tree.contains(7))
console.log(tree.toArray())
console.log(tree.nthLargest(1))
console.log(tree.nthLargest(0))
console.log(tree.traverseZigZag())
console.log(tree.traverseBFS())

console.log(tree.remove(4))
console.log(tree.traverseBFS())
console.log(tree.getMin())
console.log(tree.getMax())
