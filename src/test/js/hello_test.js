describe( 'Jasmine Hello World Test', function () {
    it( 'is a hello world test', function () {
        expect( hello.sayHi() ).toBe( 'Hello World!' );
    } );
} );