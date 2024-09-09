import {render, screen} from '@testing-library/react'
import GoalsList from '.'

test('Testing table is rendered', async () => {
    render(<GoalsList/>);

    expect(screen.getByRole('table')).toBeTruthy();
})

export {}