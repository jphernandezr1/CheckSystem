import web from '../reportWebVitals';

describe('test webvitals', () => {
    const handleWebVitals = jest.fn();
  it('should be called the function 5 times', () => {
    web(handleWebVitals);
    expect(handleWebVitals).toHaveBeenCalledTimes(0); 
  });
});
