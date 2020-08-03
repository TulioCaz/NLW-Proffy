import React from 'react';

import logoImg from '../../assets/images/logo.svg'

import backIcon from '../../assets/images/icons/back.svg'

import './styles.css'

interface IPageHeaderProps {
  title: string;

}

const PageHeader: React.FC<IPageHeaderProps> = (props) => {
  return (
    <header className="page-header">
      <div className="top-bar-container">
        <a href="/">
          <img src={backIcon} alt="Voltar"/>
        </a>
        <img src={logoImg} alt="Proffy"/>

      </div>

      <div className="header-content">
        <strong>{props.title}</strong>

        {props.children}
      </div>


    </header>
  );
}

export default PageHeader;
