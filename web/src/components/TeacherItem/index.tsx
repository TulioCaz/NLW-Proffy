import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

const TeacherItem: React.FC = () => {
  return (
    <article className="teacher-item">
      <header>
        <img
          src="https://avatars1.githubusercontent.com/u/53826053?s=460&u=eb7e8aa3b968395fd621139be07362361c4e7279&v=4"
          alt="Túlio Camargo"
        />
        <div>
          <strong>Túlio Camargo</strong>
          <span>Química</span>
        </div>
      </header>

      <p>
        Entusiasta de tudo relacionado a química & apaixonado por explodir
        coisas.
        <br />
        <br />
        Professor, pesquisador, e maluco. Passou muito tempo fazendo
        experiências malucas no porão do laboratório, agora me sinto pronto para
        partilhar das minhas descobertas com alunos interessados. Prometo que
        serão aulas explosivas. 🧪 ⚗️ 💥
      </p>

      <footer>
        <p>
          Preço/hora
          <strong>R$ 50,00</strong>
        </p>

        <button type="button">
          <img src={whatsappIcon} alt="Whatsapp" />
          Entrar em contato
        </button>
      </footer>
    </article>
  );
};

export default TeacherItem;
