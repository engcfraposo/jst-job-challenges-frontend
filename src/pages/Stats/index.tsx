/* eslint-disable camelcase */
/* eslint-disable react/jsx-one-expression-per-line */
import React, { useState, FormEvent, useEffect } from 'react';
import axios from 'axios';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
} from 'recharts';
import {
  Avatar,
  Form,
  Title,
  Search,
  IconButton,
  Icon,
  RepositoryList,
  RepositoryOption,
  ContainerRow,
  ContainerColumn,
  UserBox,
  UserText,
  UserTitle,
  UserLink,
  LanguagesBox,
  LanguagesText,
  LanguagesTitle,
} from './styles';
import logo from '../../assets/search.svg';

const Stats: React.FC = () => {
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

  // acesso a API de linguages do GitHub
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
      <Form onSubmit={handleLogin}>
        {selectedRepository !== '0' ? (
          <Avatar src={user.avatar_url} />
        ) : (
          <div />
        )}
        <Title>Análise de Portifólio do Github</Title>
        <ContainerRow>
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
        </ContainerRow>
        <RepositoryList
          name="repository"
          id="repository"
          value={selectedRepository}
          onChange={(e) => setSelectedRepository(e.target.value)}
        >
          <RepositoryOption value="0">Selecione o Repositório</RepositoryOption>

          {repositories.map((repository) => (
            <RepositoryOption key={repository.id} value={repository.name}>
              {repository.name}
            </RepositoryOption>
          ))}
        </RepositoryList>
      </Form>
      {selectedRepository !== '0' ? (
        <ContainerRow>
          <ContainerColumn>
            <UserBox>
              <UserTitle>{user.login}</UserTitle>
              <UserText>{user.bio}</UserText>
              <UserLink href={user.html_url}>{user.html_url}</UserLink>
            </UserBox>
          </ContainerColumn>
          <ContainerColumn>
            <LanguagesBox>
              <LanguagesTitle>Linguagens:</LanguagesTitle>
              {Object.entries(stats).map(([name, value]) => (
                <LanguagesText key={name}>
                  {name}: {value} palavras
                </LanguagesText>
              ))}
            </LanguagesBox>
          </ContainerColumn>
        </ContainerRow>
      ) : (
        <div />
      )}
      <ContainerRow>
        {selectedRepository !== '0' ? (
          <ContainerColumn>
            <BarChart
              width={500}
              height={150}
              data={data}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
              barSize={40}
            >
              <XAxis
                dataKey="name"
                scale="auto"
                padding={{ left: 0, right: 0 }}
                stroke="#FFF"
              />
              <YAxis stroke="#FFF" />
              <CartesianGrid strokeDasharray="3 3" stroke="#FFF" />
              <Bar dataKey="value" fill="#FFF" />
            </BarChart>
          </ContainerColumn>
        ) : (
          <div />
        )}
        {selectedRepository !== '0' ? (
          <ContainerColumn>
            <RadarChart
              cx={150}
              cy={150}
              outerRadius={100}
              width={350}
              height={250}
              data={data}
            >
              <PolarGrid />
              <PolarAngleAxis dataKey="name" stroke="#FFF" />
              <PolarRadiusAxis />
              <Radar
                name="Mike"
                dataKey="value"
                stroke="fff"
                fill="#fff"
                fillOpacity={0.6}
              />
            </RadarChart>
          </ContainerColumn>
        ) : (
          <div />
        )}
      </ContainerRow>
    </>
  );
};

export default Stats;
