import React from 'react';

import Icon from 'react-native-vector-icons/MaterialIcons';
// import { formatPrice } from '../../util/format';
import colors from '../../styles/colors';

import {
  Container,
  Products,
  Product,
  ProductInfo,
  ProductImage,
  ProductDetails,
  ProductTitle,
  ProductPrice,
  ProductDelete,
  ProductControls,
  ProductControlButton,
  ProductAmount,
  ProductSubtotal,
  TotalContainer,
  TotalText,
  TotalAmount,
  Order,
  OrderText,
  EmptyContainer,
  EmptyText,
} from './styles';

export default function Cart() {
  return (
    <Container>
      <Products>
        <Product key={1}>
          <ProductInfo>
            <ProductImage
              source={{
                uri:
                  'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/modulo-redux/tenis3.jpg',
              }}
            />
            <ProductDetails>
              <ProductTitle>Tênis Adidas Duramo Lite 2.0</ProductTitle>
              <ProductPrice>R$129,60</ProductPrice>
            </ProductDetails>
            <ProductDelete>
              <Icon name="delete-forever" sie={24} color={colors.primary} />
            </ProductDelete>
          </ProductInfo>
          <ProductControls>
            <ProductControlButton onPress={() => {}}>
              <Icon
                name="remove-circle-outline"
                size={20}
                color={colors.primary}
              />
            </ProductControlButton>
            <ProductAmount value="1" />
            <ProductControlButton onPress={() => {}}>
              <Icon
                name="add-circle-outline"
                size={20}
                color={colors.primary}
              />
            </ProductControlButton>
            <ProductSubtotal>1200</ProductSubtotal>
          </ProductControls>
        </Product>
      </Products>
      <TotalContainer>
        <TotalText>Total</TotalText>
        <TotalAmount>1920</TotalAmount>
        <Order>
          <OrderText>FINALIZAR PEDIDO</OrderText>
        </Order>
      </TotalContainer>
      <EmptyContainer>
        <Icon name="remove-shopping-cart" size={64} color="#eee" />
        <EmptyText>Seu carrinho está vazio.</EmptyText>
      </EmptyContainer>
    </Container>
  );
}
