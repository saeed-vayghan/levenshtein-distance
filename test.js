'use strict';

const { expect } = require('chai');
const levenshtein = require('./levenshtein');

describe('#Testing Env', function() {
  it('should test the implementation of Levenshtein Distance', async function() {
    expect(levenshtein('', '').distance).to.be.equal(0);
    expect(levenshtein('fast', '').distance).to.be.equal(4);
    expect(levenshtein('', 'faster').distance).to.be.equal(6);
    expect(levenshtein('fast', 'faster').distance).to.be.equal(2);
    expect(levenshtein('meilenstein', 'levenshtein').distance).to.be.equal(4);

    const a = 'In the modern era, software is commonly delivered as a service: called web apps, or software-as-a-service. The twelve-factor app is a methodology for building software-as-a-service apps that:';
    const b = 'The contributors to this document have been directly involved in the development and deployment of hundreds of apps, and indirectly witnessed the development, operation, and scaling of hundreds of thousands of apps via our work on the Heroku platform.';
    
    expect(levenshtein(a, b).distance).to.be.equal(189);
  });
});
