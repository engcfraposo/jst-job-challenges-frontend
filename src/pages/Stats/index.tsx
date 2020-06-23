/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React, { useState, FormEvent, useEffect } from 'react';
import axios from 'axios';
import {
  Container,
  Title,
  Search,
  IconButton,
  Icon,
  Content,
  RepositoryList,
  RepositoryOption,
} from './styles';
import logo from '../../assets/search.svg';

const Stats: React.FC = () => {
  interface GITHUBResponse {
    id: number;
    login: string;
    name: string;
  }

  interface Language {
    JavaScript: number;
    TypeScript: number;
    PHP: number;
    HTML: number;
    CSS: number;
  }

  const techs = ['CSS', 'HTML', 'JavaScript', 'PHP', 'TypeScript'];

  const [selectedRepository, setSelectedRepository] = useState<string>('0');
  const [login, setLogin] = useState<string>('');
  const [repositories, setRepositories] = useState<GITHUBResponse[]>([]);
  const [stats, setStats] = useState({
    JavaScript: 0,
    TypeScript: 0,
    PHP: 0,
    HTML: 0,
    CSS: 0,
  });

  useEffect(() => {
    if (selectedRepository === '0') {
      return;
    }
    axios
      .get<Language>(
        `https://api.github.com/repos/${login}/${selectedRepository}/languages`,
      )
      .then((response) => setStats(response.data));
  }, [login, selectedRepository]);

  async function handleLogin(event: FormEvent) {
    event.preventDefault();
    const response = await axios.get<GITHUBResponse[]>(
      `https://api.github.com/users/${login}/repos`,
    );
    return setRepositories(response.data);
  }

  return (
    <>
      <Title>Análise de Portifólio do Github</Title>
      <Container onSubmit={handleLogin}>
        <Search
          type="text"
          name="user"
          id="user"
          value={login}
          onChange={(e) => setLogin(e.target.value)}
          placeholder="Coloque seu Username"
        />

        <IconButton type="submit">
          <Icon src={logo} />
        </IconButton>
      </Container>

      <RepositoryList
        name="repository"
        id="repository"
        value={selectedRepository}
        onChange={(e) => setSelectedRepository(e.target.value)}
      >
        <RepositoryOption value="0">Todos</RepositoryOption>

        {repositories.map((repository) => (
          <RepositoryOption key={repository.id} value={repository.name}>
            {repository.name}
          </RepositoryOption>
        ))}
      </RepositoryList>

      {Object.keys(stats).map((item) => (
        <h1>{item}:</h1>
      ))}
      <Content />
    </>
  );
};

export default Stats;
