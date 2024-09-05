import {fireEvent, render, screen} from '@testing-library/react'
import PrimatyButton from './Primary';
import userEvent from '@testing-library/user-event'

describe('Testing UI shared button', () => {
    it('test button render' , () => {
        render(<PrimatyButton text='Test' size='md' />);
        expect(screen.getByRole('button')).toBeTruthy();
    })

    it('test button text' , () => {
        const mockCallback = jest.fn();

        render(<PrimatyButton text='Test' size='md' onClick={mockCallback} />);
        expect(screen.getByText('Test', { selector: 'button' })).toBeTruthy();
    })

    it('test button disabled' , () => {
        render(<PrimatyButton text='Test' size='md' disabled={true} />);
        expect((screen.getByRole('button') as any).disabled).toBeTruthy();
    })

    it('test button click' , () => {
        const mockCallback = jest.fn();

        render(<PrimatyButton text='Test' size='md' onClick={mockCallback} />);

        fireEvent.click(screen.getByRole('button'));
        expect(mockCallback).toHaveBeenCalled();
    })
})

export {}