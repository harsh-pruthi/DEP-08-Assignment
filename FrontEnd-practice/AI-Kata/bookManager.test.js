import { screen, fireEvent } from '@testing-library/dom';
import '@testing-library/jest-dom/extend-expect';
import fs from 'fs';
import path from 'path';
import { JSDOM } from 'jsdom';

const html = fs.readFileSync(path.resolve(__dirname, './index.html'), 'utf8');

let dom;
let container;

describe('book management system', () => {
  beforeEach(() => {
    dom = new JSDOM(html, { runScripts: 'dangerously' });
    container = dom.window.document.body;
  });

  it('renders the form correctly', () => {
    expect(container.querySelector('form')).not.toBeNull();
    expect(screen.getByLabelText(/book name:/i)).toBeInTheDocument();
  });

  it('adds a book and displays it in the table', () => {
    const input = screen.getByLabelText(/book name:/i);
    fireEvent.change(input, { target: { value: 'New Book' } });
    fireEvent.click(screen.getByText(/add book/i));

    expect(screen.getByText(/new book/i)).toBeInTheDocument();
  });

  // Additional tests...
});