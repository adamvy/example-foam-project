foam.CLASS({
    package: 'example',
    name: 'Hello',
    properties: [
        {
            class: 'String',
            name: 'name',
        },
        {
            class: 'String',
            name: 'output',
            visibility: 'read-only',
            expression: function(name) { return `Hello ${name}!`; }
        }
    ]
});