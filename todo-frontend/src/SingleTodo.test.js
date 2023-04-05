import '@testing-library/jest-dom';
import { SignleTodo } from './Todos/List';
import { render, screen } from '@testing-library/react'

 test ('render content', () => {
    const mockHandler = jest.fn();

    const todo = {
        text: 'Prova',
        done: true
    };

    render(<SignleTodo todo={todo} onClickComplete={mockHandler} onClickDelete={mockHandler}/>);
    const element = screen.getByText('Prova');
    expect(element).toBeDefined();
 })
