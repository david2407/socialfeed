import { existParameter } from '../components/widget/Widget'
import { render, screen } from '@testing-library/react'
import Widget from '../components/widget/Widget'

describe('widget component test props', () => {

    describe('urlInformation is send', () => {
        test('should return false if url prop is send', () => {
            const result = existParameter("http://algo.com")
            expect(result).toBe(false)
        })

        test('should return true if url prop is empty', () => {
            const result = existParameter("")
            expect(result).toBe(true)
        })
    })

})

describe('Widget render', () => {
    test('check render title list', () => {
        render(<Widget url="https://api.massrelevance.com/MassRelDemo/kindle.json" updateInterval={30000} limit={10} />)
        const h1 = screen.getByText('Post List')
        expect(h1).toBeInTheDocument()
    })
   
})


