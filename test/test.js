/* global require, describe, it */
'use strict';

// MODULES //

var chai = require( 'chai' ),
	cp = require( './../lib' );


// VARIABLES //

var expect = chai.expect,
	assert = chai.assert;


// TESTS //

describe( 'Makefile', function tests() {

	it( 'should export a function', function test() {
		expect( cp ).to.be.a( 'function' );
	});

	it( 'should export a function for creating a Makefile synchronously', function test() {
		expect( cp.sync ).to.be.a( 'function' );
	});

});
