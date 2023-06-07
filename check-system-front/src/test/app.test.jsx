import { render, screen } from '@testing-library/react';
import App from '../App';

describe('App', () => {
  it('render app', () => {
    render(<App />);

    expect(screen.getByText("SplitMyBill")).toBeInTheDocument();
    expect(screen.getByText("New table")).toBeInTheDocument();
    expect(screen.getByText("Create Report")).toBeInTheDocument();

  });

});