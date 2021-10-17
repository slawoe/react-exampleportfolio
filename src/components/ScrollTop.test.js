const ScrollTop = require("./ScrollTop")
// @ponicode
describe("ScrollTop.default", () => {
    test("0", () => {
        let callFunction = () => {
            ScrollTop.default()
        }
    
        expect(callFunction).not.toThrow()
    })
})
