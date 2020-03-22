const chainMaker = {

  accum: [],
  toReturn: '',
  getLength() {
    return this.accum.length;
  },
  addLink(value) {
    typeof value === 'undefined' ?  this.accum.push(`( )`) :this.accum.push(`( ${value} )`) ;
    return this
  },
  removeLink(position) {
    if(position > 0 && position < this.getLength()){
      this.accum.splice(position-1,1);
    }
    else {
      this.accum = [];
      throw Error()
    }
    return this
  },
  reverseChain() {
    this.accum.reverse();
    return this
  },
  finishChain() {
    this.toReturn = this.accum.join('~~');
    this.accum = [];
    return this.toReturn
  }

};

module.exports = chainMaker;
