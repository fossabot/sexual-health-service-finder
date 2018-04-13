function joinTruthyValues(obj) {
  return Object.values(obj)
    .filter(value => value)
    .join(', ');
}

function addressFormatter(address) {
  if (!address || Object.keys(address).length === 0) { return undefined; }

  let addressLines = [];
  if (address.addressLines) {
    addressLines = address.addressLines;
  }
  if (address.postcode) {
    addressLines.push(address.postcode);
  }
  return joinTruthyValues(addressLines);
}

module.exports = {
  addressFormatter,
};
