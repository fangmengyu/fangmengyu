suite('Index Test',()=>{
    test('title是否正确',() => {
        assert(document.title === '青尘');
    }) 

    test("是否包含指向日程页的链接",()=>{
        assert(document.querySelector('a[href="/schedule"]'));
    })
    
})
