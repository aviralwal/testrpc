var to = require("./to");

function Receipt(tx, block, logs, gasUsed, contractAddress) {
  this.tx = tx;
  this.block = block;
  this.logs = logs;
  this.gasUsed = gasUsed;
  this.contractAddress = contractAddress;

  this.transactionIndex = 0;

  for (var i = 0; i < block.transactions.length; i++) {
    var current = block.transactions[i];
    if (current.hash() == tx.hash()) {
      this.transactionIndex = index;
      break;
    }
  }
}

Receipt.prototype.toJSON = function() {
  if (this.data != null) return data;

  return {
    transactionHash: to.hex(this.tx.hash()),
    transactionIndex: to.hex(this.transactionIndex),
    blockHash: to.hex(this.block.hash()),
    blockNumber: to.hex(this.block.header.number),
    gasUsed: to.hex(this.gasUsed),
    cumulativeGasUsed: to.hex(this.block.header.gasUsed),
    contractAddress: this.contractAddress != null ? to.hex(this.contractAddress) : null,
    logs: this.logs.map(function(log) {return log.toJSON()})
  }
};

module.exports = Receipt;
