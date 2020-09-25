# What is this?
[`@fluffy-spoon/name-of`](https://www.npmjs.com/package/@fluffy-spoon/name-of) makes it possible to get the name of a property at runtime, even if that type does not exist at runtime. Think of it as the `nameof` keyword in C#, but for TypeScript.

# Installing
`npm install @fluffy-spoon/name-of`

# Usage
```typescript
import { getPropertyName, getDeepPropertyName } from '@fluffy-spoon/name-of';

interface SomeType {
  foo: boolean;

  someNestedObject: {
      bar: string;
  }
}

console.log(getPropertyName<SomeType>(x => x.foo)); //prints "foo"
console.log(getPropertyName<SomeType>(x => x.someNestedObject)); //prints "someNestedObject"
console.log(getPropertyName<SomeType>(x => x.someNestedObject.bar)); //prints "bar"

console.log(getDeepPropertyName<SomeType>(x => x.foo)); //prints "foo"
console.log(getDeepPropertyName<SomeType>(x => x.someNestedObject)); //prints "someNestedObject"
console.log(getDeepPropertyName<SomeType>(x => x.someNestedObject.bar)); //prints "someNestedObject.bar"
```