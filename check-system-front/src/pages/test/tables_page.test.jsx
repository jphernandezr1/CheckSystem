import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import axios from 'axios';
import Tablespage from '../tables_page';

// Mockear axios
jest.mock('axios');

describe('Tablespage', () => {
  beforeEach(() => {
    jest.clearAllMocks(); 
  });

  test('should  create tables', async () => {
    const mockTables = [
      { id: 1, num_mesa: 1, active: true, Total_cuenta: "$100.0" },
      { id: 2, num_mesa: 2, active: true, Total_cuenta:  "$150.0" },
    ];

    axios.get.mockResolvedValueOnce({ data: { table: mockTables } });

    render(<Tablespage />);

    await screen.findByText('New table'); 

    expect(screen.getByText('1')).toBeInTheDocument();
    expect(screen.getByText('2')).toBeInTheDocument();
    expect(screen.getByText('$100.0')).toBeInTheDocument();
    expect(screen.getByText('$150.0')).toBeInTheDocument();
  });

  test('should filter', async () => {
    // Datos de ejemplo para simular la respuesta de la API
    const mockTables = [
      { id: 1, num_mesa: 1, active: true, Total_cuenta: 100 },
      { id: 2, num_mesa: 2, active: true, Total_cuenta: 150 },
    ];

    axios.get.mockResolvedValueOnce({ data: { table: mockTables } });

    render(<Tablespage />);

    await screen.findByText('New table'); 

    const searchInput = screen.getByPlaceholderText('Find Table');

    fireEvent.change(searchInput, { target: { value: 1 } });

    expect(screen.getByText('1')).toBeInTheDocument();
  });

  test('should form', async () => {
    const mockTables = [];

    axios.get.mockResolvedValueOnce({ data: { table: mockTables } });

    render(<Tablespage />);

    await screen.findByText('New table'); 

    expect(screen.queryByText('Please enter the table number:')).not.toBeInTheDocument();

    const newTableButton = screen.getByText('New table');
    fireEvent.click(newTableButton);

    expect(screen.getByText('Please enter the table number:')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Table Number')).toBeInTheDocument();
  });

  test('should create table', async () => {
    const mockTables = [];
    const mockTables_2 = [
        { id: 1, num_mesa: 1, active: true, Total_cuenta: 100 },
        { id: 2, num_mesa: 2, active: true, Total_cuenta: 150 },
      ];

    axios.get.mockResolvedValueOnce({ data: { table: mockTables } });
    axios.post.mockResolvedValueOnce({ data: { id: 1, num_mesa: 3, active: true, Total_cuenta: 0 } });
    axios.get.mockResolvedValueOnce({ data: { table: mockTables_2 } });


    render(<Tablespage />);

    await screen.findByText('New table'); 

    const newTableButton = screen.getByText('New table');
    fireEvent.click(newTableButton);

    const tableNumberInput = screen.getByPlaceholderText('Table Number');
    fireEvent.change(tableNumberInput, { target: { value: '3' } });

    const createButton = screen.getByText('Create');
    fireEvent.click(createButton);

    await screen.findByText('New table'); 
    expect(screen.getByText('New table')).toBeInTheDocument();
  });
});
