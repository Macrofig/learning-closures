import { assert } from 'chai';

// An answer goes here

describe('Learning Closures' , () => {
  it('Smoke test', () => {
    assert('hello' === 'hello');
  });

  describe('Root scope', () => {
    it('creating a variable outside of any closure is accessible', () => {
      assert(name === 'Juan');
    });
  });

  describe('Closure scope', () => {
    it('Create variable in this scope', () => {
      // An answer goes here
      const check = typeof something;
      assert(check !== 'undefined');
    });

    it('Created variable is not accessible here', () => {
      const check = typeof something;
      assert(check === 'undefined');
    });
  });

  describe('Hoisting', () => {
    it('vars are pushed to the top of a file', () => {
      iAmHoisted = 'yep';
      assert(iAmHoisted === 'yep');
      // An answer goes here
    });
  });

  describe('what about non-function type of closures?', () => {
    let arr;
    beforeEach(() => {
      arr = [0,1,2,3,4];
    });

    describe('var', () => {
      it('var can be used by child closures', () => {
        // An answer goes here
        for (var i = 0; i < arr.length; i++) {
          assert(count === i);
          count++;
        }
      });
      it('because of hoisting, var can go from child to parent in some closures', () => {
        for (var i = 0; i < arr.length; i++) {
          // An answer goes here
          assert(count === 0);
          count = i;
        }
        assert(count === arr.length - 1)
      });
    });

    describe('const', () => {
      it('const can carry into a child closure', () => {
        // An answer goes here
        for (var i = 0; i < arr.length; i++) {
          assert(count === 0);
          break;
        }
      });
      it('const respects ALL closures, though', () => {
        for (var i = 0; i < arr.length; i++) {
          // An answer goes here
          assert(count === 0);
          break;
        }
        assert(typeof count === 'undefined');
      });
    });

    describe('let is less flexible than var, but more than const', () => {
      it('let still travels from parent to child', () => {
        // An answer goes here
        for (var i = 0; i < arr.length; i++) {
          assert(count === i);
          count++;
        }
      });
      it('but let also respects ALL closures', () => {
        for (var i = 0; i < arr.length; i++) {
          // An answer goes here
          assert(count === i);
        }
        assert(typeof count === 'undefined');
      });
    });
  });
});
