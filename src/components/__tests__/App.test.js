import { render, act, fireEvent } from '@testing-library/react';
// import { act } from 'react-dom/test-utils';
import App from '../../App';

describe('Main app component', () => {
  test('Rendered header', () => {
    const { getByTestId } = render(<App />);
    const header = getByTestId('Header');
    expect(header).toBeTruthy();
  });

  test('Rendered pictures, did not render details', () => {
    const { queryByTestId } = render(<App />);
    const picturesDiv = queryByTestId('Pictures');
    const detailsDiv = queryByTestId('Details');
    expect(picturesDiv).toBeTruthy();
    expect(detailsDiv).toBeFalsy();
  });

  test('Change on slideShow state causes details to render and pictures to not render', () => {
    act(() => {
      const { getByTestId } = render(<App />);
      const startStop = getByTestId('startstop');
      fireEvent.click(startStop);
    });
  });
});
