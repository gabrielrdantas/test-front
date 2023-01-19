import React, { useEffect } from 'react';
import styled from 'styled-components';
import Header from '../../components/header';
import ProductList from '../../components/product-list';
import PaymentDescription from '../../components/payment-description';
import { useFetchBasket } from '../../services/basket/hooks';
import SuccessMessage from '../../components/success-message';
import PaymentUserInfo from '../../components/payment-user-info';

const Confirmation: React.FC = () => {
    useFetchBasket();
    return (
        <>
            <Header itemSelected={2} />
            <PageContainer>
                <SuccessMessage />
                <PaymentUserInfo />
                <ProductList sizeImage='thumbnail' isShowPrice={false} />
                <PaymentDescription />
            </PageContainer>
        </>
    )
}

const PageContainer = styled.section`
    padding: 0 10px;
`;

export default Confirmation