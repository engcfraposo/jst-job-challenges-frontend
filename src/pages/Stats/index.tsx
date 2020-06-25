/* eslint-disable camelcase */
/* eslint-disable react/jsx-one-expression-per-line */
import React, { useState, FormEvent, useEffect, useMemo } from 'react';
import axios from 'axios';
import UserComponent from '../../components/UserComponent';
import RadarChartComponent from '../../components/RadarChartComponent';
import BarChartComponent from '../../components/BarChartComponent';
import LanguagesComponent from '../../components/LanguagesComponent';
import {
  Content,
  Avatar,
  Form,
  Title,
  SearchContainer,
  Search,
  NoContent,
  SearchIconButton,
  SearchIcon,
  RepositoryList,
  RepositoryOption,
  DashboardContainer,
} from './styles';
import search from '../../assets/search.svg';
import background from '../../assets/background.svg';

interface GITHUBLogin {
  id: number;
  name: string;
}

interface GITHUBUser {
  id: number;
  login: string;
  avatar_url: string;
  bio: string;
  html_url: string;
}

interface Language {
  JavaScript: number;
  TypeScript: number;
  PHP: number;
  HTML: number;
  CSS: number;
}

interface Data {
  name: string;
  value: number;
}

const Stats: React.FC = () => {
  const [selectedRepository, setSelectedRepository] = useState<string>('0');
  const [login, setLogin] = useState<string>('');
  const [repositories, setRepositories] = useState<GITHUBLogin[]>([]);
  const [user, setUser] = useState<GITHUBUser>({
    id: 0,
    login: '',
    avatar_url: '',
    html_url: '',
    bio: '',
  });
  const [stats, setStats] = useState<Language>({
    JavaScript: 0,
    TypeScript: 0,
    PHP: 0,
    HTML: 0,
    CSS: 0,
  });
  const [data, setData] = useState<Data[]>([
    {
      name: '',
      value: 0,
    },
  ]);

  // Acesso a API de linguagem do GitHub
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
  // Transformação de API de linguagem do GitHub
  useEffect(() => {
    const datas = Object.entries(stats).map(([name, value]) => {
      return { name, value };
    });

    setData(datas);
  }, [stats]);
  // Função de acesso aos repositórios do github
  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  async function handleLogin(event: FormEvent) {
    event.preventDefault();
    const users = await axios.get<GITHUBUser>(
      `https://api.github.com/users/${login}`,
    );
    setUser(users.data);
    const respos = await axios.get<GITHUBLogin[]>(
      `https://api.github.com/users/${login}/repos`,
    );
    return setRepositories(respos.data);
  }

  return (
    <>
      <Content>
        <Form onSubmit={handleLogin}>
          {selectedRepository !== '0' ? (
            <Avatar src={user.avatar_url} />
          ) : (
            <NoContent src={background} />
          )}
          <Title>Análise de Portifólio do Github</Title>
          <SearchContainer>
            <Search
              type="text"
              name="user"
              id="user"
              value={login}
              onChange={(e) => setLogin(e.target.value)}
              placeholder="Coloque seu Username"
            />

            <SearchIconButton type="submit">
              <SearchIcon src={search} alt="search" />
            </SearchIconButton>
          </SearchContainer>
          <RepositoryList
            name="repository"
            id="repository"
            value={selectedRepository}
            onChange={(e) => setSelectedRepository(e.target.value)}
          >
            <RepositoryOption value="0" data-testid="repository-option">
              Selecione o Repositório
            </RepositoryOption>

            {useMemo(
              () =>
                repositories.map((repository) => (
                  <RepositoryOption key={repository.id} value={repository.name}>
                    {repository.name}
                  </RepositoryOption>
                )),
              [repositories],
            )}
          </RepositoryList>
        </Form>
        {selectedRepository !== '0' ? (
          <DashboardContainer>
            <UserComponent user={user} />
            <LanguagesComponent data={data} />
          </DashboardContainer>
        ) : (
          <div />
        )}
        {selectedRepository !== '0' ? (
          <DashboardContainer>
            <BarChartComponent data={data} />
            <RadarChartComponent data={data} />
          </DashboardContainer>
        ) : (
          <div />
        )}
      </Content>
    </>
  );
};

export default Stats;
