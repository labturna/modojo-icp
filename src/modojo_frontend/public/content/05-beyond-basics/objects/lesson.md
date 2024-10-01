Objects, like [records](../records), allow you to group data together:

```motoko
let obj = object {
  public let x = 1;
  public let y = 2;
};

obj.x; // 1
obj.y; // 2
```

Unlike records, objects can contain functions:

```motoko
let obj = object {
  public let x = 1;
  public let y = 2;

  public func sum() : Nat {
    x + y;
  };
};

obj.sum(); // 3
```

Variables and functions defined on the object are sometimes referred to as object members. Functions defined on the object are called methods.

Each object member has a visibility associated with it:

- `private` - the member is only accessible from within the object.
- `public` - the member is accessible from outside the object.

By default, object members are `private`. Consider the following example:

```motoko
let c = object {
  var counter = 0;

  public func increment() {
    counter += 1;
  };

  public func getCount() : Nat {
    counter;
  };
};

c.counter; // Error: field counter does not exist

c.increment();
c.getCount(); // 1
```

In the example you can't access the `counter` field directly, because it's private to the object. To access it, you must use the public `getCount()` function.

## Exercise

Create an object with two fields: `firstName` and `lastName`.

Add a public function `getFullName()` that returns the full name of the person.

Store the object in the `person` variable and print out the full name.
