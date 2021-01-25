const CustomError = require("../extensions/custom-error");

const chainMaker = {
  chain: [],
  getLength() {
    return this.chain.length
  },
  addLink(value) {
    let obj = {...this}
    obj.chain = [...this.chain]
    obj.chain.push(`( ${value} )`)
    return obj
  },
  removeLink(position) {
    let arr = [...this.chain]
    if(position >= 1 && position <=arr.length) {
      arr.splice(position - 1, 1)
      let obj = {...this}
      obj.chain = arr
      return obj
    } else {
      throw Error
    }
  },
  reverseChain() {
    let arr = [...this.chain].reverse()
    let obj = {...this}
    obj.chain = arr
    return obj
  },
  finishChain() {
    return this.chain.join("~~");
  }
}

module.exports = chainMaker;
