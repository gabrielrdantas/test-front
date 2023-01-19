import React, { useEffect } from 'react';
import styled from 'styled-components';
import Header from '../../components/header';
import ProductList from '../../components/product-list';
import PaymentDescription from '../../components/payment-description';
import ButtonNextStepBasket from '../../components/buttons/basket';

import { useFetchBasket } from '../../services/basket/hooks';
const Basket: React.FC = () => {
    useFetchBasket();
    return (
        <>
            <Header itemSelected={0} />
            <PageContainer>
                <ProductList />
                <PaymentDescription />
                <ButtonNextStepBasket />
            </PageContainer>
        </>
    )
}

const PageContainer = styled.section`
    padding: 0 10px;
`;

export default Basket