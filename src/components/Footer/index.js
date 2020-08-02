/* eslint-disable react/jsx-no-target-blank */
import React from 'react';
import { FooterBase } from './styles';

function Footer() {
  return (
    <FooterBase>
      <a href="https://www.alura.com.br/">
        <img src="https://www.alura.com.br/assets/img/alura-logo-white.1570550707.svg" alt="Logo Alura" />
      </a>
      <p>
        Orgulhosamente criado durante a
        {' '}
        <a href="https://www.alura.com.br/">
          Imersão React da Alura
        </a>
        <br />
        <a href="https://github.com/FabianoPretoJr" target="_blank">
          GitHub
        </a>
        <text> | </text>
        <a href="https://www.linkedin.com/in/fabiano-preto-junior-734797192/" target="_blank">
          Linkedin
        </a>
      </p>
    </FooterBase>
  );
}

export default Footer;
