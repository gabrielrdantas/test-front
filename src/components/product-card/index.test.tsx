import { render } from '@testing-library/react';
import * as ReactRouter from "react-router-dom";

import ProductCard from '.';
import { mockData } from './mock';
import { renderWithTheme } from '../../utils/helpers';

describe('Product card component', () => {

    it('should render component', () => {
       const { container } = render(
            renderWithTheme(
                <ReactRouter.BrowserRouter>
                    <ProductCard {...mockData}/>
                </ReactRouter.BrowserRouter>
            )
        ); 
        expect(container.querySelector("img")?.src).toEqual("small");
        expect(container.querySelector("h2")?.innerHTML).toEqual("Jose da Silva");
        expect(container.querySelector("p")?.innerHTML).toEqual("R$ 10.00");
    });

})
