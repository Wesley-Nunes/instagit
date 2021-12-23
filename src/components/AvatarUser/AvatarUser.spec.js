
import React from 'react';
import { render } from '@testing-library/react';
import AvatarUser from './AvatarUser';

// happy path - renderizar uma imagem a partir de uma url
// Cenário 1 - testar se o componente está renderizando uma imagem a partir de uma url
// Cenário 2 - testar a acessibilidade do componente de imagem alt tag
// Cenário 3 - validar retorno do componente se é do tipo <StyledImg/>

describe('AvatarUser component', () => {
  test('should render image from url', () => {
    // arrange
    const mockUrl = "myUrlTest";
    const { getByTestId } = render(<AvatarUser imgUrl={mockUrl} imgName="myImg"/>);
    const element = getByTestId('avatar-img');
    
    //action

    // assert
    expect(element).toBeInTheDocument();
    expect(element.src.split("http://localhost/")[1]).toBe(mockUrl);
  })

  test('should render alt tag from image name', () => {
    // arrange
    const mockAlt = "myImg";
    const { getByTestId } = render(<AvatarUser imgUrl="test" imgName={mockAlt}/>);
    const element = getByTestId('avatar-img');

    //action

    // assert
    expect(element).toBeInTheDocument();
    expect(element.alt).toBe(mockAlt);
  })
})
