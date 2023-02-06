import { Container } from '@/components/Atoms/Container/Container';
import { ImageBanner } from '@/components/Atoms/ImageBanner/ImageBanner';
import { Title } from '@/components/Atoms/Title/Title';
import { TemplateMain } from '@/components/Templates/TemplateMain/TemplateMain';
import React from 'react';
import styles from './styles.module.scss';

interface IndexProps {

}

const Index = ({}: IndexProps) => {
  

  return (<TemplateMain>
    <ImageBanner thumbnail={null} alt={null} />
    <Container display={'block'} verticalIndent={'medium'}>
      <Title align='center' content='' tag={'h2'} />
    </Container>
  </TemplateMain>);
}
export default Index;
