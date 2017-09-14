suite('Global Tests',() => {
    test('页面有title',() => {
        assert(document.title && document.title.match(/\S/) && document.title.toUpperCase() !== 'DOCUMENT')
    }) 
})