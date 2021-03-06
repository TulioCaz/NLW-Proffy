import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

import ITeacher from './ITeacher';
import api from '../../services/api';

interface ITeacherProps {
  teacher: ITeacher;
}

const TeacherItem: React.FC<ITeacherProps> = ({ teacher }) => {
  const createNewConnection = () => {
    api.post('connections', {
      user_id: teacher.id,
    });
  };

  return (
    <article className="teacher-item">
      <header>
        <img src={teacher.avatar} alt={teacher.name} />
        <div>
          <strong>{teacher.name}</strong>
          <span>{teacher.subject}</span>
        </div>
      </header>

      <p>{teacher.bio}</p>

      <footer>
        <p>
          Preço/hora
          <strong>R$ {teacher.cost}</strong>
        </p>

        <a
          target="_blank"
          onClick={createNewConnection}
          href={`https://wa.me/${teacher.whatsapp}`}
        >
          <img src={whatsappIcon} alt="Whatsapp" />
          Entrar em contato
        </a>
      </footer>
    </article>
  );
};

export default TeacherItem;
