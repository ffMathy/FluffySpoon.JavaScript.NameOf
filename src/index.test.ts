import { getPropertyName, getDeepPropertyName } from "./index";

type User = {
    firstName: string;

    nested: {
        someProperty: string;

        deepNested: {
            someOtherProperty: string;
        }
    }
}

test('getDeepPropertyName returns property name with nesting level 0', () => {
    expect(getDeepPropertyName<User>(x => x.firstName)).toBe("firstName");
});

test('getDeepPropertyName returns property name with nesting level 1', () => {
    expect(getDeepPropertyName<User>(x => x.nested.someProperty)).toBe("nested.someProperty");
});

test('getDeepPropertyName returns property name with nesting level 2', () => {
    expect(getDeepPropertyName<User>(x => x.nested.deepNested.someOtherProperty)).toBe("nested.deepNested.someOtherProperty");
});

test('getPropertyName returns property name with nesting level 0', () => {
    expect(getPropertyName<User>(x => x.firstName)).toBe("firstName");
});

test('getPropertyName returns property name with nesting level 1', () => {
    expect(getPropertyName<User>(x => x.nested.someProperty)).toBe("someProperty");
});

test('getPropertyName returns property name with nesting level 2', () => {
    expect(getPropertyName<User>(x => x.nested.deepNested.someOtherProperty)).toBe("someOtherProperty");
});