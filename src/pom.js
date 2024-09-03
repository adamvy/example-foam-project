foam.POM({
    files: [
        { name: "Hello", flags: "js|java" },
    ],
    // custom java deps for nanos
    javaDependencies: [
        'org.apache.commons:commons-compress:1.23.0'
    ]
})