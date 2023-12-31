// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';
import 'resize-observer-polyfill'; 
import { configure } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

configure({ adapter: new Adapter() });


//import 'jest-extended';
    
//   jest.mock('./hooks/useResizeObserver', () => () => ({
//     __esModule: true,
//     default: jest.fn().mockImplementation(() => ({
//         observe: jest.fn(),
//         unobserve: jest.fn(),
//         disconnect: jest.fn(),
//     })),
//   }));  

// global.ResizeObserver = jest.fn().mockImplementation(() => ({
//     observe: jest.fn(),
//     unobserve: jest.fn(),
//     disconnect: jest.fn(),
// }))