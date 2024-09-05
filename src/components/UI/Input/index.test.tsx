import {fireEvent, render} from '@testing-library/react'
import Input from '.';

describe('Testing UI shared input', () => {
    it('test render' , () => {
        const { container } = render(<Input/>);
        // eslint-disable-next-line testing-library/no-container, testing-library/no-node-access
        const input = container.querySelector('input') as any;

        expect(input).toBeTruthy();
    })

    it('test value change' , () => {
        const { container } = render(<Input/>);
        // eslint-disable-next-line testing-library/no-container, testing-library/no-node-access
        const input = container.querySelector('input') as any;
        fireEvent.change(input, { target: { value: 'test' } });
        expect(input.value).toBe('test')
    })
})

export {}