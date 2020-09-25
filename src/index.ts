function getPropertyNameInternal<T = unknown>(expression: (instance: T) => any, options: {
    isDeep: boolean
}) {
    let propertyThatWasAccessed = "";
    var proxy: any = new Proxy({} as any, {
        get: function(_: any, prop: any) {
            if(options.isDeep) {
                if(propertyThatWasAccessed)
                    propertyThatWasAccessed += ".";
                
                propertyThatWasAccessed += prop;
            } else {
                propertyThatWasAccessed = prop;
            }
            return proxy;
        }
    });
    expression(proxy);

    return propertyThatWasAccessed;
}

export function getPropertyName<T = unknown>(expression: (instance: T) => any) {
    return getPropertyNameInternal(expression, {
        isDeep: false
    });
}

export function getDeepPropertyName<T = unknown>(expression: (instance: T) => any) {
    return getPropertyNameInternal(expression, {
        isDeep: true
    });
}